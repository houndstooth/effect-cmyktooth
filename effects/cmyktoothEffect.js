import cmyktoothColorSet from '../src/utilities/cmyktoothColorSet'
import cmyktoothViewRotationAboutCanvasCenter from '../src/utilities/cmyktoothViewRotationAboutCanvasCenter'
import cmyktoothOffsetAddress from '../src/utilities/cmyktoothOffsetAddress'
import cmyktoothOpacity from '../src/utilities/cmyktoothOpacity'
import cmyktoothTileSize from '../src/utilities/cmyktoothTileSize'
import constants from '../src/constants'
import settingsUtilities from '../../../src/utilities/settingsUtilities'
import settingsPaths from '../../../src/settings/settingsPaths'

export default {
	base: {
		tileSettings: {
			tileSize: settingsUtilities.getFromSettingsOrDefault(settingsPaths.CANVAS_SIZE),
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
		iteration: {
			startIterationFrame: 0,
			endIterationFrame: 16,
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
			rotateViewAboutCanvasCenter: cmyktoothViewRotationAboutCanvasCenter,
		},
	},
}
