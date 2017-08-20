import { BLACK, CYAN, MAGENTA, TRANSPARENT, YELLOW } from '../../../../src/constants'
import store from '../../../../store'

const CMYKTOOTH_COLORS = [ BLACK, CYAN, MAGENTA, YELLOW ]

export default () => [ CMYKTOOTH_COLORS[ store.currentLayer % 4 ], TRANSPARENT ]
