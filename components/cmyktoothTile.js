import calculateTileCenter from '../utilities/calculateTileCenter'
import tile from '../../shared/components/tile'
import calculateRotation from '../utilities/calculateRotation'
import calculateCmyktoothTileColors from '../utilities/calculateCmyktoothTileColors'
import state from '../../state'

export default ({ origin }) => {
    const orientation = state.cmyktooth.orientation
    const size = state.shared.tileSize
	const colors = calculateCmyktoothTileColors({ layerColor: state.cmyktooth.layerColor, origin })
	const center = calculateTileCenter({ origin, orientation, tileSize: size })
	const rotationAboutCenter = calculateRotation({ orientation })
	const scaleFromGridCenter = true

	tile({ center, size, colors, scaleFromGridCenter, rotationAboutCenter })
}
