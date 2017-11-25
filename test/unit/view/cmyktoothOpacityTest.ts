import { state, to } from '../../../../../src'
import { cmyktoothOpacity } from '../../../pattern'

describe('cmyktooth opacity', () => {
	it('decreases harmonically, starting with half', () => {
		state.currentLayer = to.Layer(0)
		expect(cmyktoothOpacity.main()).toBe(1 / 1)
		state.currentLayer = to.Layer(1)
		expect(cmyktoothOpacity.main()).toBe(1 / 2)
		state.currentLayer = to.Layer(2)
		expect(cmyktoothOpacity.main()).toBe(1 / 3)
		state.currentLayer = to.Layer(3)
		expect(cmyktoothOpacity.main()).toBe(1 / 4)
		state.currentLayer = to.Layer(4)
		expect(cmyktoothOpacity.main()).toBe(1 / 5)
		state.currentLayer = to.Layer(5)
		expect(cmyktoothOpacity.main()).toBe(1 / 6)
		state.currentLayer = to.Layer(6)
		expect(cmyktoothOpacity.main()).toBe(1 / 7)
		state.currentLayer = to.Layer(7)
		expect(cmyktoothOpacity.main()).toBe(1 / 8)
	})
})
