import { Dimension, defaults, Effect } from '../../../src'
import { DEFAULT_CMYKTOOTH_END_LAYER, DEFAULT_CMYKTOOTH_GRID_SIZE } from '../constants'
import {
	cmyktoothColorSet,
	cmyktoothOffsetAddress,
	cmyktoothOpacity,
	cmyktoothTileSize,
	cmyktoothViewRotationAboutCanvasCenter,
} from '../src'

const cmyktoothEffect: Effect = {
	basePattern: {
		colorSettings: {
			assignment: {
				offsetAddress: cmyktoothOffsetAddress,
			},
			colorSet: cmyktoothColorSet(),
			opacity: 0.5,
		},
		gridSettings: {
			gridSize: DEFAULT_CMYKTOOTH_GRID_SIZE,
			includeNegativeQuadrants: true,
		},
		layerSettings: {
			endLayer: DEFAULT_CMYKTOOTH_END_LAYER as any,
			startLayer: 0 as any,
		},
		tileSettings: {
			tileSizeSetting: defaults.DEFAULT_CANVAS_SIZE as any,
		},
		viewSettings: {
			canvasSize: defaults.DEFAULT_CANVAS_SIZE as any,
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
