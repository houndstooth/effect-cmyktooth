import { constants, from, getCurrentLayer, Radian, to } from '../../../../src'

const cmyktoothViewRotationAboutCanvasCenter: () => Radian =
	(): Radian => to.Radian(from.Layer(getCurrentLayer.default()) * from.Radian(constants.EIGHTH_OF_CIRCLE_ROTATION))

export default cmyktoothViewRotationAboutCanvasCenter
