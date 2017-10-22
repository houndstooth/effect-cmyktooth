import { EIGHTH_OF_CIRCLE_ROTATION, QUARTER_CIRCLE_ROTATION } from '../../../../../../src/constants'
import * as to from '../../../../../../src/utilities/to'
import { cmyktoothViewRotationAboutCanvasCenter } from '../../../../src/view/cmyktoothViewRotationAboutCanvasCenter'

describe('cmyktooth view rotation about canvas center', () => {
	it('rotates the view an eight of the way round each layer', () => {
		expect(cmyktoothViewRotationAboutCanvasCenter(to.Radian(0))).toBe(EIGHTH_OF_CIRCLE_ROTATION)
		expect(cmyktoothViewRotationAboutCanvasCenter(EIGHTH_OF_CIRCLE_ROTATION)).toBe(QUARTER_CIRCLE_ROTATION)
	})
})
