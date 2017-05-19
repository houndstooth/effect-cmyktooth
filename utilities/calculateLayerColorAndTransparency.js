import { CMYK_MODE } from '../common/customize'
import { CYAN, MAGENTA, YELLOW, BLACK } from '../../shared/common/colors'

const CMYK_COLORS = [ YELLOW, BLACK, CYAN, MAGENTA ]

export default ({ iteration }) => {
	const layerColor = CMYK_MODE ? CMYK_COLORS[ iteration % 4 ] : BLACK
	layerColor.a = 1 / (iteration * 2)
	return layerColor
}