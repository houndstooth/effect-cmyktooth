import cmyktoothSrc from '../src'
import { houndstoothDefaults } from '../../../src'

export default {
	name: 'cmyktooth',
	basePattern: {
		tileSettings: {
			tileSizeSetting: houndstoothDefaults.CANVAS_SIZE,
		},
		viewSettings: {
			centerViewOnCenterOfTileAtHomeAddress: true,
			rotateViewAboutCanvasCenter: 0,
			canvasSize: houndstoothDefaults.CANVAS_SIZE,
		},
		gridSettings: {
			gridSize: 31,
			includeNegativeQuadrants: true,
		},
		colorSettings: {
			colorSet: cmyktoothSrc.cmyktoothColorSet(-1),
			opacity: .5,
			assignment: {
				offsetAddress: cmyktoothSrc.cmyktoothOffsetAddress,
			},
		},
		layerSettings: {
			startLayer: 0,
			endLayer: 16,
		},
	},
	layersPattern: {
		tileSettings: {
			tileSizeSetting: cmyktoothSrc.cmyktoothTileSize,
		},
		colorSettings: {
			colorSet: cmyktoothSrc.cmyktoothColorSet,
			opacity: cmyktoothSrc.cmyktoothOpacity,
		},
		viewSettings: {
			rotateViewAboutCanvasCenter: cmyktoothSrc.cmyktoothViewRotationAboutCanvasCenter,
		},
	},
}
