import * as stripesFunctions from './stripesFunctions'

const SQRT = Math.sqrt(2)

const ORIENTATION_TO_STRIPES_FUNCTION = {
	'HORIZONTAL': stripesFunctions.horizontalStripes,
	'PRINCIPAL_DIAGONAL': stripesFunctions.principalDiagonalStripes,
	'VERTICAL': stripesFunctions.verticalStripes,
	'MINOR_DIAGONAL': stripesFunctions.minorDiagonalStripes
}

const ORIENTATION_TO_COLOR_MAPPING = {
	'HORIZONTAL': 'rgba(0, 0, 0, ', //black
	'PRINCIPAL_DIAGONAL': 'rgba(0, 255, 255, ', //cyan
	'VERTICAL': 'rgba(255, 0, 255, ', //magenta
	'MINOR_DIAGONAL': 'rgba(255, 255, 0, ' //yellow
}

//this is going clockwise ... although i don't think it actually is going clockwise
const ORIENTATION_OF_STRIPES_CYCLE = {
	'HORIZONTAL': 'PRINCIPAL_DIAGONAL',
	'PRINCIPAL_DIAGONAL': 'VERTICAL',
	'VERTICAL': 'MINOR_DIAGONAL',
	'MINOR_DIAGONAL': 'HORIZONTAL'
}

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

export {
	SQRT,
	ORIENTATION_TO_STRIPES_FUNCTION,
	ORIENTATION_TO_COLOR_MAPPING,
	ORIENTATION_OF_STRIPES_CYCLE,
	WHICH_SOLID_OR_STRIPE
}