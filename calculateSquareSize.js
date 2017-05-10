import { SQRT } from './constants'
import { CANVAS_SIZE } from '../shared/customize'

export default (isMainGridDiagonal, howManySquaresFitInTheWindow) => {
	let squareSize
	if (isMainGridDiagonal) {
		squareSize = (CANVAS_SIZE / howManySquaresFitInTheWindow) / SQRT
	} else {
		squareSize = CANVAS_SIZE / howManySquaresFitInTheWindow
	}
	return squareSize
}
