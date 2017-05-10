import { START_ITERATION } from './customize'
import { ORIENTATION_TO_STRIPES_FUNCTION } from './constants'
import solidSquare from './solidSquare'

export default (ctx, squareOrigin, squareSize, orientation, isMainGridDiagonal, whichSolidOrStripe, layer, flipGrain) => {
	if (layer < START_ITERATION) return

	if (whichSolidOrStripe == 'SOLID_OPAQUE') {
		solidSquare(ctx, squareOrigin, squareSize, isMainGridDiagonal)
	} else if (whichSolidOrStripe == 'STRIPED_TOP_CUSP_OPAQUE' || whichSolidOrStripe == 'STRIPED_TOP_CUSP_TRANSLUCENT') {
		const stripesFunction = ORIENTATION_TO_STRIPES_FUNCTION[ orientation ]
		if (flipGrain) {
			if (whichSolidOrStripe == 'STRIPED_TOP_CUSP_TRANSLUCENT') {
				whichSolidOrStripe = 'STRIPED_TOP_CUSP_OPAQUE'
			} else if (whichSolidOrStripe == 'STRIPED_TOP_CUSP_OPAQUE') {
				whichSolidOrStripe = 'STRIPED_TOP_CUSP_TRANSLUCENT'
			}
		}
		stripesFunction(ctx, squareOrigin, squareSize, whichSolidOrStripe)
	}
}