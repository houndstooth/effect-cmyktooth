import iterator from '../shared/utilities/iterator'
import state from '../state'
import grid from '../shared/components/grid'

import calculateLayerColorAndTransparency from './utilities/calculateLayerColorAndTransparency'
import cmyktoothTile from './components/cmyktoothTile'

export default () => {
    state.shared.tileSize = state.shared.canvasSize
    state.cmyktooth.layerRotation = 0
    iterator(state.shared.endIteration, { oneIndexed: true }).forEach(iteration => {
        state.cmyktooth.layerRotation += Math.PI / 4
        state.shared.tileSize /= Math.sqrt(2)

        if (iteration < state.cmyktooth.startIteration) return
        state.cmyktooth.layerColor = calculateLayerColorAndTransparency({ iteration })

        grid({ tile: cmyktoothTile })
    })
}