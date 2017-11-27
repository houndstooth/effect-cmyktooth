import { constants, to } from '../../../../../src'
import { cmyktoothViewRotationAboutCanvasCenter } from '../../../pattern'

const { EIGHTH_OF_CIRCLE_ROTATION, QUARTER_CIRCLE_ROTATION } = constants

describe('cmyktooth view rotation about canvas center', () => {
	it('rotates the view an eight of the way round each layer', () => {
		expect(cmyktoothViewRotationAboutCanvasCenter.default(to.Radian(0))).toBe(EIGHTH_OF_CIRCLE_ROTATION)
		expect(cmyktoothViewRotationAboutCanvasCenter.default(EIGHTH_OF_CIRCLE_ROTATION)).toBe(QUARTER_CIRCLE_ROTATION)
	})
})
