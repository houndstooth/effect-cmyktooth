import { GRID_SIZE } from './customize'

const WHICH_SOLID_OR_STRIPE = [
	[
		[
			'SOLID_OPAQUE',
			'STRIPED_TOP_CUSP_OPAQUE'
		],
		[
			'STRIPED_TOP_CUSP_TRANSLUCENT',
			'SOLID_TRANSLUCENT'
		]
	],
	[
		[
			'SOLID_TRANSLUCENT',
			'STRIPED_TOP_CUSP_TRANSLUCENT'
		],
		[
			'STRIPED_TOP_CUSP_OPAQUE',
			'SOLID_OPAQUE'
		]
	]
]

export default (x, y) => {
	const whatTypeOfSquareIsTheOneAtTheGridOrigin = (GRID_SIZE - 1) % 2

	return WHICH_SOLID_OR_STRIPE[ whatTypeOfSquareIsTheOneAtTheGridOrigin ][ x % 2 ][ y % 2 ]
}