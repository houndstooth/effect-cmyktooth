import { SQRT } from '../common/constants'
import { CANVAS_SIZE } from '../../shared/common/customize'

export default ({ isGridDiagonal, howManySquaresFitInTheWindowWhenUnitIsOne }) => {
	if (isGridDiagonal) {
		return (CANVAS_SIZE / howManySquaresFitInTheWindowWhenUnitIsOne) / SQRT
	}

	return CANVAS_SIZE / howManySquaresFitInTheWindowWhenUnitIsOne
}
