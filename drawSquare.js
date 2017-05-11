import { START_ITERATION } from './customize'
import drawSolidSquare from '../shared/drawSolidSquare'
import drawSolidSquareDiagonal from './drawSolidSquareDiagonal'
import maybeFlipSquareType from './maybeFlipSquareType'
import calculateStripesFunction from './calculateStripesFunction'

export default ({ ctx, origin, size, orientation, isMainGridDiagonal, squareType, layer, flipGrain }) => {
	if (layer < START_ITERATION) return

	if (squareType == 'SOLID_OPAQUE') {
		const squareFunction = isMainGridDiagonal ? drawSolidSquareDiagonal : drawSolidSquare
		squareFunction({ctx, origin, size})
	} else if (squareType == 'STRIPED_TOP_CUSP_OPAQUE' || squareType == 'STRIPED_TOP_CUSP_TRANSLUCENT') {
		const stripesFunction = calculateStripesFunction(orientation)
		squareType = maybeFlipSquareType(squareType, flipGrain)
		stripesFunction({ctx, origin, size, squareType})
	}
}