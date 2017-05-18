import { CENTER } from '../../shared/common/constants'
import { GRID_SIZE } from '../../shared/common/customize'

export default ({ x, y, squareSize }) => {
	if (GRID_SIZE % 2 === 0) {
		return [
			(x - (( GRID_SIZE - 2 ) / 2)) * squareSize + CENTER[ 0 ],
			(y - (( GRID_SIZE - 2 ) / 2)) * squareSize + CENTER[ 1 ]
		]
	}

	return [
		(x - (( GRID_SIZE - 1 ) / 2)) * squareSize + CENTER[ 0 ],
		(y - (( GRID_SIZE - 1 ) / 2)) * squareSize + CENTER[ 1 ]
	]
}
