import cmyktoothSrc from '../src'
import src from '../../../src'

export default {
	name: 'cmyktooth',
	basePattern: {
		tileSettings: {
			tileSizeSetting: src.houndstoothDefaults.CANVAS_SIZE,
		},
		viewSettings: {
			centerViewOnCenterOfTileAtZeroZeroAddress: true,
			rotateViewAboutCanvasCenter: 0,
			canvasSize: src.houndstoothDefaults.CANVAS_SIZE,
		},
		gridSettings: {
			gridSize: 31,
			includeNegativeQuadrants: true,
		},
		colorSettings: {
			set: cmyktoothSrc.cmyktoothColorSet(-1),
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
			set: cmyktoothSrc.cmyktoothColorSet,
			opacity: cmyktoothSrc.cmyktoothOpacity,
		},
		viewSettings: {
			rotateViewAboutCanvasCenter: cmyktoothSrc.cmyktoothViewRotationAboutCanvasCenter,
		},
	},
}
