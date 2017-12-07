import { appState, constants, from, to, Unit } from '../../../../../src'
import { isCloseTo } from '../../../../../test'
import { cmyktoothTileSize } from '../../../pattern'

const { CANVAS_SIZE, SQRT_2 } = constants
const subject: () => Unit = cmyktoothTileSize.default

describe('cmyktooth tile size', () => {
	it('for the first layer, is the same as the canvas size', () => {
		appState.execute.currentLayer = to.Layer(0)
		expect(from.Unit(subject())).toBe(from.Px(CANVAS_SIZE))
	})

	it('reduces the size by the square root of two each layer', () => {
		appState.execute.currentLayer = to.Layer(0)
		const atLayerZero: number = from.Unit(subject())

		appState.execute.currentLayer = to.Layer(1)
		const atLayerOne: number = from.Unit(subject())

		appState.execute.currentLayer = to.Layer(2)
		const atLayerTwo: number = from.Unit(subject())

		expect(isCloseTo(atLayerOne, atLayerZero / SQRT_2)).toBe(true)
		expect(isCloseTo(atLayerTwo, atLayerOne / SQRT_2)).toBe(true)
	})
})
