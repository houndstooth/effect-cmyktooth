import { defaults, Effect, from, to } from '../../../src'
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
			endLayer: to.Layer(DEFAULT_CMYKTOOTH_END_LAYER),
			startLayer: to.Layer(0),
		},
		tileSettings: {
			tileSizeSetting: to.Unit(from.Dimension(defaults.DEFAULT_CANVAS_SIZE)),
		},
		viewSettings: {
			canvasSize: defaults.DEFAULT_CANVAS_SIZE,
			centerViewOnCenterOfTileAtHomeAddress: true,
			rotateViewAboutCanvasCenter: to.Radian(0),
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
