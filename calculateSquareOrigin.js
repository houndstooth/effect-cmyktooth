import { SQRT } from './constants'
import calculateGridOrigin from './calculateGridOrigin'

export default (x, y, isMainGridDiagonal, squareSize) => {
	//the grid origin is the leftmost corner when the grid is diagonal
	//and the top left corner when the grid is axial
	let gridOrigin = calculateGridOrigin(isMainGridDiagonal, squareSize)

	let originX, originY
	if (isMainGridDiagonal) {
		originX = gridOrigin[ 0 ] + (x * (squareSize / SQRT)) + (y * (squareSize / SQRT))
		originY = gridOrigin[ 1 ] - (x * (squareSize / SQRT)) + (y * (squareSize / SQRT))
	} else {
		originX = gridOrigin[ 0 ] + (x * squareSize)
		originY = gridOrigin[ 1 ] + (y * squareSize)
	}
	return [ originX, originY ]
}
