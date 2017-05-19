import calculateTileCenter from '../utilities/calculateTileCenter'
import tile from '../../shared/components/tile'
import calculateRotation from '../utilities/calculateRotation'
import calculateCmyktoothTileColors from '../utilities/calculateCmyktoothTileColors'

export default ({ origin, options }) => {
	const { cmyktooth: { layerColor, tileSize, orientation } } = options

	const colors = calculateCmyktoothTileColors({ layerColor, origin })
	const center = calculateTileCenter({ origin, orientation, tileSize })
	const rotationAboutCenter = calculateRotation({ orientation })
	const scaleFromGridCenter = true
	const size = tileSize

	tile({ center, size, colors, scaleFromGridCenter, rotationAboutCenter })
}


