import { from, state } from '../../../../src'

const CMYKTOOTH_BASE_OPACITY_DENOMINATOR_CONSTANT: number = 2

const cmyktoothOpacity: () => number =
	(): number => 1 / (from.Layer(state.currentLayer) + CMYKTOOTH_BASE_OPACITY_DENOMINATOR_CONSTANT)

export { cmyktoothOpacity }
