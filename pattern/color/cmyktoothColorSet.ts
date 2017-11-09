import { ColorSet, constants, from, state, to } from '../../../../src'

const { BLACK, CYAN, MAGENTA, YELLOW, TRANSPARENT } = constants

const CMYKTOOTH_COLORS: ColorSet = to.ColorSet([ YELLOW, BLACK, CYAN, MAGENTA ])

const CMYKTOOTH_COLOR_COUNT: number = CMYKTOOTH_COLORS.length

const cmyktoothColorSet: () => ColorSet =
	(): ColorSet => to.ColorSet([
		CMYKTOOTH_COLORS[ from.Layer(state.currentLayer) % CMYKTOOTH_COLOR_COUNT ],
		TRANSPARENT,
	])

export { cmyktoothColorSet }
