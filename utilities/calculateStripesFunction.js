import * as stripesFunctions from '../render/stripesFunctions'

const ORIENTATION_TO_STRIPES_FUNCTION = {
	'HORIZONTAL': stripesFunctions.horizontalStripes,
	'PRINCIPAL_DIAGONAL': stripesFunctions.principalDiagonalStripes,
	'VERTICAL': stripesFunctions.verticalStripes,
	'MINOR_DIAGONAL': stripesFunctions.minorDiagonalStripes
}

export default orientation => ORIENTATION_TO_STRIPES_FUNCTION[ orientation ]