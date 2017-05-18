const TRANSPARENT = 'rgba(0, 0, 0, 0)'

const calculateStripeColors = ({ color, squareType }) => {
	const originColor = squareType === 'STRIPED_B' ? color : TRANSPARENT
	const otherColor = originColor === color ? TRANSPARENT : color

	return { originColor, otherColor }
}

export default ({ color, squareType }) => {
	let originColor, otherColor
	if (squareType === 'SOLID_OPAQUE') {
		originColor = color
		otherColor = color
	} else if (squareType === 'STRIPED_B' || squareType === 'STRIPED_A') {
		const { originColor: dummyOriginColor, otherColor: dummyOtherColor } = calculateStripeColors({
			color,
			squareType
		})
		originColor = dummyOriginColor
		otherColor = dummyOtherColor
	} else if (squareType === 'SOLID_TRANSLUCENT') {
		originColor = TRANSPARENT
		otherColor = TRANSPARENT
	}
	return { originColor, otherColor }
}

