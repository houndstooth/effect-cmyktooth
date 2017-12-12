import { CANVAS_SIZE, from, to, Unit } from '../../../../../src/indexForTest'
import { isCloseTo, setAppStateForEffectTests } from '../../../../../test'
import { SQRT_2 } from '../../../constants'
import { cmyktoothTileSize } from '../../../pattern'

describe('cmyktooth tile size', () => {
	let subject: () => Unit
	beforeEach(() => {
		subject = cmyktoothTileSize.default
	})

	it('for the first layer, is the same as the canvas size', () => {
		setAppStateForEffectTests.setCurrentLayer(to.Layer(0))
		expect(from.Unit(subject())).toBe(from.Px(CANVAS_SIZE))
	})

	it('reduces the size by the square root of two each layer', () => {
		setAppStateForEffectTests.setCurrentLayer(to.Layer(0))
		const atLayerZero: number = from.Unit(subject())

		setAppStateForEffectTests.setCurrentLayer(to.Layer(1))
		const atLayerOne: number = from.Unit(subject())

		setAppStateForEffectTests.setCurrentLayer(to.Layer(2))
		const atLayerTwo: number = from.Unit(subject())

		expect(isCloseTo(atLayerOne, atLayerZero / SQRT_2)).toBe(true)
		expect(isCloseTo(atLayerTwo, atLayerOne / SQRT_2)).toBe(true)
	})
})
