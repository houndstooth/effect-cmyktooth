import components from './components'
import outlines from './outlines'
import render from './render'

const { cmyktoothColorSet, cmyktoothOffsetAddress, cmyktoothTileSize } = components
const { cmyktoothViewRotationAboutCanvasCenter } = outlines
const { cmyktoothOpacity } = render

export default {
	cmyktoothColorSet,
	cmyktoothOffsetAddress,
	cmyktoothOpacity,
	cmyktoothTileSize,
	cmyktoothViewRotationAboutCanvasCenter,
}
