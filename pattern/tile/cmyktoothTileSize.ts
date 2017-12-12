import { CANVAS_SIZE, from, getCurrentLayer, to, Unit } from '../../../../src'
import { SQRT_2 } from '../../constants'

const cmyktoothTileSize: () => Unit =
	(): Unit => {
		const currentLayerValue: number = from.Layer(getCurrentLayer.default())

		return to.Unit(from.Px(CANVAS_SIZE) / Math.pow(SQRT_2, currentLayerValue))
	}

export default cmyktoothTileSize
