import { SQRT } from '../common/constants'
import { CANVAS_SIZE } from '../../shared/common/customize'

export default ({ isGridDiagonal, howManySquaresFitInTheWindowWhenUnitIsOne }) => {
	let squareSize
	if (isGridDiagonal) {
		squareSize = (CANVAS_SIZE / howManySquaresFitInTheWindowWhenUnitIsOne) / SQRT
	} else {
		squareSize = CANVAS_SIZE / howManySquaresFitInTheWindowWhenUnitIsOne
	}
	return squareSize
}
