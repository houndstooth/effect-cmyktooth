import layer from '../components/layer'
import iterator from '../../shared/utilities/iterator'
import calculateSquareSize from '../utilities/calculateSquareSize'
import { END_ITERATION } from '../../shared/common/customize'
import { ORIENTATION_OF_STRIPES_TO_GRID_DIAGONALITY_MAPPING } from '../common/constants'

let orientation = 'TOP_RIGHT'
let howManySquaresFitInTheWindowWhenUnitIsOne = 1

const NEXT_ORIENTATION_OF_STRIPES_IN_THE_CYCLE = {
	'RIGHT': 'BOTTOM_RIGHT',
	'BOTTOM_RIGHT': 'BOTTOM',
	'BOTTOM': 'BOTTOM_LEFT',
	'BOTTOM_LEFT': 'LEFT',
	'LEFT': 'TOP_LEFT',
	'TOP_LEFT': 'TOP',
	'TOP': 'TOP_RIGHT',
	'TOP_RIGHT': 'RIGHT'
}

export default () => {
	iterator(END_ITERATION).forEach(iteration => {
		const isGridDiagonal = ORIENTATION_OF_STRIPES_TO_GRID_DIAGONALITY_MAPPING[ orientation ]
		const squareSize = calculateSquareSize({ howManySquaresFitInTheWindowWhenUnitIsOne, isGridDiagonal })

		layer({ orientation, squareSize, iteration })

		if (isGridDiagonal) howManySquaresFitInTheWindowWhenUnitIsOne++
		orientation = NEXT_ORIENTATION_OF_STRIPES_IN_THE_CYCLE[ orientation ]
	})
}