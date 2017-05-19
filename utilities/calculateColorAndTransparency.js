const LAYER_COLORS = [
	'rgba(255, 255, 0, ', // yellow
	'rgba(0, 0, 0, ',     // black
	'rgba(0, 255, 255, ', // cyan
	'rgba(255, 0, 255, ', // magenta
]

export default ({ iteration }) => {
	const color = LAYER_COLORS[ iteration % 4 ]
	const transparency = 1 / (iteration * 2)
	return color + transparency + ')'
}