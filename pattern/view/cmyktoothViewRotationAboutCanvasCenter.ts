import { appState, constants, from, Radian, to } from '../../../../src'

const cmyktoothViewRotationAboutCanvasCenter: () => Radian =
	(): Radian => to.Radian(from.Layer(appState.execute.currentLayer) * from.Radian(constants.EIGHTH_OF_CIRCLE_ROTATION))

export default cmyktoothViewRotationAboutCanvasCenter
