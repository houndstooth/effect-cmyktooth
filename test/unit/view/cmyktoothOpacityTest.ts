import { appState, to } from '../../../../../src'
import { cmyktoothOpacity } from '../../../pattern'

describe('cmyktooth opacity', () => {
	it('decreases harmonically, starting with half', () => {
		appState.execute.currentLayer = to.Layer(0)
		expect(cmyktoothOpacity.default()).toBe(1 / 1)
		appState.execute.currentLayer = to.Layer(1)
		expect(cmyktoothOpacity.default()).toBe(1 / 2)
		appState.execute.currentLayer = to.Layer(2)
		expect(cmyktoothOpacity.default()).toBe(1 / 3)
		appState.execute.currentLayer = to.Layer(3)
		expect(cmyktoothOpacity.default()).toBe(1 / 4)
		appState.execute.currentLayer = to.Layer(4)
		expect(cmyktoothOpacity.default()).toBe(1 / 5)
		appState.execute.currentLayer = to.Layer(5)
		expect(cmyktoothOpacity.default()).toBe(1 / 6)
		appState.execute.currentLayer = to.Layer(6)
		expect(cmyktoothOpacity.default()).toBe(1 / 7)
		appState.execute.currentLayer = to.Layer(7)
		expect(cmyktoothOpacity.default()).toBe(1 / 8)
	})
})
