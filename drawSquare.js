import { START_ITERATION } from './customize'
import solidSquare from './solidSquare'
import maybeFlipSquareType from './maybeFlipSquareType'
import calculateStripesFunction from './calculateStripesFunction'

export default ({ ctx, origin, size, orientation, isMainGridDiagonal, squareType, layer, flipGrain }) => {
	if (layer < START_ITERATION) return

	if (squareType == 'SOLID_OPAQUE') {
		solidSquare({ctx, origin, size, isMainGridDiagonal})
	} else if (squareType == 'STRIPED_TOP_CUSP_OPAQUE' || squareType == 'STRIPED_TOP_CUSP_TRANSLUCENT') {
		const stripesFunction = calculateStripesFunction(orientation)
		squareType = maybeFlipSquareType(squareType, flipGrain)
		stripesFunction({ctx, origin, size, squareType})
	}
}