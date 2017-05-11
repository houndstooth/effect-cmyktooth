import { ORIENTATION_TO_ORIENTATION_WITHOUT_DIRECTIONALITY_MAPPING } from '../common/constants'

const ORIENTATION_TO_COLOR_MAPPING = {
	'HORIZONTAL': 'rgba(0, 0, 0, ', //black
	'PRINCIPAL_DIAGONAL': 'rgba(0, 255, 255, ', //cyan
	'VERTICAL': 'rgba(255, 0, 255, ', //magenta
	'MINOR_DIAGONAL': 'rgba(255, 255, 0, ' //yellow
}

export default (layer, orientation) => {
	const transparency = 1 / (layer * 2)
	const orientation_without_directionality = ORIENTATION_TO_ORIENTATION_WITHOUT_DIRECTIONALITY_MAPPING[ orientation ]
	return ORIENTATION_TO_COLOR_MAPPING[ orientation_without_directionality ] + transparency + ')'
}