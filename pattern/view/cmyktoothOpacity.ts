import { getCurrentLayer, from } from '../../../../src'

const CMYKTOOTH_BASE_OPACITY_DENOMINATOR_CONSTANT: number = 1

const cmyktoothOpacity: () => number =
	(): number => 1 / (from.Layer(getCurrentLayer.default()) + CMYKTOOTH_BASE_OPACITY_DENOMINATOR_CONSTANT)

export default cmyktoothOpacity
