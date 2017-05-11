import { SQRT } from '../common/constants'
import { UNIT } from '../../shared/common/customize'

export default ({ x, y, isGridDiagonal, squareSize, gridOrigin }) => {
	let originX, originY
	if (isGridDiagonal) {
		originX = gridOrigin[ 0 ] + (x * (squareSize / SQRT) * UNIT) + (y * (squareSize / SQRT) * UNIT)
		originY = gridOrigin[ 1 ] - (x * (squareSize / SQRT) * UNIT) + (y * (squareSize / SQRT) * UNIT)
	} else {
		originX = gridOrigin[ 0 ] + (x * squareSize * UNIT)
		originY = gridOrigin[ 1 ] + (y * squareSize * UNIT)
	}
	return [ originX, originY ]
}
