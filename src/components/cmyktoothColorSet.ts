import { Color, constants, state } from '../../../../src'

const { BLACK, CYAN, MAGENTA, YELLOW, TRANSPARENT } = constants

const CMYKTOOTH_COLORS = [ BLACK, CYAN, MAGENTA, YELLOW ]

const CMYKTOOTH_COLOR_COUNT = CMYKTOOTH_COLORS.length

const cmyktoothColorSet: () => Color[] = () => ([
	CMYKTOOTH_COLORS[ state.currentLayer % CMYKTOOTH_COLOR_COUNT ],
	TRANSPARENT,
])

export { cmyktoothColorSet }
