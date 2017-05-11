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

export default orientation => ORIENTATION_TO_STRIPES_FUNCTION[ orientation ]