import drawSquare from './drawSquare'
import colorAndTransparency from './colorAndTransparency'
import iterator from './iterator'
import calculateSquareOrigin from './calculateSquareOrigin'
import calculateSquareType from './calculateSquareType'
import { GRID_SIZE } from './customize'

export default ({ ctx, orientation, squareSize, isMainGridDiagonal, layer, flipGrain }) => {
	ctx.fillStyle = colorAndTransparency(layer, orientation)

	iterator(GRID_SIZE).forEach(x => {
		iterator(GRID_SIZE).forEach(y => {
			const origin = calculateSquareOrigin(x, y, isMainGridDiagonal, squareSize)
			const squareType = calculateSquareType(x, y)
			drawSquare({ ctx, origin, size: squareSize, orientation, isMainGridDiagonal, squareType, layer, flipGrain })
		})
	})
}