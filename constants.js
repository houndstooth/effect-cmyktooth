import * as stripesFunctions from './stripesFunctions'

const SQRT = Math.sqrt(2)
const ORIENTATION_TO_STRIPES_FUNCTION = {
    'HORIZONTAL': stripesFunctions.horizontalStripes,
    'PRINCIPAL_DIAGONAL': stripesFunctions.principalDiagonalStripes,
    'VERTICAL': stripesFunctions.verticalStripes,
    'MINOR_DIAGONAL': stripesFunctions.minorDiagonalStripes
}

export {
    SQRT,
    ORIENTATION_TO_STRIPES_FUNCTION
}