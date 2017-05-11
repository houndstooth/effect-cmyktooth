const TRANSPARENT = 'rgba(0, 0, 0, 0)'

const FLIP_GRAIN_FOR_OTHER_HALF_OF_CYCLE = {
	'RIGHT': false,
	'BOTTOM_RIGHT': false,
	'BOTTOM': false,
	'BOTTOM_LEFT': false,
	'LEFT': true,
	'TOP_LEFT': true,
	'TOP': true,
	'TOP_RIGHT': true
}

export default ({color, squareType, orientation}) => {
	let originColor
	let otherColor

	if (squareType == 'STRIPED_TOP_CUSP_OPAQUE') {
		originColor = color
		otherColor = TRANSPARENT
	} else if (squareType == 'STRIPED_TOP_CUSP_TRANSLUCENT') {
		originColor = TRANSPARENT
		otherColor = color
	}

	if (FLIP_GRAIN_FOR_OTHER_HALF_OF_CYCLE[ orientation ]) {
		const dummy = originColor
		originColor = otherColor
		otherColor = dummy
	}

	return { originColor, otherColor }
}