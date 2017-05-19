import { CMYK_MODE } from '../common/customize'
import { CYAN, MAGENTA, YELLOW, BLACK } from '../../shared/common/constants'

const CMYK_COLORS = [ YELLOW, BLACK, CYAN, MAGENTA ]

export default ({ iteration }) => {
	const color = CMYK_MODE ? CMYK_COLORS[ iteration % 4 ] : BLACK
	color.a = 1 / (iteration * 2)
	return color
}