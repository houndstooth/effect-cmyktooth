import { from, state } from '../../../../src'

const CMYKTOOTH_BASE_OPACITY_DENOMINATOR_CONSTANT: number = 1

const cmyktoothOpacity: () => number =
	(): number => 1 / (from.Layer(state.execute.currentLayer) + CMYKTOOTH_BASE_OPACITY_DENOMINATOR_CONSTANT)

export default cmyktoothOpacity
