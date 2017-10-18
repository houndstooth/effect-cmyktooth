import { constants, Radian } from '../../../../src'

const cmyktoothViewRotationAboutCanvasCenter: (p: Radian) => Radian = p =>
	p as any + constants.EIGHTH_OF_CIRCLE_ROTATION

export { cmyktoothViewRotationAboutCanvasCenter }
