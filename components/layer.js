import ctx from '../../shared/render/ctx'
import square from './square'
import calculateColorAndTransparency from '../utilities/calculateColorAndTransparency'
import iterator from '../../shared/utilities/iterator'
import calculateSquareOrigin from '../utilities/calculateSquareOrigin'
import calculateSquareType from '../utilities/calculateSquareType'
import calculateGridOrigin from '../utilities/calculateGridOrigin'
import { GRID_SIZE } from '../common/customize'

export default ({ orientation, squareSize, isMainGridDiagonal, iteration, flipGrain }) => {
	ctx.fillStyle = calculateColorAndTransparency(iteration, orientation)
	//the grid origin is the leftmost corner when the grid is diagonal
	//and the top left corner when the grid is axial
	let gridOrigin = calculateGridOrigin(isMainGridDiagonal, squareSize)

	iterator(GRID_SIZE).forEach(x => {
		iterator(GRID_SIZE).forEach(y => {
			const origin = calculateSquareOrigin({x, y, isMainGridDiagonal, squareSize, gridOrigin})
			const squareType = calculateSquareType(x, y)
			square({ origin, size: squareSize, orientation, isMainGridDiagonal, squareType, iteration, flipGrain })
		})
	})
}