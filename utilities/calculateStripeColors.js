const TRANSPARENT = 'rgba(0, 0, 0, 0)'

export default ({color, squareType}) => {
	let originColor
	let otherColor

	if (squareType == 'STRIPED_TOP_CUSP_OPAQUE') {
		originColor = color
		otherColor = TRANSPARENT
	} else if (squareType == 'STRIPED_TOP_CUSP_TRANSLUCENT') {
		originColor = TRANSPARENT
		otherColor = color
	}
	return { originColor, otherColor }
}