import { state, to } from '../../../../../src'
import { cmyktoothOpacity } from '../../../pattern'

describe('cmyktooth opacity', () => {
	it('decreases harmonically, starting with half', () => {
		state.execute.currentLayer = to.Layer(0)
		expect(cmyktoothOpacity.default()).toBe(1 / 1)
		state.execute.currentLayer = to.Layer(1)
		expect(cmyktoothOpacity.default()).toBe(1 / 2)
		state.execute.currentLayer = to.Layer(2)
		expect(cmyktoothOpacity.default()).toBe(1 / 3)
		state.execute.currentLayer = to.Layer(3)
		expect(cmyktoothOpacity.default()).toBe(1 / 4)
		state.execute.currentLayer = to.Layer(4)
		expect(cmyktoothOpacity.default()).toBe(1 / 5)
		state.execute.currentLayer = to.Layer(5)
		expect(cmyktoothOpacity.default()).toBe(1 / 6)
		state.execute.currentLayer = to.Layer(6)
		expect(cmyktoothOpacity.default()).toBe(1 / 7)
		state.execute.currentLayer = to.Layer(7)
		expect(cmyktoothOpacity.default()).toBe(1 / 8)
	})
})
