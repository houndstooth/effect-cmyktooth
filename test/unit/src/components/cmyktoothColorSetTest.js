import cmyktoothColorSet from '../../../../src/components/cmyktoothColorSet'
import { BLACK, CYAN, MAGENTA, TRANSPARENT, YELLOW } from '../../../../../../src/constants'
import state from '../../../../../../src/state'
import resetState from '../../../../../../src/store/resetState'

describe('cmyktooth color set', () => {
	beforeEach(() => resetState(state))

	it('cycles through Cyan, Magenta, Yellow, and blacK, with the other color always transparent', () => {
		state.currentLayer = 0
		expect(cmyktoothColorSet()).toEqual([ BLACK, TRANSPARENT ])
		state.currentLayer = 1
		expect(cmyktoothColorSet()).toEqual([ CYAN, TRANSPARENT ])
		state.currentLayer = 2
		expect(cmyktoothColorSet()).toEqual([ MAGENTA, TRANSPARENT ])
		state.currentLayer = 3
		expect(cmyktoothColorSet()).toEqual([ YELLOW, TRANSPARENT ])
		state.currentLayer = 4
		expect(cmyktoothColorSet()).toEqual([ BLACK, TRANSPARENT ])
		state.currentLayer = 5
		expect(cmyktoothColorSet()).toEqual([ CYAN, TRANSPARENT ])
		state.currentLayer = 6
		expect(cmyktoothColorSet()).toEqual([ MAGENTA, TRANSPARENT ])
		state.currentLayer = 7
		expect(cmyktoothColorSet()).toEqual([ YELLOW, TRANSPARENT ])
	})
})
