import { BLACK, CYAN, MAGENTA, TRANSPARENT, YELLOW } from '../../../../src/constants'
import state from '../../../../state'

const CMYKTOOTH_COLORS = [ BLACK, CYAN, MAGENTA, YELLOW ]

const cmyktoothColorSet = () => [ CMYKTOOTH_COLORS[ state.currentLayer % 4 ], TRANSPARENT ]

export default cmyktoothColorSet
