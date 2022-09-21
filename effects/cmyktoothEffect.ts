// tslint:disable:no-magic-numbers

import { Layer, NamedEffect } from '../../../src'
import {
	cmyktoothColorSet,
	cmyktoothOffsetAddress,
	cmyktoothOpacity,
	cmyktoothScroll,
	cmyktoothTileSize,
	cmyktoothTilt,
} from '../pattern'

import CMYKTOOTH_DESCRIPTION from './cmyktoothDescription'

// tslint:disable-next-line:no-any
const DEFAULT_CMYKTOOTH_END_LAYER: Layer = 16 as any
const DEFAULT_CMYKTOOTH_TILE_RESOLUTION: number = 81

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
			endLayer: DEFAULT_CMYKTOOTH_END_LAYER,
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
			scroll: cmyktoothScroll.default,
			tilt: cmyktoothTilt.default,
		},
	},
	name: 'cmyktooth',
}

export { cmyktoothEffect }
