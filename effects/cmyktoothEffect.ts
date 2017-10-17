import { CanvasSize, defaults, Houndstooth } from '../../../src'
import {
	cmyktoothColorSet,
	cmyktoothOffsetAddress,
	cmyktoothOpacity,
	cmyktoothTileSize,
	cmyktoothViewRotationAboutCanvasCenter,
} from '../src'

const cmyktoothEffect: Houndstooth = {
	name: 'cmyktooth',
	basePattern: {
		tileSettings: {
			tileSizeSetting: defaults.DEFAULT_CANVAS_SIZE as any,
		},
		viewSettings: {
			centerViewOnCenterOfTileAtHomeAddress: true,
			rotateViewAboutCanvasCenter: 0 as any,
			canvasSize: defaults.DEFAULT_CANVAS_SIZE as CanvasSize,
		},
		gridSettings: {
			gridSize: 31,
			includeNegativeQuadrants: true,
		},
		colorSettings: {
			colorSet: cmyktoothColorSet(),
			opacity: 0.5,
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
