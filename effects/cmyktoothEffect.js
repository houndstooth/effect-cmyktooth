import { BLACK, CYAN, MAGENTA, TRANSPARENT, YELLOW, EIGHTH_OF_CIRCLE_ROTATION } from '../../../src/constants'
import cmyktoothOffsetAddress from '../src/utilities/cmyktoothOffsetAddress'
import { GRID_SIZE } from '../src/constants'

const CMYKTOOTH_COLORS = [ BLACK, CYAN, MAGENTA, YELLOW ]
const CMYKTOOTH_SIZE = 1000

export default {
	initial: {
		tileConfig: {
			tileSize: CMYKTOOTH_SIZE,
		},
		viewConfig: {
			canvasSize: CMYKTOOTH_SIZE,
			centerViewOnCenterOfTileAtZeroZeroAddress: true,
		},
		gridConfig: {
			gridSize: GRID_SIZE,
			includeNegativeQuadrants: true,
			gridRotationAboutGridCenter: 0,
		},
		colorConfig: {
			set: [ CMYKTOOTH_COLORS[ (current.iterationFrame + 3) % 4 ], TRANSPARENT ],
			opacity: .5,
			assignment: {
				offsetAddress: cmyktoothOffsetAddress,
			},
		},
		iteration: {
			startIteration: 0,
			endIteration: 16,
		},
	},
	iterations: {
		tileConfig: {
			tileSize: p => p / Math.sqrt(2),
		},
		colorConfig: {
			set: () => [ CMYKTOOTH_COLORS[ current.iterationFrame % 4 ], TRANSPARENT ],
			opacity: () => 1 / (current.iterationFrame + 2),
		},
		gridConfig: {
			gridRotationAboutGridCenter: p => p + EIGHTH_OF_CIRCLE_ROTATION,
		},
	},
}
