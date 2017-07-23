import cmyktoothColorSet from '../src/utilities/cmyktoothColorSet'
import cmyktoothViewRotationAboutCanvasCenter from '../src/utilities/cmyktoothViewRotationAboutCanvasCenter'
import cmyktoothOffsetAddress from '../src/utilities/cmyktoothOffsetAddress'
import cmyktoothOpacity from '../src/utilities/cmyktoothOpacity'
import cmyktoothTileSize from '../src/utilities/cmyktoothTileSize'
import constants from '../src/constants'
import stateUtilities from '../../../src/utilities/stateUtilities'
import settingsPaths from '../../../src/state/settingsPaths'

export default {
	basePattern: {
		tileSettings: {
			tileSize: stateUtilities.getFromMainHoundstoothOrDefault(settingsPaths.CANVAS_SIZE),
		},
		viewSettings: {
			centerViewOnCenterOfTileAtZeroZeroAddress: true,
			rotateViewAboutCanvasCenter: 0,
		},
		gridSettings: {
			gridSize: constants.CMYKTOOTH_GRID_SIZE,
			includeNegativeQuadrants: true,
		},
		colorSettings: {
			set: cmyktoothColorSet(-1),
			opacity: .5,
			assignment: {
				offsetAddress: cmyktoothOffsetAddress,
			},
		},
		iterationSettings: {
			startIterationFrame: 0,
			endIterationFrame: 16,
		},
	},
	iterationsPattern: {
		tileSettings: {
			tileSize: cmyktoothTileSize,
		},
		colorSettings: {
			set: cmyktoothColorSet,
			opacity: cmyktoothOpacity,
		},
		viewSettings: {
			rotateViewAboutCanvasCenter: cmyktoothViewRotationAboutCanvasCenter,
		},
	},
}
