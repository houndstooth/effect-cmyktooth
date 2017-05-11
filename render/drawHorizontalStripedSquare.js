import ctx from '../../shared/render/ctx'
import { SQRT } from '../common/constants'
import { UNIT } from '../../shared/common/customize'

export default ({origin, size, originColor, otherColor }) => {
	const sizedUnit = size * UNIT

	ctx.beginPath()
	//top right (move to)
	ctx.moveTo(origin[ 0 ] + ((sizedUnit * SQRT) / 2 ), origin[ 1 ] - ((sizedUnit * SQRT) / 2  ))
	//top middle
	ctx.lineTo(origin[ 0 ] + ((sizedUnit * SQRT) / 4 ), origin[ 1 ] - ((sizedUnit * SQRT) / 4 ))
	//middle right
	ctx.lineTo(origin[ 0 ] + ((3 * (sizedUnit * SQRT)) / 4), origin[ 1 ] - ((sizedUnit * SQRT) / 4 ))
	//close and fill origin color
	ctx.closePath()
	ctx.fillStyle = originColor
	ctx.fill()

	ctx.beginPath()
	//top middle (move to)
	ctx.moveTo(origin[ 0 ] + ((sizedUnit * SQRT) / 4 ), origin[ 1 ] - ((sizedUnit * SQRT) / 4 ))
	//top left
	ctx.lineTo(origin[ 0 ], origin[ 1 ])
	//bottom right
	ctx.lineTo(origin[ 0 ] + sizedUnit * SQRT, origin[ 1 ])
	//middle right
	ctx.lineTo(origin[ 0 ] + ((3 * (sizedUnit * SQRT)) / 4), origin[ 1 ] - ((sizedUnit * SQRT) / 4 ))
	//close and fill other color
	ctx.closePath()
	ctx.fillStyle = otherColor
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
	//close and fill origin color
	ctx.closePath()
	ctx.fillStyle = originColor
	ctx.fill()

	ctx.beginPath()
	//bottom middle (move to)
	ctx.moveTo(origin[ 0 ] + ((3 * (sizedUnit * SQRT)) / 4), origin[ 1 ] + (((sizedUnit * SQRT)) / 4    ))
	//middle left
	ctx.lineTo(origin[ 0 ] + ((sizedUnit * SQRT) / 4), origin[ 1 ] + ((sizedUnit * SQRT) / 4 ))
	//bottom left
	ctx.lineTo(origin[ 0 ] + ((sizedUnit * SQRT) / 2 ), origin[ 1 ] + ((sizedUnit * SQRT) / 2  ))
	//close and fill other color
	ctx.closePath()
	ctx.fillStyle = otherColor
	ctx.fill()
}