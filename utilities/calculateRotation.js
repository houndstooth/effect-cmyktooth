const ORIENTATION_TO_ROTATION = {
	'TOP_RIGHT': 0,
	'RIGHT': Math.PI / 4,
	'BOTTOM_RIGHT': 2 * Math.PI / 4,
	'BOTTOM': 3 * Math.PI / 4,
	'BOTTOM_LEFT': 4 * Math.PI / 4,
	'LEFT': 5 * Math.PI / 4,
	'TOP_LEFT': 6 * Math.PI / 4,
	'TOP': 7 * Math.PI / 4
}

export default ({ orientation }) => {
	return ORIENTATION_TO_ROTATION[ orientation ]
}