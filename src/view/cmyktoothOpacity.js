import { state } from '../../../../src'

const cmyktoothOpacity = () => 1 / (state.currentLayer + 2)

export default cmyktoothOpacity
