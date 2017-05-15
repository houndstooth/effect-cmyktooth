const ORIENTATION_TO_ORIENTATION_WITHOUT_DIRECTIONALITY_MAPPING = {
	'RIGHT': 'HORIZONTAL',
	'BOTTOM_RIGHT': 'PRINCIPAL_DIAGONAL',
	'BOTTOM': 'VERTICAL',
	'BOTTOM_LEFT': 'MINOR_DIAGONAL',
	'LEFT': 'HORIZONTAL',
	'TOP_LEFT': 'PRINCIPAL_DIAGONAL',
	'TOP': 'VERTICAL',
	'TOP_RIGHT': 'MINOR_DIAGONAL'
}

const ORIENTATION_TO_COLOR_MAPPING = {
	'HORIZONTAL': 'rgba(0, 0, 0, ', //black
	'PRINCIPAL_DIAGONAL': 'rgba(0, 255, 255, ', //cyan
	'VERTICAL': 'rgba(255, 0, 255, ', //magenta
	'MINOR_DIAGONAL': 'rgba(255, 255, 0, ' //yellow
}

export default ({iteration, orientation}) => {
	const transparency = 1 / (iteration * 2)
	const orientation_without_directionality = ORIENTATION_TO_ORIENTATION_WITHOUT_DIRECTIONALITY_MAPPING[ orientation ]
	return ORIENTATION_TO_COLOR_MAPPING[ orientation_without_directionality ] + transparency + ')'
}