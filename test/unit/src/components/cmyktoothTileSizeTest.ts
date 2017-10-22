import { SQRT_2 } from '../../../../../../src/constants'
import * as from from '../../../../../../src/utilities/from'
import * as to from '../../../../../../src/utilities/to'
import { isCloseTo } from '../../../../../../test/helpers/isCloseTo'
import { cmyktoothTileSize } from '../../../../src/components/cmyktoothTileSize'

describe('cmyktooth tile size', () => {
	it('reduces the size by the square root of two each layer', () => {
		expect(isCloseTo(from.Unit(cmyktoothTileSize(to.Unit(2))), SQRT_2)).toBe(true)
		expect(isCloseTo(from.Unit(cmyktoothTileSize(to.Unit(SQRT_2))), 1)).toBe(true)
	})
})
