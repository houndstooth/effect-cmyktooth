import { WHICH_SOLID_OR_STRIPE } from './constants'
import { GRID_SIZE } from './customize'

export default (x, y) => {
	const whatTypeOfSquareIsTheOneAtTheGridOrigin = (GRID_SIZE - 1) % 2

	return WHICH_SOLID_OR_STRIPE[ whatTypeOfSquareIsTheOneAtTheGridOrigin ][ x % 2 ][ y % 2 ]
}