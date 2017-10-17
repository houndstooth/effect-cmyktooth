import { Units } from '../../../../src'

const cmyktoothTileSize: (p: Units) => Units = p => p as any / Math.sqrt(2) as any

export default cmyktoothTileSize
