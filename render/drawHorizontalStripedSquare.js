import ctx from '../../shared/render/ctx'
import { SQRT } from '../common/constants'
import { UNIT } from '../../shared/common/customize'

export default ({ origin, size, originColor, otherColor }) => {
	const diagonalSizedUnit = size * UNIT * SQRT / 4

	ctx.beginPath()
	//top right (move to)
	ctx.moveTo(origin[ 0 ] + 2 * diagonalSizedUnit, origin[ 1 ] - 2 * diagonalSizedUnit)
	//top middle
	ctx.lineTo(origin[ 0 ] + diagonalSizedUnit, origin[ 1 ] - diagonalSizedUnit)
	//middle right
	ctx.lineTo(origin[ 0 ] + 3 * diagonalSizedUnit, origin[ 1 ] - diagonalSizedUnit)
	//close and fill origin color
	ctx.closePath()
	ctx.fillStyle = originColor
	ctx.fill()

	ctx.beginPath()
	//top middle (move to)
	ctx.moveTo(origin[ 0 ] + diagonalSizedUnit, origin[ 1 ] - diagonalSizedUnit)
	//top left
	ctx.lineTo(origin[ 0 ], origin[ 1 ])
	//bottom right
	ctx.lineTo(origin[ 0 ] + 4 * diagonalSizedUnit, origin[ 1 ])
	//middle right
	ctx.lineTo(origin[ 0 ] + 3 * diagonalSizedUnit, origin[ 1 ] - diagonalSizedUnit)
	//close and fill other color
	ctx.closePath()
	ctx.fillStyle = otherColor
	ctx.fill()

	ctx.beginPath()
	//bottom right (move to)
	ctx.moveTo(origin[ 0 ] + 4 * diagonalSizedUnit, origin[ 1 ])
	//top left
	ctx.lineTo(origin[ 0 ], origin[ 1 ])
	//middle left
	ctx.lineTo(origin[ 0 ] + diagonalSizedUnit, origin[ 1 ] + diagonalSizedUnit)
	//bottom middle
	ctx.lineTo(origin[ 0 ] + 3 * diagonalSizedUnit, origin[ 1 ] + diagonalSizedUnit)
	//close and fill origin color
	ctx.closePath()
	ctx.fillStyle = originColor
	ctx.fill()

	ctx.beginPath()
	//bottom middle (move to)
	ctx.moveTo(origin[ 0 ] + 3 * diagonalSizedUnit, origin[ 1 ] + diagonalSizedUnit)
	//middle left
	ctx.lineTo(origin[ 0 ] + diagonalSizedUnit, origin[ 1 ] + diagonalSizedUnit)
	//bottom left
	ctx.lineTo(origin[ 0 ] + 2 * diagonalSizedUnit, origin[ 1 ] + 2 * diagonalSizedUnit)
	//close and fill other color
	ctx.closePath()
	ctx.fillStyle = otherColor
	ctx.fill()
}