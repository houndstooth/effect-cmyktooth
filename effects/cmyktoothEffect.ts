import {
	cmyktoothColorSet,
	cmyktoothOffsetAddress,
	cmyktoothTileSize,
	cmyktoothOpacity,
	cmyktoothViewRotationAboutCanvasCenter,
} from '../src'
import { defaults, Houndstooth } from '../../../src'

const cmyktoothEffect: Houndstooth = {
	name: 'cmyktooth',
	basePattern: {
		tileSettings: {
			tileSizeSetting: defaults.DEFAULT_CANVAS_SIZE,
		},
		viewSettings: {
			centerViewOnCenterOfTileAtHomeAddress: true,
			rotateViewAboutCanvasCenter: 0,
			canvasSize: defaults.DEFAULT_CANVAS_SIZE,
		},
		gridSettings: {
			gridSize: 31,
			includeNegativeQuadrants: true,
		},
		colorSettings: {
			colorSet: cmyktoothColorSet(),
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
