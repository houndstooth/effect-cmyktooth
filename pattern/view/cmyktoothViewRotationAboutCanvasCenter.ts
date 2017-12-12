import { from, getCurrentLayer, Radian, to } from '../../../../src'
import { EIGHTH_OF_CIRCLE_ROTATION } from '../../constants'

const cmyktoothViewRotationAboutCanvasCenter: () => Radian =
	(): Radian => to.Radian(from.Layer(getCurrentLayer.default()) * from.Radian(EIGHTH_OF_CIRCLE_ROTATION))

export default cmyktoothViewRotationAboutCanvasCenter
