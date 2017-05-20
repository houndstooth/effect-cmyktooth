import state from '../../state'
import { CYAN, MAGENTA, YELLOW, BLACK } from '../../shared/common/colors'

const CMYK_COLORS = [ YELLOW, BLACK, CYAN, MAGENTA ]

export default ({ iteration }) => {
	const layerColor = state.cmyktooth.cmykColorsMode ? CMYK_COLORS[ iteration % 4 ] : BLACK
	layerColor.a = 1 / (iteration * 2)
	return layerColor
}