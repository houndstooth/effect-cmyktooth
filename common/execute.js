import layer from '../components/layer'
import iterator from '../../shared/utilities/iterator'
import calculateSquareSize from '../utilities/calculateSquareSize'
import { END_ITERATION } from '../../shared/common/customize'

let isMainGridDiagonal = false
let orientation = 'MINOR_DIAGONAL'
let howManySquaresFitInTheWindowWhenUnitIsOne = 1
//this is ugly but this is how i'm going to achieve continuity of rotation for now
let flipGrain = false

//this is going clockwise ... although i don't think it actually is going clockwise
const ORIENTATION_OF_STRIPES_CYCLE = {
	'HORIZONTAL': 'PRINCIPAL_DIAGONAL',
	'PRINCIPAL_DIAGONAL': 'VERTICAL',
	'VERTICAL': 'MINOR_DIAGONAL',
	'MINOR_DIAGONAL': 'HORIZONTAL'
}

export default () => {
	iterator(END_ITERATION).forEach(iteration => {
		const squareSize = calculateSquareSize(isMainGridDiagonal, howManySquaresFitInTheWindowWhenUnitIsOne)
		layer({ orientation, squareSize, isMainGridDiagonal, iteration, flipGrain })

		isMainGridDiagonal = !isMainGridDiagonal
		//so, we have hereby decided that each diagonal layer is paired with its BIGGER non-diagonal layer
		//so in general think of diagonal as "a bit smaller than usual"
		if (!isMainGridDiagonal) howManySquaresFitInTheWindowWhenUnitIsOne++
		if (iteration % 4 == 0) flipGrain = !flipGrain
		orientation = ORIENTATION_OF_STRIPES_CYCLE[ orientation ]
	})
}