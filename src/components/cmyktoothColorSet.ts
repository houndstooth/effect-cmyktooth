import { constants, state, Color } from '../../../../src'

const { BLACK, CYAN, MAGENTA, YELLOW, TRANSPARENT } = constants

const CMYKTOOTH_COLORS = [ BLACK, CYAN, MAGENTA, YELLOW ]

const cmyktoothColorSet: { (): Color[] } = () => [ CMYKTOOTH_COLORS[ state.currentLayer % 4 ], TRANSPARENT ]

export default cmyktoothColorSet
