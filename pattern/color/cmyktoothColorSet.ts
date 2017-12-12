import { BLACK, ColorSet, CYAN, from, getCurrentLayer, MAGENTA, to, TRANSPARENT, YELLOW } from '../../../../src'

const CMYKTOOTH_COLORS: ColorSet = to.ColorSet([ YELLOW, BLACK, CYAN, MAGENTA ])

const CMYKTOOTH_COLOR_COUNT: number = CMYKTOOTH_COLORS.length

const cmyktoothColorSet: () => ColorSet =
	(): ColorSet => to.ColorSet([
		CMYKTOOTH_COLORS[ from.Layer(getCurrentLayer.default()) % CMYKTOOTH_COLOR_COUNT ],
		TRANSPARENT,
	])

export default cmyktoothColorSet
