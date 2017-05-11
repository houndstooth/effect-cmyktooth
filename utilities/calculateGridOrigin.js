import { SQRT } from '../common/constants'
import { CENTER } from '../../shared/common/constants'
import { GRID_SIZE } from '../common/customize'
import { UNIT } from '../../shared/common/customize'

export default (isGridDiagonal, squareSize) => {
	let gridOrigin
	if (isGridDiagonal) {
		gridOrigin = [
			CENTER[ 0 ] - ((((GRID_SIZE / 2) * SQRT) * squareSize) * UNIT),
			CENTER[ 1 ]
		]
	} else {
		gridOrigin = [
			CENTER[ 0 ] - (((GRID_SIZE / 2) * squareSize) * UNIT),
			CENTER[ 1 ] - (((GRID_SIZE / 2) * squareSize) * UNIT)
		]
	}
	return gridOrigin
}