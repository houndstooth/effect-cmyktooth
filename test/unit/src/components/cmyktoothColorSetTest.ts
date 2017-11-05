import { BLACK, CYAN, MAGENTA, TRANSPARENT, YELLOW } from '../../../../../../src/constants'
import { state } from '../../../../../../src/state'
import * as to from '../../../../../../src/utilities/to'
import { cmyktoothColorSet } from '../../../../src/components/cmyktoothColorSet'

describe('cmyktooth color set', () => {
	it('cycles through Cyan, Magenta, Yellow, and blacK, with the other color always transparent', () => {
		state.currentLayer = to.Layer(0)
		expect(cmyktoothColorSet()).toEqual([ YELLOW, TRANSPARENT ])
		state.currentLayer = to.Layer(1)
		expect(cmyktoothColorSet()).toEqual([ BLACK, TRANSPARENT ])
		state.currentLayer = to.Layer(2)
		expect(cmyktoothColorSet()).toEqual([ CYAN, TRANSPARENT ])
		state.currentLayer = to.Layer(3)
		expect(cmyktoothColorSet()).toEqual([ MAGENTA, TRANSPARENT ])
		state.currentLayer = to.Layer(4)
		expect(cmyktoothColorSet()).toEqual([ YELLOW, TRANSPARENT ])
		state.currentLayer = to.Layer(5)
		expect(cmyktoothColorSet()).toEqual([ BLACK, TRANSPARENT ])
		state.currentLayer = to.Layer(6)
		expect(cmyktoothColorSet()).toEqual([ CYAN, TRANSPARENT ])
		state.currentLayer = to.Layer(7)
		expect(cmyktoothColorSet()).toEqual([ MAGENTA, TRANSPARENT ])
	})
})
