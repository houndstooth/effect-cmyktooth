import { defaults, Effect, from, to } from '../../../src'
import { DEFAULT_CMYKTOOTH_END_LAYER, DEFAULT_CMYKTOOTH_TILE_RESOLUTION } from '../constants'
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
			colorAssignmentSettings: {
				offsetAddress: cmyktoothOffsetAddress,
			},
			colorSet: cmyktoothColorSet(),
			opacity: 0.5,
		},
		gridSettings: {
			includeNegativeQuadrants: true,
			tileResolution: DEFAULT_CMYKTOOTH_TILE_RESOLUTION,
		},
		layerSettings: {
			endLayer: to.Layer(DEFAULT_CMYKTOOTH_END_LAYER),
			startLayer: to.Layer(1),
		},
		tileSettings: {
			tileSize: to.Unit(from.Px(defaults.DEFAULT_CANVAS_SIZE)),
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
			tileSize: cmyktoothTileSize,
		},
		viewSettings: {
			rotateViewAboutCanvasCenter: cmyktoothViewRotationAboutCanvasCenter,
		},
	},
	name: 'cmyktooth',
}

export { cmyktoothEffect }
