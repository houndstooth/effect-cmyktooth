import { CMYK_MODE } from '../common/customize'

const CMYK_COLORS = [
    {'r': 255, 'g': 255, 'b': 0, 'a': 1}, // yellow
    {'r': 0, 'g': 0, 'b': 0, 'a': 1},     // black
    {'r': 0, 'g': 255, 'b': 255, 'a': 1}, // cyan
    {'r': 255, 'g': 0, 'b': 255, 'a': 1}  // magenta
]

export default ({ iteration }) => {
	const color = CMYK_MODE ? Object.assign({}, CMYK_COLORS[ iteration % 4 ]) : {'r': 0, 'g': 0, 'b': 0, 'a': 1}
	color.a = 1 / (iteration * 2)
	return color
}