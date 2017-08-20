import cmyktoothOpacity from '../../../src/utilities/cmyktoothOpacity'
import store from '../../../../../store'
import resetStore from '../../../../../src/store/resetStore'

describe('cmyktooth opacity', () => {
	beforeEach(() => resetStore(store))

	it('decreases harmonically, starting with half', () => {
		store.currentLayer = 0
		expect(cmyktoothOpacity()).toBe(1/2)
		store.currentLayer = 1
		expect(cmyktoothOpacity()).toBe(1/3)
		store.currentLayer = 2
		expect(cmyktoothOpacity()).toBe(1/4)
		store.currentLayer = 3
		expect(cmyktoothOpacity()).toBe(1/5)
		store.currentLayer = 4
		expect(cmyktoothOpacity()).toBe(1/6)
		store.currentLayer = 5
		expect(cmyktoothOpacity()).toBe(1/7)
		store.currentLayer = 6
		expect(cmyktoothOpacity()).toBe(1/8)
		store.currentLayer = 7
		expect(cmyktoothOpacity()).toBe(1/9)
	})
})
