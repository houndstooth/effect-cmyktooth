import { SQRT } from '../common/constants'
import { CENTER } from '../../shared/common/constants'
import { GRID_SIZE } from '../../shared/common/customize'

export default ({ isGridDiagonal, squareSize }) => {
	let gridOrigin

	if (isGridDiagonal) {
		gridOrigin = [
			CENTER[ 0 ] - GRID_SIZE * SQRT * squareSize / 2,
			CENTER[ 1 ]
		]
	} else {
		gridOrigin = [
			CENTER[ 0 ] - GRID_SIZE * squareSize / 2,
			CENTER[ 1 ] - GRID_SIZE * squareSize / 2
		]
	}

	if (GRID_SIZE % 2 == 0) {
		if (isGridDiagonal) {
			gridOrigin[0] += squareSize * SQRT / 2
		} else {
			gridOrigin[0] += squareSize / 2
			gridOrigin[1] += squareSize / 2
		}
	}

	return gridOrigin
}