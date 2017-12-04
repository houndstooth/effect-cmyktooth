import { constants, from, getSetting, state, to, Unit } from '../../../../src'

const { SQRT_2 } = constants

const cmyktoothTileSize: () => Unit =
	(): Unit => {
		const canvasSizeValue: number = from.Px(getSetting.default('canvasSize'))
		const currentLayerValue: number = from.Layer(state.execute.currentLayer)

		return to.Unit(canvasSizeValue / Math.pow(SQRT_2, currentLayerValue))
	}

export default cmyktoothTileSize
