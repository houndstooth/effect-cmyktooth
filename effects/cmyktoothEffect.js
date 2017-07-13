import cmyktoothColorSet from '../src/utilities/cmyktoothColorSet'
import cmyktoothGridRotationAboutCanvasCenter from '../src/utilities/cmyktoothGridRotationAboutCanvasCenter'
import cmyktoothOffsetAddress from '../src/utilities/cmyktoothOffsetAddress'
import cmyktoothOpacity from '../src/utilities/cmyktoothOpacity'
import cmyktoothTileSize from '../src/utilities/cmyktoothTileSize'
import { GRID_SIZE } from '../src/constants'
import { CANVAS_SIZE } from '../../../src/defaults'

export default {
	initial: {
		tileSettings: {
			tileSize: CANVAS_SIZE,
		},
		viewSettings: {
			canvasSize: CANVAS_SIZE,
			centerViewOnCenterOfTileAtZeroZeroAddress: true,
		},
		gridSettings: {
			gridSize: GRID_SIZE,
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
