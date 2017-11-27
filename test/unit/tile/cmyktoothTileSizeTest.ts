import { constants, from, to } from '../../../../../src'
import { isCloseTo } from '../../../../../test'
import { cmyktoothTileSize } from '../../../pattern'

const { SQRT_2 } = constants

describe('cmyktooth tile size', () => {
	it('reduces the size by the square root of two each layer', () => {
		expect(isCloseTo(from.Unit(cmyktoothTileSize.default(to.Unit(2))), SQRT_2)).toBe(true)
		expect(isCloseTo(from.Unit(cmyktoothTileSize.default(to.Unit(SQRT_2))), 1)).toBe(true)
	})
})
