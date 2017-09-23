import state from '../../../../state'

const cmyktoothOpacity = () => 1 / (state.currentLayer + 2)

export default cmyktoothOpacity
