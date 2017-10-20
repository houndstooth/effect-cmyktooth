import { constants, from, Radian, to } from '../../../../src'

const cmyktoothViewRotationAboutCanvasCenter: (p: Radian) => Radian = p =>
	to.Radian(from.Radian(p) + from.Radian(constants.EIGHTH_OF_CIRCLE_ROTATION))

export { cmyktoothViewRotationAboutCanvasCenter }
