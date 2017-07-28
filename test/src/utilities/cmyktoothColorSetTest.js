import cmyktoothColorSet from '../../../src/utilities/cmyktoothColorSet'
import { BLACK, CYAN, MAGENTA, TRANSPARENT, YELLOW } from '../../../../../src/constants'
import store from '../../../../../store'
import resetStore from '../../../../../test/helpers/resetStore'

describe('cmyktooth color set', () => {
	beforeEach(() => resetStore(store))

	it('cycles through Cyan, Magenta, Yellow, and blacK, with the other color always transparent', () => {
		store.iterationFrame = 0
		expect(cmyktoothColorSet()).toEqual([ BLACK, TRANSPARENT ])
		store.iterationFrame = 1
		expect(cmyktoothColorSet()).toEqual([ CYAN, TRANSPARENT ])
		store.iterationFrame = 2
		expect(cmyktoothColorSet()).toEqual([ MAGENTA, TRANSPARENT ])
		store.iterationFrame = 3
		expect(cmyktoothColorSet()).toEqual([ YELLOW, TRANSPARENT ])
		store.iterationFrame = 4
		expect(cmyktoothColorSet()).toEqual([ BLACK, TRANSPARENT ])
		store.iterationFrame = 5
		expect(cmyktoothColorSet()).toEqual([ CYAN, TRANSPARENT ])
		store.iterationFrame = 6
		expect(cmyktoothColorSet()).toEqual([ MAGENTA, TRANSPARENT ])
		store.iterationFrame = 7
		expect(cmyktoothColorSet()).toEqual([ YELLOW, TRANSPARENT ])
	})
})
