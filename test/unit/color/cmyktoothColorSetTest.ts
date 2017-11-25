import { constants, state, to } from '../../../../../src'
import { cmyktoothColorSet } from '../../../pattern'

const { BLACK, CYAN, MAGENTA, TRANSPARENT, YELLOW } = constants

describe('cmyktooth color set', () => {
	it('cycles through Cyan, Magenta, Yellow, and blacK, with the other color always transparent', () => {
		state.currentLayer = to.Layer(0)
		expect(cmyktoothColorSet.main()).toEqual([ YELLOW, TRANSPARENT ])
		state.currentLayer = to.Layer(1)
		expect(cmyktoothColorSet.main()).toEqual([ BLACK, TRANSPARENT ])
		state.currentLayer = to.Layer(2)
		expect(cmyktoothColorSet.main()).toEqual([ CYAN, TRANSPARENT ])
		state.currentLayer = to.Layer(3)
		expect(cmyktoothColorSet.main()).toEqual([ MAGENTA, TRANSPARENT ])
		state.currentLayer = to.Layer(4)
		expect(cmyktoothColorSet.main()).toEqual([ YELLOW, TRANSPARENT ])
		state.currentLayer = to.Layer(5)
		expect(cmyktoothColorSet.main()).toEqual([ BLACK, TRANSPARENT ])
		state.currentLayer = to.Layer(6)
		expect(cmyktoothColorSet.main()).toEqual([ CYAN, TRANSPARENT ])
		state.currentLayer = to.Layer(7)
		expect(cmyktoothColorSet.main()).toEqual([ MAGENTA, TRANSPARENT ])
	})
})
