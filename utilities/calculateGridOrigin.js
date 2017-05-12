import { SQRT } from '../common/constants'
import { CENTER } from '../../shared/common/constants'
import { UNIT, GRID_SIZE } from '../../shared/common/customize'

export default ({ isGridDiagonal, squareSize }) => {
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

	if (GRID_SIZE % 2 == 0) {
		if (isGridDiagonal) {
			gridOrigin[0] += squareSize * SQRT * UNIT / 2
		} else {
			gridOrigin[0] += squareSize * UNIT / 2
			gridOrigin[1] += squareSize * UNIT / 2
		}
	}

	return gridOrigin
}