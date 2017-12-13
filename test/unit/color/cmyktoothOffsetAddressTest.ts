import { Address, to } from '../../../../../src/indexForTest'
import { cmyktoothOffsetAddress } from '../../../pattern'

describe('cmyktooth offset address', () => {
	it('is one x, zero y', () => {
		const subject: () => Address = cmyktoothOffsetAddress.default

		expect(subject()).toEqual(to.Address([ 1, 0 ]))
	})
})
