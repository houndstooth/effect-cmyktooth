export default (squareType, flipGrain) => {
	if (flipGrain) {
		if (squareType == 'STRIPED_TOP_CUSP_TRANSLUCENT') {
			return 'STRIPED_TOP_CUSP_OPAQUE'
		} else if (squareType == 'STRIPED_TOP_CUSP_OPAQUE') {
			return 'STRIPED_TOP_CUSP_TRANSLUCENT'
		}
	}
	return squareType
}