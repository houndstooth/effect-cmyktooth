import { constants, state, to } from '../../../../../src'
import { cmyktoothColorSet } from '../../../pattern'

const { BLACK, CYAN, MAGENTA, TRANSPARENT, YELLOW } = constants

describe('cmyktooth color set', () => {
	it('cycles through Cyan, Magenta, Yellow, and blacK, with the other color always transparent', () => {
		state.execute.currentLayer = to.Layer(0)
		expect(cmyktoothColorSet.default()).toEqual([ YELLOW, TRANSPARENT ])
		state.execute.currentLayer = to.Layer(1)
		expect(cmyktoothColorSet.default()).toEqual([ BLACK, TRANSPARENT ])
		state.execute.currentLayer = to.Layer(2)
		expect(cmyktoothColorSet.default()).toEqual([ CYAN, TRANSPARENT ])
		state.execute.currentLayer = to.Layer(3)
		expect(cmyktoothColorSet.default()).toEqual([ MAGENTA, TRANSPARENT ])
		state.execute.currentLayer = to.Layer(4)
		expect(cmyktoothColorSet.default()).toEqual([ YELLOW, TRANSPARENT ])
		state.execute.currentLayer = to.Layer(5)
		expect(cmyktoothColorSet.default()).toEqual([ BLACK, TRANSPARENT ])
		state.execute.currentLayer = to.Layer(6)
		expect(cmyktoothColorSet.default()).toEqual([ CYAN, TRANSPARENT ])
		state.execute.currentLayer = to.Layer(7)
		expect(cmyktoothColorSet.default()).toEqual([ MAGENTA, TRANSPARENT ])
	})
})
