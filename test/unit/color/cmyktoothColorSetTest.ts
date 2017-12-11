import { ColorSet, constants, to } from '../../../../../src/indexForTest'
import { cmyktoothColorSet } from '../../../pattern'
import { setAppStateForEffectTests } from '../../../../../test'

const subject: () => ColorSet = cmyktoothColorSet.default

describe('cmyktooth color set', () => {
	const { BLACK, CYAN, MAGENTA, TRANSPARENT, YELLOW } = constants

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
