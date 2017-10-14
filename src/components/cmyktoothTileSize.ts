import { Units } from '../../../../src'

const cmyktoothTileSize: { (p: Units): Units } = p => p / Math.sqrt(2)

export default cmyktoothTileSize
