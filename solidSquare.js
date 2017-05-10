import { SQRT } from './constants'

export default ({ctx, origin, size, isMainGridDiagonal}) => {
	ctx.beginPath()
	ctx.moveTo(origin[ 0 ], origin[ 1 ])

	if (isMainGridDiagonal) {
		ctx.lineTo(origin[ 0 ] + size / SQRT, origin[ 1 ] - size / SQRT)
		ctx.lineTo(origin[ 0 ] + size * SQRT, origin[ 1 ])
		ctx.lineTo(origin[ 0 ] + size / SQRT, origin[ 1 ] + size / SQRT)
	} else {
		ctx.lineTo(origin[ 0 ] + size, origin[ 1 ])
		ctx.lineTo(origin[ 0 ] + size, origin[ 1 ] + size)
		ctx.lineTo(origin[ 0 ], origin[ 1 ] + size)
	}

	ctx.closePath()
	ctx.fill()
}