import { BLACK, CYAN, MAGENTA, TRANSPARENT, YELLOW, EIGHTH_OF_CIRCLE_ROTATION } from '../../constants'

const CMYKTOOTH_COLORS = [ BLACK, CYAN, MAGENTA, YELLOW ]
const CMYKTOOTH_SIZE = 1000
const GRID_SIZE = 31
const ADDRESS_OFFSET_Y = GRID_SIZE % 2 === 0 ? (GRID_SIZE / 2) % 2 : ((GRID_SIZE + 1) / 2) % 2
const ADDRESS_OFFSET_X = ADDRESS_OFFSET_Y === 1 ? 0 : 1

export default {
	initial: {
		tileConfig: {
			tileSize: CMYKTOOTH_SIZE
		},
		viewConfig: {
			canvasSize: CMYKTOOTH_SIZE,
			centerViewOnCenterOfTileAtZeroZeroAddress: true
		},
		gridConfig: {
			gridSize: GRID_SIZE,
			includeNegativeQuadrants: true,
			gridRotationAboutGridCenter: 0
		},
		colorConfig: {
			set: [ CMYKTOOTH_COLORS[ (current.iterationFrame + 3) % 4 ], TRANSPARENT ],
			opacity: .5,
			assignment: {
				offsetAddress: () => [ ADDRESS_OFFSET_X, ADDRESS_OFFSET_Y ]
			}
		},
		iteration: {
			startIteration: 0,
			endIteration: 16
		}
	},
	iterations: {
		tileConfig: {
			tileSize: p => p / Math.sqrt(2),
		},
		colorConfig: {
			set: () => [ CMYKTOOTH_COLORS[ current.iterationFrame % 4 ], TRANSPARENT ],
			opacity: () => 1 / (current.iterationFrame + 2)
		},
		gridConfig: {
			gridRotationAboutGridCenter: p => p + EIGHTH_OF_CIRCLE_ROTATION
		}
	}
}
