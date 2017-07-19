import cmyktoothColorSet from '../src/utilities/cmyktoothColorSet'
import cmyktoothGridRotationAboutCanvasCenter from '../src/utilities/cmyktoothGridRotationAboutCanvasCenter'
import cmyktoothOffsetAddress from '../src/utilities/cmyktoothOffsetAddress'
import cmyktoothOpacity from '../src/utilities/cmyktoothOpacity'
import cmyktoothTileSize from '../src/utilities/cmyktoothTileSize'
import constants from '../src/constants'
import settingsUtilities from '../../../src/utilities/settingsUtilities'
import settingsPaths from '../../../src/settings/settingsPaths'

export default {
	initial: {
		tileSettings: {
			tileSize: settingsUtilities.getFromSettingsOrDefault(settingsPaths.CANVAS_SIZE),
		},
		viewSettings: {
			centerViewOnCenterOfTileAtZeroZeroAddress: true,
		},
		gridSettings: {
			gridSize: constants.CMYKTOOTH_GRID_SIZE,
			includeNegativeQuadrants: true,
			gridRotationAboutCanvasCenter: 0,
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
			gridRotationAboutCanvasCenter: cmyktoothGridRotationAboutCanvasCenter,
		},
	},
}
