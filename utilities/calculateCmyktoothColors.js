export default ({ layerColor, squareType }) => {
	let colors = []
	const transparentVersionOfLayerColor = Object.assign({}, layerColor)
	transparentVersionOfLayerColor.a = 0

	if (squareType === 'SOLID_OPAQUE') {
		colors[ 0 ] = layerColor
		colors[ 1 ] = layerColor
	} else if (squareType === 'STRIPED_B') {
		colors[ 0 ] = transparentVersionOfLayerColor
		colors[ 1 ] = layerColor
	} else if (squareType === 'STRIPED_A') {
		colors[ 0 ] = layerColor
		colors[ 1 ] = transparentVersionOfLayerColor
	} else if (squareType === 'SOLID_TRANSLUCENT') {
		colors[ 0 ] = transparentVersionOfLayerColor
		colors[ 1 ] = transparentVersionOfLayerColor
	}

	return colors
}

