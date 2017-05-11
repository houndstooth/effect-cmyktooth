import drawLayer from './drawLayer'
import iterator from '../shared/iterator'
import calculateSquareSize from './calculateSquareSize'
import ctx from '../shared/ctx'
import { END_ITERATION } from '../shared/customize'
import { ORIENTATION_OF_STRIPES_CYCLE } from './constants'

let isMainGridDiagonal = false
let orientation = 'MINOR_DIAGONAL'
let howManySquaresFitInTheWindowWhenUnitIsOne = 1
//this is ugly but this is how i'm going to achieve continuity of rotation for now
let flipGrain = false

export default () => {
	iterator(END_ITERATION).forEach(layer => {
		const squareSize = calculateSquareSize(isMainGridDiagonal, howManySquaresFitInTheWindowWhenUnitIsOne)
		drawLayer({ ctx, orientation, squareSize, isMainGridDiagonal, layer, flipGrain })

		isMainGridDiagonal = !isMainGridDiagonal
		//so, we have hereby decided that each diagonal layer is paired with its BIGGER non-diagonal layer
		//so in general think of diagonal as "a bit smaller than usual"
		if (!isMainGridDiagonal) howManySquaresFitInTheWindowWhenUnitIsOne++
		if (layer % 4 == 0) flipGrain = !flipGrain
		orientation = ORIENTATION_OF_STRIPES_CYCLE[ orientation ]
	})
}