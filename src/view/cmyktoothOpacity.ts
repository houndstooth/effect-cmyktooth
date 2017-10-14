import { state } from '../../../../src'

const cmyktoothOpacity: { (): number } = () => 1 / (state.currentLayer + 2)

export default cmyktoothOpacity
