import drawSquare from './drawSquare'
import colorAndTransparency from './colorAndTransparency'
import iterator from './iterator'
import squareOrigin from './squareOrigin'
import squareType from './squareType'
import { GRID_SIZE } from './customize'

export default (ctx, orientation, squareSize, isMainGridDiagonal, layer, flipGrain) => {
	ctx.fillStyle = colorAndTransparency(layer, orientation)

	iterator(GRID_SIZE).forEach(x => {
		iterator(GRID_SIZE).forEach(y => {
			drawSquare(
				ctx,
				squareOrigin(x, y, isMainGridDiagonal, squareSize),
				squareSize,
				orientation,
				isMainGridDiagonal,
				squareType(x, y),
				layer,
				flipGrain
			)
		})
	})
}