import { constants, from, Radian, state, to } from '../../../../src'

const cmyktoothViewRotationAboutCanvasCenter: () => Radian =
	(): Radian => to.Radian(from.Layer(state.currentLayer) * from.Radian(constants.EIGHTH_OF_CIRCLE_ROTATION))

export default cmyktoothViewRotationAboutCanvasCenter
