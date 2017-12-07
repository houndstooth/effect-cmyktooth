import { appState, constants, from, to, Unit } from '../../../../src'

const { CANVAS_SIZE, SQRT_2 } = constants

const cmyktoothTileSize: () => Unit =
	(): Unit => {
		const currentLayerValue: number = from.Layer(appState.execute.currentLayer)

		return to.Unit(from.Px(CANVAS_SIZE) / Math.pow(SQRT_2, currentLayerValue))
	}

export default cmyktoothTileSize
