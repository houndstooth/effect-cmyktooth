import { BLACK, CYAN, MAGENTA, TRANSPARENT, YELLOW } from '../../../../src/constants'

const CMYKTOOTH_COLORS = [ BLACK, CYAN, MAGENTA, YELLOW ]

export default () => [ CMYKTOOTH_COLORS[ currentState.iterationFrame % 4 ], TRANSPARENT ]
