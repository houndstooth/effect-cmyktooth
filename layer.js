import drawSquare from './drawSquare'
import { CANVAS_SIZE } from './customize'
import { SQRT, WHICH_SOLID_OR_STRIPE, ORIENTATION_TO_COLOR_MAPPING, CENTER } from './constants'


export default (ctx, orientation, howManySquaresFitInTheWindow, isMainGridDiagonal, gridSize, iter, flipGrain) => {
	const topLeftType = (gridSize - 1) % 2

	let squareSize
	if (isMainGridDiagonal) {
		squareSize = (CANVAS_SIZE / howManySquaresFitInTheWindow) / SQRT
	} else {
		squareSize = CANVAS_SIZE / howManySquaresFitInTheWindow
	}

	//top left position is the leftmost position when diagonal
	//that is, it would be the top left position if you rotated things
	//45 degrees clockwise back into "normal" orientation
	let topLeftPosition
	if (isMainGridDiagonal) {
		topLeftPosition = [
			CENTER[ 0 ] - (((gridSize / 2) * SQRT) * squareSize),
			CENTER[ 1 ]
		]
	} else {
		topLeftPosition = [
			CENTER[ 0 ] - ((gridSize / 2) * squareSize),
			CENTER[ 1 ] - ((gridSize / 2) * squareSize)
		]
	}

	const transparency = 1 / (iter * 2)
	ctx.fillStyle = ORIENTATION_TO_COLOR_MAPPING[ orientation ] + transparency + ')'

	for (let x = 0; x < gridSize; x++) {
		for (let y = 0; y < gridSize; y++) {
			let topLeftX, topLeftY
			if (isMainGridDiagonal) {
				topLeftX = topLeftPosition[ 0 ] + (x * (squareSize / SQRT)) + (y * (squareSize / SQRT))
				topLeftY = topLeftPosition[ 1 ] - (x * (squareSize / SQRT)) + (y * (squareSize / SQRT))
			} else {
				topLeftX = topLeftPosition[ 0 ] + (x * squareSize)
				topLeftY = topLeftPosition[ 1 ] + (y * squareSize)
			}

			drawSquare(ctx, topLeftX, topLeftY, squareSize, orientation, isMainGridDiagonal, WHICH_SOLID_OR_STRIPE[ topLeftType ][ x % 2 ][ y % 2 ], iter, flipGrain)
		}
	}
}