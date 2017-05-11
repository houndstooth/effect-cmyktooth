import { ORIENTATION_TO_ORIENTATION_WITHOUT_DIRECTIONALITY_MAPPING } from '../common/constants'
import drawMinorDiagonalStripedSquare from '../../shared/render/drawMinorDiagonalStripedSquare'
import drawPrincipalDiagonalStripedSquare from '../../shared/render/drawPrincipalDiagonalStripedSquare'
import drawHorizontalStripedSquare from '../render/drawHorizontalStripedSquare'
import drawVerticalStripedSquare from '../render/drawVerticalStripedSquare'

const ORIENTATION_TO_STRIPES_FUNCTION = {
	'HORIZONTAL': drawHorizontalStripedSquare,
	'PRINCIPAL_DIAGONAL': drawPrincipalDiagonalStripedSquare,
	'VERTICAL': drawVerticalStripedSquare,
	'MINOR_DIAGONAL': drawMinorDiagonalStripedSquare
}

export default orientation => {
	const orientation_without_directionality = ORIENTATION_TO_ORIENTATION_WITHOUT_DIRECTIONALITY_MAPPING[ orientation ]
	return ORIENTATION_TO_STRIPES_FUNCTION[ orientation_without_directionality ]
}