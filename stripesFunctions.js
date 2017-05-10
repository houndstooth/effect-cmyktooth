import { SQRT } from './constants'

const principalDiagonalStripes = ({ctx, origin, size, squareType}) => {
	ctx.beginPath()

	if (squareType == 'STRIPED_TOP_CUSP_OPAQUE') {

		//top right (move to)
		ctx.moveTo(origin[ 0 ] + size, origin[ 1 ])
		//top middle
		ctx.lineTo(origin[ 0 ] + size / 2, origin[ 1 ])
		//middle right
		ctx.lineTo(origin[ 0 ] + size, origin[ 1 ] + size / 2)
		//close and fill
		ctx.closePath()
		ctx.fill()

		ctx.beginPath()
		//bottom right (move to)
		ctx.moveTo(origin[ 0 ] + size, origin[ 1 ] + size)
		//top left
		ctx.lineTo(origin[ 0 ], origin[ 1 ])
		//middle left
		ctx.lineTo(origin[ 0 ], origin[ 1 ] + size / 2)
		//bottom middle
		ctx.lineTo(origin[ 0 ] + size / 2, origin[ 1 ] + size)

	} else if (squareType == 'STRIPED_TOP_CUSP_TRANSLUCENT') {

		//top middle (move to)
		ctx.moveTo(origin[ 0 ] + size / 2, origin[ 1 ])
		//top left
		ctx.lineTo(origin[ 0 ], origin[ 1 ])
		//bottom right
		ctx.lineTo(origin[ 0 ] + size, origin[ 1 ] + size)
		//middle right
		ctx.lineTo(origin[ 0 ] + size, origin[ 1 ] + size / 2)
		//close and fill
		ctx.closePath()
		ctx.fill()

		ctx.beginPath()
		//bottom middle (move to)
		ctx.moveTo(origin[ 0 ] + size / 2, origin[ 1 ] + size)
		//middle left
		ctx.lineTo(origin[ 0 ], origin[ 1 ] + size / 2)
		//bottom left
		ctx.lineTo(origin[ 0 ], origin[ 1 ] + size)
	}

	ctx.closePath()
	ctx.fill()
}

//basically like principal diagonal, just rotated counter-clockwise 45 degrees
const horizontalStripes = ({ctx, origin, size, squareType}) => {
	ctx.beginPath()

	if (squareType == 'STRIPED_TOP_CUSP_OPAQUE') {

		//top right (move to)
		ctx.moveTo(origin[ 0 ] + ((size * SQRT) / 2 ), origin[ 1 ] - ((size * SQRT) / 2  ))
		//top middle
		ctx.lineTo(origin[ 0 ] + ((size * SQRT) / 4 ), origin[ 1 ] - ((size * SQRT) / 4 ))
		//middle right
		ctx.lineTo(origin[ 0 ] + ((3 * (size * SQRT)) / 4), origin[ 1 ] - ((size * SQRT) / 4 ))
		//close and fill
		ctx.closePath()
		ctx.fill()

		ctx.beginPath()
		//bottom right (move to)
		ctx.moveTo(origin[ 0 ] + size * SQRT, origin[ 1 ])
		//top left
		ctx.lineTo(origin[ 0 ], origin[ 1 ])
		//middle left
		ctx.lineTo(origin[ 0 ] + ((size * SQRT) / 4), origin[ 1 ] + ((size * SQRT) / 4 ))
		//bottom middle
		ctx.lineTo(origin[ 0 ] + ((3 * (size * SQRT)) / 4), origin[ 1 ] + (((size * SQRT)) / 4    ))

	} else if (squareType == 'STRIPED_TOP_CUSP_TRANSLUCENT') {

		//top middle (move to)
		ctx.moveTo(origin[ 0 ] + ((size * SQRT) / 4 ), origin[ 1 ] - ((size * SQRT) / 4 ))
		//top left
		ctx.lineTo(origin[ 0 ], origin[ 1 ])
		//bottom right
		ctx.lineTo(origin[ 0 ] + size * SQRT, origin[ 1 ])
		//middle right
		ctx.lineTo(origin[ 0 ] + ((3 * (size * SQRT)) / 4), origin[ 1 ] - ((size * SQRT) / 4 ))
		//close and fill
		ctx.closePath()
		ctx.fill()

		ctx.beginPath()
		//bottom middle (move to)
		ctx.moveTo(origin[ 0 ] + ((3 * (size * SQRT)) / 4), origin[ 1 ] + (((size * SQRT)) / 4    ))
		//middle left
		ctx.lineTo(origin[ 0 ] + ((size * SQRT) / 4), origin[ 1 ] + ((size * SQRT) / 4 ))
		//bottom left
		ctx.lineTo(origin[ 0 ] + ((size * SQRT) / 2 ), origin[ 1 ] + ((size * SQRT) / 2  ))
	}

	ctx.closePath()
	ctx.fill()
}

//basically like minor diagonal, just rotated counter-clockwise 45 degrees
const verticalStripes = ({ctx, origin, size, squareType}) => {
	ctx.beginPath()

	if (squareType == 'STRIPED_TOP_CUSP_OPAQUE') {

		//top left (move to)
		ctx.moveTo(origin[ 0 ], origin[ 1 ])
		//top middle
		ctx.lineTo(origin[ 0 ] + ((size * SQRT) / 4 ), origin[ 1 ] - ((size * SQRT) / 4 ))
		//middle left
		ctx.lineTo(origin[ 0 ] + ((size * SQRT) / 4), origin[ 1 ] + ((size * SQRT) / 4 ))
		//close and fill
		ctx.closePath()
		ctx.fill()

		ctx.beginPath()
		//top right (move to)
		ctx.moveTo(origin[ 0 ] + ((size * SQRT) / 2 ), origin[ 1 ] - ((size * SQRT) / 2  ))
		//bottom left
		ctx.lineTo(origin[ 0 ] + ((size * SQRT) / 2 ), origin[ 1 ] + ((size * SQRT) / 2  ))
		//bottom middle
		ctx.lineTo(origin[ 0 ] + ((3 * (size * SQRT)) / 4), origin[ 1 ] + (((size * SQRT)) / 4    ))
		//middle right
		ctx.lineTo(origin[ 0 ] + ((3 * (size * SQRT)) / 4), origin[ 1 ] - ((size * SQRT) / 4 ))

	} else if (squareType == 'STRIPED_TOP_CUSP_TRANSLUCENT') {

		//top middle
		ctx.moveTo(origin[ 0 ] + ((size * SQRT) / 4 ), origin[ 1 ] - ((size * SQRT) / 4 ))
		//top right
		ctx.lineTo(origin[ 0 ] + ((size * SQRT) / 2 ), origin[ 1 ] - ((size * SQRT) / 2  ))
		//bottom left
		ctx.lineTo(origin[ 0 ] + ((size * SQRT) / 2 ), origin[ 1 ] + ((size * SQRT) / 2  ))
		//middle left
		ctx.lineTo(origin[ 0 ] + ((size * SQRT) / 4), origin[ 1 ] + ((size * SQRT) / 4 ))
		//close and fill
		ctx.closePath()
		ctx.fill()

		ctx.beginPath()
		//bottom middle (move to)
		ctx.moveTo(origin[ 0 ] + ((3 * (size * SQRT)) / 4), origin[ 1 ] + (((size * SQRT)) / 4    ))
		//middle right
		ctx.lineTo(origin[ 0 ] + ((3 * (size * SQRT)) / 4), origin[ 1 ] - ((size * SQRT) / 4 ))
		//bottom right
		ctx.lineTo(origin[ 0 ] + size * SQRT, origin[ 1 ])

	}

	ctx.closePath()
	ctx.fill()
}

const minorDiagonalStripes = ({ctx, origin, size, squareType}) => {
	ctx.beginPath()

	if (squareType == 'STRIPED_TOP_CUSP_OPAQUE') {

		//top left (move to)
		ctx.moveTo(origin[ 0 ], origin[ 1 ])
		//top middle
		ctx.lineTo(origin[ 0 ] + size / 2, origin[ 1 ])
		//middle left
		ctx.lineTo(origin[ 0 ], origin[ 1 ] + size / 2)
		//close and fill
		ctx.closePath()
		ctx.fill()

		ctx.beginPath()
		//top right (move to)
		ctx.moveTo(origin[ 0 ] + size, origin[ 1 ])
		//bottom left
		ctx.lineTo(origin[ 0 ], origin[ 1 ] + size)
		//bottom middle
		ctx.lineTo(origin[ 0 ] + size / 2, origin[ 1 ] + size)
		//middle right
		ctx.lineTo(origin[ 0 ] + size, origin[ 1 ] + size / 2)

	} else if (squareType == 'STRIPED_TOP_CUSP_TRANSLUCENT') {

		//top middle (move to)
		ctx.moveTo(origin[ 0 ] + size / 2, origin[ 1 ])
		//top right
		ctx.lineTo(origin[ 0 ] + size, origin[ 1 ])
		//bottom left
		ctx.lineTo(origin[ 0 ], origin[ 1 ] + size)
		//middle left
		ctx.lineTo(origin[ 0 ], origin[ 1 ] + size / 2)
		//close and fill
		ctx.closePath()
		ctx.fill()

		ctx.beginPath()
		//bottom middle (move to)
		ctx.moveTo(origin[ 0 ] + size / 2, origin[ 1 ] + size)
		//middle right
		ctx.lineTo(origin[ 0 ] + size, origin[ 1 ] + size / 2)
		//bottom right
		ctx.lineTo(origin[ 0 ] + size, origin[ 1 ] + size)
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