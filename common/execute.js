import layer from '../components/layer'
import iterator from '../../shared/utilities/iterator'
import calculateSquareSize from '../utilities/calculateSquareSize'
import { END_ITERATION } from '../../shared/common/customize'

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
		const isGridDiagonal = iteration % 2 === 1
		const squareSize = calculateSquareSize({ howManySquaresFitInTheWindowWhenUnitIsOne, isGridDiagonal })

		layer({ orientation, squareSize, iteration })

		if (isGridDiagonal) howManySquaresFitInTheWindowWhenUnitIsOne++
	})
}