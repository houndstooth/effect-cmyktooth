import isCloseTo from '../../../../../../test/helpers/isCloseTo'
import cmyktoothTileSize from '../../../../src/components/cmyktoothTileSize'

describe('cmyktooth tile size', () => {
	it('reduces the size by the square root of two each layer', () => {
		expect(isCloseTo(cmyktoothTileSize(2 as any) as any, Math.sqrt(2))).toBe(true)
		expect(isCloseTo(cmyktoothTileSize(Math.sqrt(2) as any) as any, 1)).toBe(true)
	})
})
