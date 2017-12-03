import { NamedEffect, to } from '../../../src'
import { DEFAULT_CMYKTOOTH_END_LAYER, DEFAULT_CMYKTOOTH_TILE_RESOLUTION } from '../constants'
import {
	cmyktoothColorSet,
	cmyktoothOffsetAddress,
	cmyktoothOpacity,
	cmyktoothTileSize,
	cmyktoothViewRotationAboutCanvasCenter,
} from '../pattern'
import CMYKTOOTH_DESCRIPTION from './cmyktoothDescription'

const cmyktoothEffect: NamedEffect = {
	basePattern: {
		colorSettings: {
			colorAssignmentSettings: {
				offsetAddress: cmyktoothOffsetAddress.default,
			},
		},
		gridSettings: {
			includeNegativeQuadrants: true,
			tileResolution: DEFAULT_CMYKTOOTH_TILE_RESOLUTION,
		},
		layerSettings: {
			endLayer: to.Layer(DEFAULT_CMYKTOOTH_END_LAYER),
		},
		viewSettings: {
			centerViewOnCenterOfTileAtHomeAddress: true,
		},
	},
	description: CMYKTOOTH_DESCRIPTION,
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
