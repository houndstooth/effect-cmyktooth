import { defaults, Effect, from, to } from '../../../src'
import { DEFAULT_CMYKTOOTH_END_LAYER, DEFAULT_CMYKTOOTH_TILE_RESOLUTION } from '../constants'
import {
	cmyktoothColorSet,
	cmyktoothOffsetAddress,
	cmyktoothOpacity,
	cmyktoothTileSize,
	cmyktoothViewRotationAboutCanvasCenter,
} from '../pattern'

const cmyktoothEffect: Effect = {
	basePattern: {
		colorSettings: {
			colorAssignmentSettings: {
				offsetAddress: cmyktoothOffsetAddress.default,
			},
			colorSet: cmyktoothColorSet.default(),
			opacity: 0.5,
		},
		gridSettings: {
			includeNegativeQuadrants: true,
			tileResolution: DEFAULT_CMYKTOOTH_TILE_RESOLUTION,
		},
		layerSettings: {
			endLayer: to.Layer(DEFAULT_CMYKTOOTH_END_LAYER),
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
			colorSet: cmyktoothColorSet.default,
			opacity: cmyktoothOpacity.default,
		},
		tileSettings: {
			tileSize: cmyktoothTileSize.default,
		},
		viewSettings: {
			rotateViewAboutCanvasCenter: cmyktoothViewRotationAboutCanvasCenter.default,
		},
	},
	name: 'cmyktooth',
}

export { cmyktoothEffect }
