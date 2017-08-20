import cmyktoothTileSize from '../../../src/utilities/cmyktoothTileSize'
import isCloseTo from '../../../../../test/helpers/isCloseTo'

describe('cmyktooth tile size', () => {
	it('reduces the size by the square root of two each layer', () => {
		expect(isCloseTo(cmyktoothTileSize(2), Math.sqrt(2))).toBe(true)
		expect(isCloseTo(cmyktoothTileSize(Math.sqrt(2)), 1)).toBe(true)
	})
})
