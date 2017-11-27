import { constants, from, to, Unit } from '../../../../src'

const cmyktoothTileSize: (p: Unit) => Unit =
	(p: Unit): Unit => to.Unit(from.Unit(p) / constants.SQRT_2)

export default cmyktoothTileSize
