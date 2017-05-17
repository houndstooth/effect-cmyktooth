import layer from '../components/layer'
import iterator from '../../shared/utilities/iterator'
import calculateSquareSize from '../utilities/calculateSquareSize'
import { END_ITERATION } from '../../shared/common/customize'
import { ORIENTATION_OF_STRIPES_TO_GRID_DIAGONALITY_MAPPING } from '../common/constants'

let howManySquaresFitInTheWindowWhenUnitIsOne = 1

const ORIENTATION = [
	'TOP_RIGHT',
	'RIGHT',
	'BOTTOM_RIGHT',
	'BOTTOM',
	'BOTTOM_LEFT',
	'LEFT',
	'TOP_LEFT',
	'TOP'
]

export default () => {
	iterator(END_ITERATION, {oneIndexed: true}).forEach(iteration => {
		const orientation = ORIENTATION[ iteration % 8 ]
		const isGridDiagonal = ORIENTATION_OF_STRIPES_TO_GRID_DIAGONALITY_MAPPING[ orientation ]
		const squareSize = calculateSquareSize({ howManySquaresFitInTheWindowWhenUnitIsOne, isGridDiagonal })

		layer({ orientation, squareSize, iteration })

		if (isGridDiagonal) howManySquaresFitInTheWindowWhenUnitIsOne++
	})
}