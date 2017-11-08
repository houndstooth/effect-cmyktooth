import { constants, Radian } from '../../../../src'
import * as from from '../../../../src/from'
import * as to from '../../../../src/to'

const cmyktoothViewRotationAboutCanvasCenter: (p: Radian) => Radian =
	(p: Radian): Radian => to.Radian(from.Radian(p) + from.Radian(constants.EIGHTH_OF_CIRCLE_ROTATION))

export { cmyktoothViewRotationAboutCanvasCenter }
