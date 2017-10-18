import { state } from '../../../../src'

const CMYKTOOTH_BASE_OPACITY_DENOMINATOR_CONSTANT = 2

const cmyktoothOpacity: () => number = () => 1 / (state.currentLayer + CMYKTOOTH_BASE_OPACITY_DENOMINATOR_CONSTANT)

export { cmyktoothOpacity }
