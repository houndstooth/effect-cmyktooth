import { SQRT } from './constants'
import { CENTER } from '../shared/constants'
import { GRID_SIZE } from './customize'

export default (isMainGridDiagonal, squareSize) => {
	let gridOrigin
	if (isMainGridDiagonal) {
		gridOrigin = [
			CENTER[ 0 ] - (((GRID_SIZE / 2) * SQRT) * squareSize),
			CENTER[ 1 ]
		]
	} else {
		gridOrigin = [
			CENTER[ 0 ] - ((GRID_SIZE / 2) * squareSize),
			CENTER[ 1 ] - ((GRID_SIZE / 2) * squareSize)
		]
	}
	return gridOrigin
}