import iterator from '../shared/utilities/iterator'
import grid from '../shared/components/grid'
import tile from '../shared/components/tile'
import rotateCoordinateAboutPoint from '../shared/utilities/rotateCoordinateAboutPoint'
import state from '../shared/state/state'
import { BLACK, CYAN, MAGENTA, YELLOW } from '../shared/render/colors'

const CMYK_COLORS = [ YELLOW, BLACK, CYAN, MAGENTA ]

const CMYKTOOTH_SUPERTILE = [
	[
		'SOLID_OPAQUE',
		'STRIPED_A'
	],
	[
		'STRIPED_B',
		'SOLID_TRANSLUCENT'
	]
]

const OFFSET_CMYKTOOTH_SUPERTILE = [
	[
		'SOLID_TRANSLUCENT',
		'STRIPED_B'
	],
	[
		'STRIPED_A',
		'SOLID_OPAQUE'
	]
]

const WHICH_SOLID_OR_STRIPE = [
	CMYKTOOTH_SUPERTILE,
	OFFSET_CMYKTOOTH_SUPERTILE
]

const calculateCoordinateRelativeToGridCenter = ({ origin }) => {
	const { gridSize, tileSize, canvasSize } = state.shared
	const canvasCenter = [ canvasSize / 2, canvasSize / 2 ]

	if (gridSize % 2 === 0) {
		return [
			(origin[ 0 ] - (( gridSize - 2 ) / 2)) * tileSize + canvasCenter[ 0 ],
			(origin[ 1 ] - (( gridSize - 2 ) / 2)) * tileSize + canvasCenter[ 1 ]
		]
	}

	return [
		(origin[ 0 ] - (( gridSize - 1 ) / 2)) * tileSize + canvasCenter[ 0 ],
		(origin[ 1 ] - (( gridSize - 1 ) / 2)) * tileSize + canvasCenter[ 1 ]
	]
}

const calculateLayerColorAndTransparency = ({ iteration }) => {
	const layerColor = state.cmyktooth.cmykColorsMode ? CMYK_COLORS[ iteration % 4 ] : BLACK
	layerColor.a = 1 / (iteration)
	return layerColor
}

const calculateTileCenter = ({ origin }) => rotateCoordinateAboutPoint({
	point: [ state.shared.canvasSize / 2, state.shared.canvasSize / 2 ],
	coordinate: calculateCoordinateRelativeToGridCenter({ origin }),
	rotation: state.cmyktooth.layerRotation
})

const calculateTileType = ({ origin }) => {
	const { gridSize } = state.shared

	const whatTypeOfSquareIsTheOneAtTheGridOrigin = gridSize % 2 === 0 ? (gridSize / 2) % 2 : ((gridSize + 1) / 2) % 2

	return WHICH_SOLID_OR_STRIPE[ whatTypeOfSquareIsTheOneAtTheGridOrigin ][ origin[ 0 ] % 2 ][ origin[ 1 ] % 2 ]
}

const calculateCmyktoothTileColors = ({ origin }) => {
	const { layerColor } = state.cmyktooth
	const tileType = calculateTileType({ origin })
	let colors = []
	const transparentVersionOfLayerColor = Object.assign({}, layerColor)
	transparentVersionOfLayerColor.a = 0

	if (tileType === 'SOLID_OPAQUE') {
		colors[ 0 ] = layerColor
		colors[ 1 ] = layerColor
	} else if (tileType === 'STRIPED_B') {
		colors[ 0 ] = transparentVersionOfLayerColor
		colors[ 1 ] = layerColor
	} else if (tileType === 'STRIPED_A') {
		colors[ 0 ] = layerColor
		colors[ 1 ] = transparentVersionOfLayerColor
	} else if (tileType === 'SOLID_TRANSLUCENT') {
		colors[ 0 ] = transparentVersionOfLayerColor
		colors[ 1 ] = transparentVersionOfLayerColor
	}

	return colors
}

const cmyktoothTile = ({ origin }) => {
	const colors = calculateCmyktoothTileColors({ origin })
	const center = calculateTileCenter({ origin })
	const rotationAboutCenter = state.cmyktooth.layerRotation
	const scaleFromGridCenter = true
	const size = state.shared.tileSize

	tile({ origin, center, size, colors, scaleFromGridCenter, rotationAboutCenter })
}

export default () => {
	state.shared.tileSize = state.shared.canvasSize
	state.cmyktooth.layerRotation = 0
	iterator(state.cmyktooth.endIteration, { oneIndexed: true }).forEach(iteration => {
		state.cmyktooth.layerRotation += Math.PI / 4
		state.shared.tileSize /= Math.sqrt(2)

		if (iteration < state.cmyktooth.startIteration) return
		state.cmyktooth.layerColor = calculateLayerColorAndTransparency({ iteration })

		grid({ tile: cmyktoothTile })
	})
}
