import calculateLayerColorAndTransparency from '../utilities/calculateLayerColorAndTransparency'
import grid from '../../shared/components/grid'
import cmyktoothTile from '../components/cmyktoothTile'
import { START_ITERATION } from '../common/customize'

export default ({ orientation, tileSize, iteration }) => {
	if (iteration < START_ITERATION) return

	const layerColor = calculateLayerColorAndTransparency({ iteration })

	const options = { cmyktooth: { layerColor, orientation, tileSize }}

	grid({ tile: cmyktoothTile, options })
}