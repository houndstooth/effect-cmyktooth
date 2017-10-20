import { constants, from, to, Units } from '../../../../src'

const cmyktoothTileSize: (p: Units) => Units = p => to.Units(from.Units(p) / constants.SQRT_2)

export { cmyktoothTileSize }
