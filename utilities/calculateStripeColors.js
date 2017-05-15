const TRANSPARENT = 'rgba(0, 0, 0, 0)'

export default ({color, squareType}) => {
	const originColor = squareType == 'STRIPED_B' ? color : TRANSPARENT
	const otherColor = originColor == color ? TRANSPARENT : color

	return { originColor, otherColor }
}