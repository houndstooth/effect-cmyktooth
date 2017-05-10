import { ORIENTATION_TO_COLOR_MAPPING } from './constants'

export default (layer, orientation) => {
	const transparency = 1 / (layer * 2)
	return ORIENTATION_TO_COLOR_MAPPING[ orientation ] + transparency + ')'
}