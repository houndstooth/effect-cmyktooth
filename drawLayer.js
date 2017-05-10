import drawSquare from './drawSquare'
import calculateSquareSize from './calculateSquareSize'
import calculateGridOrigin from './calculateGridOrigin'
import iterator from './iterator'
import squareOrigin from './squareOrigin'
import { GRID_SIZE } from './customize'
import { WHICH_SOLID_OR_STRIPE, ORIENTATION_TO_COLOR_MAPPING } from './constants'

export default (ctx, orientation, howManySquaresFitInTheWindow, isMainGridDiagonal, layer, flipGrain) => {
	const topLeftType = (GRID_SIZE - 1) % 2
	const squareSize = calculateSquareSize(isMainGridDiagonal, howManySquaresFitInTheWindow)

	//top left position is the leftmost position when diagonal
	//that is, it would be the top left position if you rotated things
	//45 degrees clockwise back into "normal" orientation
	let gridOrigin = calculateGridOrigin(isMainGridDiagonal, squareSize)

	const transparency = 1 / (layer * 2)
	ctx.fillStyle = ORIENTATION_TO_COLOR_MAPPING[ orientation ] + transparency + ')'

	iterator(GRID_SIZE).forEach(x => {
		iterator(GRID_SIZE).forEach(y => {
			drawSquare(
				ctx,
				squareOrigin(x, y, isMainGridDiagonal, squareSize, gridOrigin),
				squareSize,
				orientation,
				isMainGridDiagonal,
				WHICH_SOLID_OR_STRIPE[ topLeftType ][ x % 2 ][ y % 2 ], layer, flipGrain
			)
		})
	})
}