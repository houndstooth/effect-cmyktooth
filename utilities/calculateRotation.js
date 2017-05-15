const ORIENTATION_TO_ROTATION = {
	'TOP_RIGHT': -8.1 * Math.PI / 4,
	'RIGHT': -7.1 * Math.PI / 4,
	'BOTTOM_RIGHT': -6.1 * Math.PI / 4,
	'BOTTOM': -5.1 * Math.PI / 4,
	'BOTTOM_LEFT': -4.1 * Math.PI / 4,
	'LEFT': -3.1 * Math.PI / 4,
	'TOP_LEFT': -2.1 * Math.PI / 4,
	'TOP': -1.1 * Math.PI / 4
}

export default orientation => {
	return ORIENTATION_TO_ROTATION[ orientation ]
}