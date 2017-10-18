import { constants, Units } from '../../../../src'

const cmyktoothTileSize: (p: Units) => Units = p => p as any / constants.SQRT_2 as any

export default cmyktoothTileSize
