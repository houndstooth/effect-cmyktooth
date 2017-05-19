import layer from '../components/layer'
import iterator from '../../shared/utilities/iterator'
import { CANVAS_SIZE, END_ITERATION } from '../../shared/common/customize'

const ORIENTATION = [
	'TOP_RIGHT',
	'RIGHT',
	'BOTTOM_RIGHT',
	'BOTTOM',
	'BOTTOM_LEFT',
	'LEFT',
	'TOP_LEFT',
	'TOP'
]

export default () => {
	let tileSize = CANVAS_SIZE
	iterator(END_ITERATION, { oneIndexed: true }).forEach(iteration => {
		const orientation = ORIENTATION[ iteration % 8 ]
		tileSize /= Math.sqrt(2)
		layer({ orientation, tileSize, iteration })
	})
}