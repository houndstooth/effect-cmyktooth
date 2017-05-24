import { BLACK, CYAN, MAGENTA, YELLOW } from '../shared/render/colors'

const CMYKTOOTH_COLORS = [ BLACK, CYAN, MAGENTA, YELLOW ]
const CMYKTOOTH_SIZE = 1000

const getCmyktoothColor = n => CMYKTOOTH_COLORS[n]

export default { 
	getCmyktoothColor,
    CMYKTOOTH_SIZE
}
