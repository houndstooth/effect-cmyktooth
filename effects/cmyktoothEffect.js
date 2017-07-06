import cmyktoothColorSet from '../src/utilities/cmyktoothColorSet'
import cmyktoothGridRotationAboutGridCenter from '../src/utilities/cmyktoothGridRotationAboutGridCenter'
import cmyktoothOffsetAddress from '../src/utilities/cmyktoothOffsetAddress'
import cmyktoothOpacity from '../src/utilities/cmyktoothOpacity'
import cmyktoothTileSize from '../src/utilities/cmyktoothTileSize'
import { GRID_SIZE } from '../src/constants'

const CMYKTOOTH_SIZE = 1000

export default {
	initial: {
		tileSettings: {
			tileSize: CMYKTOOTH_SIZE,
		},
		viewSettings: {
			canvasSize: CMYKTOOTH_SIZE,
			centerViewOnCenterOfTileAtZeroZeroAddress: true,
		},
		gridSettings: {
			gridSize: GRID_SIZE,
			includeNegativeQuadrants: true,
			gridRotationAboutGridCenter: 0,
		},
		colorSettings: {
			set: cmyktoothColorSet(-1),
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
		tileSettings: {
			tileSize: cmyktoothTileSize,
		},
		colorSettings: {
			set: cmyktoothColorSet,
			opacity: cmyktoothOpacity,
		},
		gridSettings: {
			gridRotationAboutGridCenter: cmyktoothGridRotationAboutGridCenter,
		},
	},
}
