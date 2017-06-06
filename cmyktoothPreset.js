import currentIteration from '../../state/currentIteration'
import { BLACK, CYAN, MAGENTA, TRANSPARENT, YELLOW, EIGHTH_OF_CIRCLE_ROTATION } from '../../application/constants'
import state from '../../state/state'

const CMYKTOOTH_COLORS = [ BLACK, CYAN, MAGENTA, YELLOW ]
const CMYKTOOTH_SIZE = 1000
const GRID_SIZE = 31
const ADDRESS_OFFSET_Y = GRID_SIZE % 2 === 0 ? (GRID_SIZE / 2) % 2 : ((GRID_SIZE + 1) / 2) % 2
const ADDRESS_OFFSET_X = ADDRESS_OFFSET_Y === 1 ? 0 : 1

export default {
	state: {
		tileSize: CMYKTOOTH_SIZE,
		canvasSize: CMYKTOOTH_SIZE,
		gridSize: GRID_SIZE,
		colorConfig: {
			set: [ CMYKTOOTH_COLORS[ (currentIteration.i + 3) % 4 ], TRANSPARENT ],
			opacity: .5,
			assignment: {
				offsetAddress: () => [ ADDRESS_OFFSET_X, ADDRESS_OFFSET_Y ]
			}
		},
		negativeGridToo: true,
		iteration: {
			startIteration: 0,
			endIteration: 16
		}
	},
	iterations: {
		tileSize: p => p / Math.sqrt(2),
		colorConfig: {
			set: () => [ CMYKTOOTH_COLORS[ currentIteration.i % 4 ], TRANSPARENT ],
			opacity: () => 1 / (currentIteration.i + 2)
		},
		gridRotationAboutGridCenter: p => p + EIGHTH_OF_CIRCLE_ROTATION,
		gridOriginOffset: () => {
			if (state.houndsmorphosisMode) return [ CMYKTOOTH_SIZE / 2, CMYKTOOTH_SIZE / 2 ]
			const offset = CMYKTOOTH_SIZE / 2 - CMYKTOOTH_SIZE / Math.pow(2, 1 + (currentIteration.i + 1) / 2)
			return [ offset, offset ]
		}
	}
}
