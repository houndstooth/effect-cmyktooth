import { constants, Unit } from '../../../../src'
import * as from from '../../../../src/from'
import * as to from '../../../../src/to'

const cmyktoothTileSize: (p: Unit) => Unit =
	(p: Unit): Unit => to.Unit(from.Unit(p) / constants.SQRT_2)

export { cmyktoothTileSize }
