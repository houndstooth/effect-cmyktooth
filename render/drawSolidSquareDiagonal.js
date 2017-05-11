import ctx from '../../shared/render/ctx'
import { SQRT } from '../common/constants'
import { UNIT } from '../../shared/common/customize'

export default ({ origin, size }) => {
	ctx.beginPath()

	ctx.moveTo(
		origin[ 0 ],
		origin[ 1 ]
	)
	ctx.lineTo(
		origin[ 0 ] + ((UNIT * size) / SQRT),
		origin[ 1 ] - ((UNIT * size) / SQRT)
	)
	ctx.lineTo(
		origin[ 0 ] + ((UNIT * size) * SQRT),
		origin[ 1 ]
	)
	ctx.lineTo(
		origin[ 0 ] + ((UNIT * size) / SQRT),
		origin[ 1 ] + ((UNIT * size) / SQRT)
	)

	ctx.closePath()
	ctx.fill()
}