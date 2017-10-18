import { CanvasSize, defaults, Houndstooth } from '../../../src'
import {
	cmyktoothColorSet,
	cmyktoothOffsetAddress,
	cmyktoothOpacity,
	cmyktoothTileSize,
	cmyktoothViewRotationAboutCanvasCenter,
} from '../src'

const cmyktoothEffect: Houndstooth = {
	basePattern: {
		colorSettings: {
			assignment: {
				offsetAddress: cmyktoothOffsetAddress,
			},
			colorSet: cmyktoothColorSet(),
			opacity: 0.5,
		},
		gridSettings: {
			gridSize: 31,
			includeNegativeQuadrants: true,
		},
		layerSettings: {
			endLayer: 16,
			startLayer: 0,
		},
		tileSettings: {
			tileSizeSetting: defaults.DEFAULT_CANVAS_SIZE as any,
		},
		viewSettings: {
			canvasSize: defaults.DEFAULT_CANVAS_SIZE as CanvasSize,
			centerViewOnCenterOfTileAtHomeAddress: true,
			rotateViewAboutCanvasCenter: 0 as any,
		},
	},
	layersPattern: {
		colorSettings: {
			colorSet: cmyktoothColorSet,
			opacity: cmyktoothOpacity,
		},
		tileSettings: {
			tileSizeSetting: cmyktoothTileSize,
		},
		viewSettings: {
			rotateViewAboutCanvasCenter: cmyktoothViewRotationAboutCanvasCenter,
		},
	},
	name: 'cmyktooth',
}

export { cmyktoothEffect }
