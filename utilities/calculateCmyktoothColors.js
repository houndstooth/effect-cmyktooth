const TRANSPARENT = 'rgba(0, 0, 0, 0)'

export default ({ color, squareType }) => {
	let colors = []
	if (squareType === 'SOLID_OPAQUE') {
		colors[ 0 ] = color
		colors[ 1 ] = color
	} else if (squareType === 'STRIPED_B') {
		colors[ 0 ] = TRANSPARENT
		colors[ 1 ] = color
	} else if (squareType === 'STRIPED_A') {
		colors[ 0 ] = color
		colors[ 1 ] = TRANSPARENT
	} else if (squareType === 'SOLID_TRANSLUCENT') {
		colors[ 0 ] = TRANSPARENT
		colors[ 1 ] = TRANSPARENT
	}
	return colors
}

