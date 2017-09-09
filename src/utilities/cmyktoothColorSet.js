import { BLACK, CYAN, MAGENTA, TRANSPARENT, YELLOW } from '../../../../src/constants'
import state from '../../../../state'

const CMYKTOOTH_COLORS = [ BLACK, CYAN, MAGENTA, YELLOW ]

export default () => [ CMYKTOOTH_COLORS[ state.currentLayer % 4 ], TRANSPARENT ]
