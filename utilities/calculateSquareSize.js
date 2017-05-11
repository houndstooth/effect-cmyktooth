import { SQRT } from '../common/constants'
import { CANVAS_SIZE } from '../../shared/common/customize'

export default (isMainGridDiagonal, howManySquaresFitInTheWindowWhenUnitIsOne) => {
	let squareSize
	if (isMainGridDiagonal) {
		squareSize = (CANVAS_SIZE / howManySquaresFitInTheWindowWhenUnitIsOne) / SQRT
	} else {
		squareSize = CANVAS_SIZE / howManySquaresFitInTheWindowWhenUnitIsOne
	}
	return squareSize
}
