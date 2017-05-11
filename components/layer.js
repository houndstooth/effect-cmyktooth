import square from './square'
import calculateColorAndTransparency from '../utilities/calculateColorAndTransparency'
import iterator from '../../shared/utilities/iterator'
import calculateSquareOrigin from '../utilities/calculateSquareOrigin'
import calculateSquareType from '../utilities/calculateSquareType'
import calculateGridOrigin from '../utilities/calculateGridOrigin'
import { GRID_SIZE } from '../common/customize'
import { ORIENTATION_OF_STRIPES_TO_GRID_DIAGONALITY_MAPPING } from '../common/constants'

export default ({ orientation, squareSize, iteration }) => {
	const color = calculateColorAndTransparency({ iteration, orientation })
	const isGridDiagonal = ORIENTATION_OF_STRIPES_TO_GRID_DIAGONALITY_MAPPING[ orientation ]
	const gridOrigin = calculateGridOrigin({ isGridDiagonal, squareSize })

	iterator(GRID_SIZE).forEach(x => {
		iterator(GRID_SIZE).forEach(y => {
			const origin = calculateSquareOrigin({ x, y, isGridDiagonal, squareSize, gridOrigin })
			const squareType = calculateSquareType({ x, y })
			square({ origin, size: squareSize, orientation, squareType, iteration, color })
		})
	})
}