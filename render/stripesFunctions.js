import ctx from '../../shared/render/ctx'
import { SQRT } from '../common/constants'
import { UNIT } from '../../shared/common/customize'

const principalDiagonalStripes = ({origin, size, squareType}) => {
	const sizedUnit = size * UNIT

	ctx.beginPath()

	if (squareType == 'STRIPED_TOP_CUSP_OPAQUE') {

		//top right (move to)
		ctx.moveTo(origin[ 0 ] + sizedUnit, origin[ 1 ])
		//top middle
		ctx.lineTo(origin[ 0 ] + sizedUnit / 2, origin[ 1 ])
		//middle right
		ctx.lineTo(origin[ 0 ] + sizedUnit, origin[ 1 ] + sizedUnit / 2)
		//close and fill
		ctx.closePath()
		ctx.fill()

		ctx.beginPath()
		//bottom right (move to)
		ctx.moveTo(origin[ 0 ] + sizedUnit, origin[ 1 ] + sizedUnit)
		//top left
		ctx.lineTo(origin[ 0 ], origin[ 1 ])
		//middle left
		ctx.lineTo(origin[ 0 ], origin[ 1 ] + sizedUnit / 2)
		//bottom middle
		ctx.lineTo(origin[ 0 ] + sizedUnit / 2, origin[ 1 ] + sizedUnit)

	} else if (squareType == 'STRIPED_TOP_CUSP_TRANSLUCENT') {

		//top middle (move to)
		ctx.moveTo(origin[ 0 ] + sizedUnit / 2, origin[ 1 ])
		//top left
		ctx.lineTo(origin[ 0 ], origin[ 1 ])
		//bottom right
		ctx.lineTo(origin[ 0 ] + sizedUnit, origin[ 1 ] + sizedUnit)
		//middle right
		ctx.lineTo(origin[ 0 ] + sizedUnit, origin[ 1 ] + sizedUnit / 2)
		//close and fill
		ctx.closePath()
		ctx.fill()

		ctx.beginPath()
		//bottom middle (move to)
		ctx.moveTo(origin[ 0 ] + sizedUnit / 2, origin[ 1 ] + sizedUnit)
		//middle left
		ctx.lineTo(origin[ 0 ], origin[ 1 ] + sizedUnit / 2)
		//bottom left
		ctx.lineTo(origin[ 0 ], origin[ 1 ] + sizedUnit)
	}

	ctx.closePath()
	ctx.fill()
}

//basically like principal diagonal, just rotated counter-clockwise 45 degrees
const horizontalStripes = ({origin, size, squareType}) => {
	const sizedUnit = size * UNIT

	ctx.beginPath()

	if (squareType == 'STRIPED_TOP_CUSP_OPAQUE') {

		//top right (move to)
		ctx.moveTo(origin[ 0 ] + ((sizedUnit * SQRT) / 2 ), origin[ 1 ] - ((sizedUnit * SQRT) / 2  ))
		//top middle
		ctx.lineTo(origin[ 0 ] + ((sizedUnit * SQRT) / 4 ), origin[ 1 ] - ((sizedUnit * SQRT) / 4 ))
		//middle right
		ctx.lineTo(origin[ 0 ] + ((3 * (sizedUnit * SQRT)) / 4), origin[ 1 ] - ((sizedUnit * SQRT) / 4 ))
		//close and fill
		ctx.closePath()
		ctx.fill()

		ctx.beginPath()
		//bottom right (move to)
		ctx.moveTo(origin[ 0 ] + sizedUnit * SQRT, origin[ 1 ])
		//top left
		ctx.lineTo(origin[ 0 ], origin[ 1 ])
		//middle left
		ctx.lineTo(origin[ 0 ] + ((sizedUnit * SQRT) / 4), origin[ 1 ] + ((sizedUnit * SQRT) / 4 ))
		//bottom middle
		ctx.lineTo(origin[ 0 ] + ((3 * (sizedUnit * SQRT)) / 4), origin[ 1 ] + (((sizedUnit * SQRT)) / 4    ))

	} else if (squareType == 'STRIPED_TOP_CUSP_TRANSLUCENT') {

		//top middle (move to)
		ctx.moveTo(origin[ 0 ] + ((sizedUnit * SQRT) / 4 ), origin[ 1 ] - ((sizedUnit * SQRT) / 4 ))
		//top left
		ctx.lineTo(origin[ 0 ], origin[ 1 ])
		//bottom right
		ctx.lineTo(origin[ 0 ] + sizedUnit * SQRT, origin[ 1 ])
		//middle right
		ctx.lineTo(origin[ 0 ] + ((3 * (sizedUnit * SQRT)) / 4), origin[ 1 ] - ((sizedUnit * SQRT) / 4 ))
		//close and fill
		ctx.closePath()
		ctx.fill()

		ctx.beginPath()
		//bottom middle (move to)
		ctx.moveTo(origin[ 0 ] + ((3 * (sizedUnit * SQRT)) / 4), origin[ 1 ] + (((sizedUnit * SQRT)) / 4    ))
		//middle left
		ctx.lineTo(origin[ 0 ] + ((sizedUnit * SQRT) / 4), origin[ 1 ] + ((sizedUnit * SQRT) / 4 ))
		//bottom left
		ctx.lineTo(origin[ 0 ] + ((sizedUnit * SQRT) / 2 ), origin[ 1 ] + ((sizedUnit * SQRT) / 2  ))
	}

	ctx.closePath()
	ctx.fill()
}

//basically like minor diagonal, just rotated counter-clockwise 45 degrees
const verticalStripes = ({origin, size, squareType}) => {
	const sizedUnit = size * UNIT

	ctx.beginPath()

	if (squareType == 'STRIPED_TOP_CUSP_OPAQUE') {

		//top left (move to)
		ctx.moveTo(origin[ 0 ], origin[ 1 ])
		//top middle
		ctx.lineTo(origin[ 0 ] + ((sizedUnit * SQRT) / 4 ), origin[ 1 ] - ((sizedUnit * SQRT) / 4 ))
		//middle left
		ctx.lineTo(origin[ 0 ] + ((sizedUnit * SQRT) / 4), origin[ 1 ] + ((sizedUnit * SQRT) / 4 ))
		//close and fill
		ctx.closePath()
		ctx.fill()

		ctx.beginPath()
		//top right (move to)
		ctx.moveTo(origin[ 0 ] + ((sizedUnit * SQRT) / 2 ), origin[ 1 ] - ((sizedUnit * SQRT) / 2  ))
		//bottom left
		ctx.lineTo(origin[ 0 ] + ((sizedUnit * SQRT) / 2 ), origin[ 1 ] + ((sizedUnit * SQRT) / 2  ))
		//bottom middle
		ctx.lineTo(origin[ 0 ] + ((3 * (sizedUnit * SQRT)) / 4), origin[ 1 ] + (((sizedUnit * SQRT)) / 4    ))
		//middle right
		ctx.lineTo(origin[ 0 ] + ((3 * (sizedUnit * SQRT)) / 4), origin[ 1 ] - ((sizedUnit * SQRT) / 4 ))

	} else if (squareType == 'STRIPED_TOP_CUSP_TRANSLUCENT') {

		//top middle
		ctx.moveTo(origin[ 0 ] + ((sizedUnit * SQRT) / 4 ), origin[ 1 ] - ((sizedUnit * SQRT) / 4 ))
		//top right
		ctx.lineTo(origin[ 0 ] + ((sizedUnit * SQRT) / 2 ), origin[ 1 ] - ((sizedUnit * SQRT) / 2  ))
		//bottom left
		ctx.lineTo(origin[ 0 ] + ((sizedUnit * SQRT) / 2 ), origin[ 1 ] + ((sizedUnit * SQRT) / 2  ))
		//middle left
		ctx.lineTo(origin[ 0 ] + ((sizedUnit * SQRT) / 4), origin[ 1 ] + ((sizedUnit * SQRT) / 4 ))
		//close and fill
		ctx.closePath()
		ctx.fill()

		ctx.beginPath()
		//bottom middle (move to)
		ctx.moveTo(origin[ 0 ] + ((3 * (sizedUnit * SQRT)) / 4), origin[ 1 ] + (((sizedUnit * SQRT)) / 4    ))
		//middle right
		ctx.lineTo(origin[ 0 ] + ((3 * (sizedUnit * SQRT)) / 4), origin[ 1 ] - ((sizedUnit * SQRT) / 4 ))
		//bottom right
		ctx.lineTo(origin[ 0 ] + sizedUnit * SQRT, origin[ 1 ])

	}

	ctx.closePath()
	ctx.fill()
}

const minorDiagonalStripes = ({origin, size, squareType}) => {
	const sizedUnit = size * UNIT

	ctx.beginPath()

	if (squareType == 'STRIPED_TOP_CUSP_OPAQUE') {

		//top left (move to)
		ctx.moveTo(origin[ 0 ], origin[ 1 ])
		//top middle
		ctx.lineTo(origin[ 0 ] + sizedUnit / 2, origin[ 1 ])
		//middle left
		ctx.lineTo(origin[ 0 ], origin[ 1 ] + sizedUnit / 2)
		//close and fill
		ctx.closePath()
		ctx.fill()

		ctx.beginPath()
		//top right (move to)
		ctx.moveTo(origin[ 0 ] + sizedUnit, origin[ 1 ])
		//bottom left
		ctx.lineTo(origin[ 0 ], origin[ 1 ] + sizedUnit)
		//bottom middle
		ctx.lineTo(origin[ 0 ] + sizedUnit / 2, origin[ 1 ] + sizedUnit)
		//middle right
		ctx.lineTo(origin[ 0 ] + sizedUnit, origin[ 1 ] + sizedUnit / 2)

	} else if (squareType == 'STRIPED_TOP_CUSP_TRANSLUCENT') {

		//top middle (move to)
		ctx.moveTo(origin[ 0 ] + sizedUnit / 2, origin[ 1 ])
		//top right
		ctx.lineTo(origin[ 0 ] + sizedUnit, origin[ 1 ])
		//bottom left
		ctx.lineTo(origin[ 0 ], origin[ 1 ] + sizedUnit)
		//middle left
		ctx.lineTo(origin[ 0 ], origin[ 1 ] + sizedUnit / 2)
		//close and fill
		ctx.closePath()
		ctx.fill()

		ctx.beginPath()
		//bottom middle (move to)
		ctx.moveTo(origin[ 0 ] + sizedUnit / 2, origin[ 1 ] + sizedUnit)
		//middle right
		ctx.lineTo(origin[ 0 ] + sizedUnit, origin[ 1 ] + sizedUnit / 2)
		//bottom right
		ctx.lineTo(origin[ 0 ] + sizedUnit, origin[ 1 ] + sizedUnit)
		//close and fill
	}

	ctx.closePath()
	ctx.fill()
}

export {
	minorDiagonalStripes,
	principalDiagonalStripes,
	verticalStripes,
	horizontalStripes
}