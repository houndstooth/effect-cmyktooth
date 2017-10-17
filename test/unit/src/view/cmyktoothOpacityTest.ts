import state from '../../../../../../src/state'
import cmyktoothOpacity from '../../../../src/view/cmyktoothOpacity'

describe('cmyktooth opacity', () => {
	it('decreases harmonically, starting with half', () => {
		state.currentLayer = 0
		expect(cmyktoothOpacity()).toBe(1 / 2)
		state.currentLayer = 1
		expect(cmyktoothOpacity()).toBe(1 / 3)
		state.currentLayer = 2
		expect(cmyktoothOpacity()).toBe(1 / 4)
		state.currentLayer = 3
		expect(cmyktoothOpacity()).toBe(1 / 5)
		state.currentLayer = 4
		expect(cmyktoothOpacity()).toBe(1 / 6)
		state.currentLayer = 5
		expect(cmyktoothOpacity()).toBe(1 / 7)
		state.currentLayer = 6
		expect(cmyktoothOpacity()).toBe(1 / 8)
		state.currentLayer = 7
		expect(cmyktoothOpacity()).toBe(1 / 9)
	})
})
