import { SQRT } from '../common/constants'
import { UNIT } from '../../shared/customize'

export default ({x, y, isMainGridDiagonal, squareSize, gridOrigin}) => {
	let originX, originY
	if (isMainGridDiagonal) {
		originX = gridOrigin[ 0 ] + (x * (squareSize / SQRT) * UNIT) + (y * (squareSize / SQRT) * UNIT)
		originY = gridOrigin[ 1 ] - (x * (squareSize / SQRT) * UNIT) + (y * (squareSize / SQRT) * UNIT)
	} else {
		originX = gridOrigin[ 0 ] + (x * squareSize * UNIT)
		originY = gridOrigin[ 1 ] + (y * squareSize * UNIT)
	}
	return [ originX, originY ]
}
