import iterator from '../../shared/utilities/iterator'
import state from '../../state'
import grid from '../../shared/components/grid'
import calculateLayerColorAndTransparency from '../utilities/calculateLayerColorAndTransparency'
import cmyktoothTile from '../components/cmyktoothTile'

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
	state.shared.tileSize = state.shared.canvasSize
	iterator(state.shared.endIteration, { oneIndexed: true }).forEach(iteration => {
		//stuff you have to do, even if not rendering this layer
		state.cmyktooth.orientation = ORIENTATION[ iteration % 8 ]
		state.shared.tileSize /= Math.sqrt(2)

		if (iteration < state.cmyktooth.startIteration) return
		state.cmyktooth.layerColor = calculateLayerColorAndTransparency({ iteration })

		grid({ tile: cmyktoothTile })
	})
}