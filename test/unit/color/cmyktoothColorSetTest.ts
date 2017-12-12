import { BLACK, ColorSet, CYAN, MAGENTA, to, TRANSPARENT,  YELLOW } from '../../../../../src/indexForTest'
import { setAppStateForEffectTests } from '../../../../../test'
import { cmyktoothColorSet } from '../../../pattern'

const subject: () => ColorSet = cmyktoothColorSet.default

describe('cmyktooth color set', () => {
	it('cycles through Cyan, Magenta, Yellow, and blacK, with the other color always transparent', () => {
		setAppStateForEffectTests.setCurrentLayer(to.Layer(0))
		expect(subject()).toEqual([ YELLOW, TRANSPARENT ])
		setAppStateForEffectTests.setCurrentLayer(to.Layer(1))
		expect(subject()).toEqual([ BLACK, TRANSPARENT ])
		setAppStateForEffectTests.setCurrentLayer(to.Layer(2))
		expect(subject()).toEqual([ CYAN, TRANSPARENT ])
		setAppStateForEffectTests.setCurrentLayer(to.Layer(3))
		expect(subject()).toEqual([ MAGENTA, TRANSPARENT ])
		setAppStateForEffectTests.setCurrentLayer(to.Layer(4))
		expect(subject()).toEqual([ YELLOW, TRANSPARENT ])
		setAppStateForEffectTests.setCurrentLayer(to.Layer(5))
		expect(subject()).toEqual([ BLACK, TRANSPARENT ])
		setAppStateForEffectTests.setCurrentLayer(to.Layer(6))
		expect(subject()).toEqual([ CYAN, TRANSPARENT ])
		setAppStateForEffectTests.setCurrentLayer(to.Layer(7))
		expect(subject()).toEqual([ MAGENTA, TRANSPARENT ])
	})
})
