import { CENTER } from '../../shared/common/constants'
import state from '../../state'

export default ({ origin }) => {
	const { gridSize, tileSize } = state.shared

	if (gridSize % 2 === 0) {
		return [
			(origin[ 0 ] - (( gridSize - 2 ) / 2)) * tileSize + CENTER[ 0 ],
			(origin[ 1 ] - (( gridSize - 2 ) / 2)) * tileSize + CENTER[ 1 ]
		]
	}

	return [
		(origin[ 0 ] - (( gridSize - 1 ) / 2)) * tileSize + CENTER[ 0 ],
		(origin[ 1 ] - (( gridSize - 1 ) / 2)) * tileSize + CENTER[ 1 ]
	]
}
