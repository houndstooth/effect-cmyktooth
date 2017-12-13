// tslint:disable:no-any

import { Radian, to } from '../../../../../src/indexForTest'
import { setAppStateForEffectTests } from '../../../../../test'
import { EIGHTH_OF_CIRCLE_ROTATION } from '../../../constants'
import { cmyktoothViewRotationAboutCanvasCenter } from '../../../pattern'

const NO_ROTATION: Radian = 0 as any
const QUARTER_CIRCLE_ROTATION: Radian = Math.PI / 2 as any

describe('cmyktooth view rotation about canvas center', () => {
	it('rotates the view an eight of the way round each layer', () => {
		const subject: () => Radian = cmyktoothViewRotationAboutCanvasCenter.default

		setAppStateForEffectTests.setCurrentLayer(to.Layer(0))
		expect(subject()).toBe(NO_ROTATION)
		setAppStateForEffectTests.setCurrentLayer(to.Layer(1))
		expect(subject()).toBe(EIGHTH_OF_CIRCLE_ROTATION)
		setAppStateForEffectTests.setCurrentLayer(to.Layer(2))
		expect(subject()).toBe(QUARTER_CIRCLE_ROTATION)
	})
})
