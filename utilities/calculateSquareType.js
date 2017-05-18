import { GRID_SIZE } from '../../shared/common/customize'

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

export default ({ x, y }) => {
	const whatTypeOfSquareIsTheOneAtTheGridOrigin = GRID_SIZE % 2 === 0 ? (GRID_SIZE / 2) % 2 : ((GRID_SIZE + 1) / 2) % 2

	return WHICH_SOLID_OR_STRIPE[ whatTypeOfSquareIsTheOneAtTheGridOrigin ][ x % 2 ][ y % 2 ]
}