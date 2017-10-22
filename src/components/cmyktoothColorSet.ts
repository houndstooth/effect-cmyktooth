import { ColorSet, constants, from, state, to } from '../../../../src'

const { BLACK, CYAN, MAGENTA, YELLOW, TRANSPARENT } = constants

const CMYKTOOTH_COLORS = [ BLACK, CYAN, MAGENTA, YELLOW ]

const CMYKTOOTH_COLOR_COUNT = CMYKTOOTH_COLORS.length

const cmyktoothColorSet: () => ColorSet = () => to.ColorSet([
	CMYKTOOTH_COLORS[ from.Layer(state.currentLayer) % CMYKTOOTH_COLOR_COUNT ],
	TRANSPARENT,
])

export { cmyktoothColorSet }
