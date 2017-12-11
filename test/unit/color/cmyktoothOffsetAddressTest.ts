import { Address, to } from '../../../../../src/indexForTest'
import { cmyktoothOffsetAddress } from '../../../pattern'

const subject: () => Address = cmyktoothOffsetAddress.default

describe('cmyktooth offset address', () => {
	it('is one x, zero y', () => {
		expect(subject()).toEqual(to.Address([ 1, 0 ]))
	})
})
