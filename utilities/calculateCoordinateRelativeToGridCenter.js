import { CENTER } from '../../shared/common/constants'
import { GRID_SIZE } from '../../shared/common/customize'

export default ({ origin, tileSize }) => {
	if (GRID_SIZE % 2 === 0) {
		return [
			(origin[ 0 ] - (( GRID_SIZE - 2 ) / 2)) * tileSize + CENTER[ 0 ],
			(origin[ 1 ] - (( GRID_SIZE - 2 ) / 2)) * tileSize + CENTER[ 1 ]
		]
	}

	return [
		(origin[ 0 ] - (( GRID_SIZE - 1 ) / 2)) * tileSize + CENTER[ 0 ],
		(origin[ 1 ] - (( GRID_SIZE - 1 ) / 2)) * tileSize + CENTER[ 1 ]
	]
}
