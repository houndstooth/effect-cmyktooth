import calculateLayerColorAndTransparency from '../utilities/calculateLayerColorAndTransparency'
import grid from '../../shared/components/grid'
import cmyktoothTile from '../components/cmyktoothTile'
import { START_ITERATION } from '../common/customize'

export default ({ orientation, squareSize, iteration }) => {
	if (iteration < START_ITERATION) return

	const layerColor = calculateLayerColorAndTransparency({ iteration })

	const options = { cmyktooth: { layerColor, orientation, squareSize }}

	grid({ tile: cmyktoothTile, options })
}