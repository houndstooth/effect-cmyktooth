import calculateTileCenter from '../utilities/calculateTileCenter'
import tile from '../../shared/components/tile'
import calculateCmyktoothTileColors from '../utilities/calculateCmyktoothTileColors'
import state from '../../shared/application/state'

export default ({ origin }) => {
	const colors = calculateCmyktoothTileColors({ origin })
	const center = calculateTileCenter({ origin })
	const rotationAboutCenter = state.cmyktooth.layerRotation
	const scaleFromGridCenter = true
	const size = state.shared.tileSize

	tile({ origin, center, size, colors, scaleFromGridCenter, rotationAboutCenter })
}
