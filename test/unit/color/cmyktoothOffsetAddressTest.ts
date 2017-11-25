import { to } from '../../../../../src'
import { cmyktoothOffsetAddress } from '../../../pattern'

describe('cmyktooth offset address', () => {
	it('is one x, zero y', () => {
		expect(cmyktoothOffsetAddress.main()).toEqual(to.Address([ 1, 0 ]))
	})
})
