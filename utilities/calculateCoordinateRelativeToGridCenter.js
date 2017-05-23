import state from '../../shared/application/state'

export default ({ origin }) => {
	const { gridSize, tileSize, canvasSize } = state.shared
	const canvasCenter = [ canvasSize / 2, canvasSize / 2 ]

	if (gridSize % 2 === 0) {
		return [
			(origin[ 0 ] - (( gridSize - 2 ) / 2)) * tileSize + canvasCenter[ 0 ],
			(origin[ 1 ] - (( gridSize - 2 ) / 2)) * tileSize + canvasCenter[ 1 ]
		]
	}

	return [
		(origin[ 0 ] - (( gridSize - 1 ) / 2)) * tileSize + canvasCenter[ 0 ],
		(origin[ 1 ] - (( gridSize - 1 ) / 2)) * tileSize + canvasCenter[ 1 ]
	]
}
