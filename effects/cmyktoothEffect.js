import { cmyktoothColorSet, cmyktoothOffsetAddress, cmyktoothTileSize, cmyktoothOpacity, cmyktoothViewRotationAboutCanvasCenter } from '../src'
import { houndstoothDefaults } from '../../../src'

const cmyktoothEffect = {
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
			colorSet: cmyktoothColorSet(-1),
			opacity: .5,
			assignment: {
				offsetAddress: cmyktoothOffsetAddress,
			},
		},
		layerSettings: {
			startLayer: 0,
			endLayer: 16,
		},
	},
	layersPattern: {
		tileSettings: {
			tileSizeSetting: cmyktoothTileSize,
		},
		colorSettings: {
			colorSet: cmyktoothColorSet,
			opacity: cmyktoothOpacity,
		},
		viewSettings: {
			rotateViewAboutCanvasCenter: cmyktoothViewRotationAboutCanvasCenter,
		},
	},
}

export default cmyktoothEffect
