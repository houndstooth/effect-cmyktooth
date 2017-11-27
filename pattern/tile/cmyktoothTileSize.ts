import { constants, from, getSetting, state, to, Unit } from '../../../../src'

const { SQRT_2 } = constants

const cmyktoothTileSize: () => Unit =
	(): Unit => to.Unit(from.Px(getSetting.default('canvasSize')) / Math.pow(SQRT_2, from.Layer(state.currentLayer)))

export default cmyktoothTileSize
