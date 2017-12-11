import { to } from '../../../../../src/indexForTest'
import { setAppStateForEffectTests } from '../../../../../test'
import { cmyktoothOpacity } from '../../../pattern'

const subject: () => number = cmyktoothOpacity.default

describe('cmyktooth opacity', () => {
	it('decreases harmonically, starting with half', () => {
		setAppStateForEffectTests.setCurrentLayer(to.Layer(0))
		expect(subject()).toBe(1 / 1)
		setAppStateForEffectTests.setCurrentLayer(to.Layer(1))
		expect(subject()).toBe(1 / 2)
		setAppStateForEffectTests.setCurrentLayer(to.Layer(2))
		expect(subject()).toBe(1 / 3)
		setAppStateForEffectTests.setCurrentLayer(to.Layer(3))
		expect(subject()).toBe(1 / 4)
		setAppStateForEffectTests.setCurrentLayer(to.Layer(4))
		expect(subject()).toBe(1 / 5)
		setAppStateForEffectTests.setCurrentLayer(to.Layer(5))
		expect(subject()).toBe(1 / 6)
		setAppStateForEffectTests.setCurrentLayer(to.Layer(6))
		expect(subject()).toBe(1 / 7)
		setAppStateForEffectTests.setCurrentLayer(to.Layer(7))
		expect(subject()).toBe(1 / 8)
	})
})
