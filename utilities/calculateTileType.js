import state from '../../shared/application/state'

const CMYKTOOTH_SUPERTILE = [
	[
		'SOLID_OPAQUE',
		'STRIPED_A'
	],
	[
		'STRIPED_B',
		'SOLID_TRANSLUCENT'
	]
]
const OFFSET_CMYKTOOTH_SUPERTILE = [
	[
		'SOLID_TRANSLUCENT',
		'STRIPED_B'
	],
	[
		'STRIPED_A',
		'SOLID_OPAQUE'
	]
]
const WHICH_SOLID_OR_STRIPE = [
	CMYKTOOTH_SUPERTILE,
	OFFSET_CMYKTOOTH_SUPERTILE
]

export default ({ origin }) => {
	const { gridSize } = state.shared

	const whatTypeOfSquareIsTheOneAtTheGridOrigin = gridSize % 2 === 0 ? (gridSize / 2) % 2 : ((gridSize + 1) / 2) % 2

	return WHICH_SOLID_OR_STRIPE[ whatTypeOfSquareIsTheOneAtTheGridOrigin ][ origin[ 0 ] % 2 ][ origin[ 1 ] % 2 ]
}