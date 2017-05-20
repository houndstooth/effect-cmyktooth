import calculateTileType from './calculateTileType'
import state from '../../state'

export default ({ origin }) => {
	const { layerColor } = state.cmyktooth
	const tileType = calculateTileType({ origin })
	let colors = []
	const transparentVersionOfLayerColor = Object.assign({}, layerColor)
	transparentVersionOfLayerColor.a = 0

	if (tileType === 'SOLID_OPAQUE') {
		colors[ 0 ] = layerColor
		colors[ 1 ] = layerColor
	} else if (tileType === 'STRIPED_B') {
		colors[ 0 ] = transparentVersionOfLayerColor
		colors[ 1 ] = layerColor
	} else if (tileType === 'STRIPED_A') {
		colors[ 0 ] = layerColor
		colors[ 1 ] = transparentVersionOfLayerColor
	} else if (tileType === 'SOLID_TRANSLUCENT') {
		colors[ 0 ] = transparentVersionOfLayerColor
		colors[ 1 ] = transparentVersionOfLayerColor
	}

	return colors
}
