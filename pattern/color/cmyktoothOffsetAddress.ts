import { Address } from '../../../../src'
import * as to from '../../../../src/to'

const cmyktoothOffsetAddress: () => Address
	= (): Address => to.Address([ 1, 0 ])

export { cmyktoothOffsetAddress }
