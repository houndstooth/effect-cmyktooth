import cmyktoothOpacity from '../../../src/utilities/cmyktoothOpacity'
import store from '../../../../../store'
import resetStore from '../../../../../test/helpers/resetStore'

describe('cmyktooth opacity', () => {
	beforeEach(() => resetStore(store))

	it('decreases harmonically, starting with half', () => {
		store.iterationFrame = 0
		expect(cmyktoothOpacity()).toBe(1/2)
		store.iterationFrame = 1
		expect(cmyktoothOpacity()).toBe(1/3)
		store.iterationFrame = 2
		expect(cmyktoothOpacity()).toBe(1/4)
		store.iterationFrame = 3
		expect(cmyktoothOpacity()).toBe(1/5)
		store.iterationFrame = 4
		expect(cmyktoothOpacity()).toBe(1/6)
		store.iterationFrame = 5
		expect(cmyktoothOpacity()).toBe(1/7)
		store.iterationFrame = 6
		expect(cmyktoothOpacity()).toBe(1/8)
		store.iterationFrame = 7
		expect(cmyktoothOpacity()).toBe(1/9)
	})
})
