import cmyktoothColorSet from '../../../src/utilities/cmyktoothColorSet'
import { BLACK, CYAN, MAGENTA, TRANSPARENT, YELLOW } from '../../../../../src/constants'
import store from '../../../../../store'
import resetStore from '../../../../../src/store/resetStore'

describe('cmyktooth color set', () => {
	beforeEach(() => resetStore(store))

	it('cycles through Cyan, Magenta, Yellow, and blacK, with the other color always transparent', () => {
		store.currentLayer = 0
		expect(cmyktoothColorSet()).toEqual([ BLACK, TRANSPARENT ])
		store.currentLayer = 1
		expect(cmyktoothColorSet()).toEqual([ CYAN, TRANSPARENT ])
		store.currentLayer = 2
		expect(cmyktoothColorSet()).toEqual([ MAGENTA, TRANSPARENT ])
		store.currentLayer = 3
		expect(cmyktoothColorSet()).toEqual([ YELLOW, TRANSPARENT ])
		store.currentLayer = 4
		expect(cmyktoothColorSet()).toEqual([ BLACK, TRANSPARENT ])
		store.currentLayer = 5
		expect(cmyktoothColorSet()).toEqual([ CYAN, TRANSPARENT ])
		store.currentLayer = 6
		expect(cmyktoothColorSet()).toEqual([ MAGENTA, TRANSPARENT ])
		store.currentLayer = 7
		expect(cmyktoothColorSet()).toEqual([ YELLOW, TRANSPARENT ])
	})
})
