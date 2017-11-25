import { Address, to } from '../../../../src'

const cmyktoothOffsetAddress: () => Address =
	(): Address => to.Address([ 1, 0 ])

export { cmyktoothOffsetAddress as main }
