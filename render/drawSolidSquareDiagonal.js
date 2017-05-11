import ctx from '../../shared/render/ctx'
import { SQRT } from '../common/constants'
import { UNIT } from '../../shared/common/customize'

export default ({ origin, size, color }) => {
	const diagonalSizedUnit = UNIT * size / SQRT

	ctx.fillStyle = color
	ctx.beginPath()

	ctx.moveTo(
		origin[ 0 ],
		origin[ 1 ]
	)
	ctx.lineTo(
		origin[ 0 ] + diagonalSizedUnit,
		origin[ 1 ] - diagonalSizedUnit
	)
	ctx.lineTo(
		origin[ 0 ] + 2 * diagonalSizedUnit,
		origin[ 1 ]
	)
	ctx.lineTo(
		origin[ 0 ] + diagonalSizedUnit,
		origin[ 1 ] + diagonalSizedUnit
	)

	ctx.closePath()
	ctx.fill()
}