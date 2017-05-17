import { CANVAS_SIZE } from '../../shared/common/customize'

export default ({ isGridDiagonal, howManySquaresFitInTheWindowWhenUnitIsOne }) => {
	return ( CANVAS_SIZE / howManySquaresFitInTheWindowWhenUnitIsOne ) / ( isGridDiagonal ? Math.sqrt(2) : 1 )
}
