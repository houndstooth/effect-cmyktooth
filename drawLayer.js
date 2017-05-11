import drawSquare from './drawSquare'
import colorAndTransparency from './colorAndTransparency'
import iterator from '../shared/iterator'
import calculateSquareOrigin from './calculateSquareOrigin'
import calculateSquareType from './calculateSquareType'
import calculateGridOrigin from './calculateGridOrigin'
import { GRID_SIZE } from './customize'

export default ({ ctx, orientation, squareSize, isMainGridDiagonal, layer, flipGrain }) => {
	ctx.fillStyle = colorAndTransparency(layer, orientation)
	//the grid origin is the leftmost corner when the grid is diagonal
	//and the top left corner when the grid is axial
	let gridOrigin = calculateGridOrigin(isMainGridDiagonal, squareSize)

	iterator(GRID_SIZE).forEach(x => {
		iterator(GRID_SIZE).forEach(y => {
			const origin = calculateSquareOrigin({x, y, isMainGridDiagonal, squareSize, gridOrigin})
			const squareType = calculateSquareType(x, y)
			drawSquare({ ctx, origin, size: squareSize, orientation, isMainGridDiagonal, squareType, layer, flipGrain })
		})
	})
}