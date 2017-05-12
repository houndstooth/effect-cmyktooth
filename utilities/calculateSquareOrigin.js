import { SQRT } from '../common/constants'

export default ({ x, y, isGridDiagonal, squareSize, gridOrigin }) => {
	let originX, originY
	if (isGridDiagonal) {
		originX = gridOrigin[ 0 ] + x * squareSize / SQRT + y * squareSize / SQRT
		originY = gridOrigin[ 1 ] - x * squareSize / SQRT + y * squareSize / SQRT
	} else {
		originX = gridOrigin[ 0 ] + x * squareSize
		originY = gridOrigin[ 1 ] + y * squareSize
	}
	return [ originX, originY ]
}
