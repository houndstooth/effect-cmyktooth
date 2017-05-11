import { START_ITERATION } from '../common/customize'
import drawSolidSquare from '../../shared/drawSolidSquare'
import drawSolidSquareDiagonal from '../render/drawSolidSquareDiagonal'
import maybeFlipSquareType from '../utilities/maybeFlipSquareType'
import calculateStripesFunction from '../utilities/calculateStripesFunction'

export default ({ ctx, origin, size, orientation, isMainGridDiagonal, squareType, iteration, flipGrain }) => {
	if (iteration < START_ITERATION) return

	if (squareType == 'SOLID_OPAQUE') {
		const squareFunction = isMainGridDiagonal ? drawSolidSquareDiagonal : drawSolidSquare
		squareFunction({ctx, origin, size})
	} else if (squareType == 'STRIPED_TOP_CUSP_OPAQUE' || squareType == 'STRIPED_TOP_CUSP_TRANSLUCENT') {
		const stripesFunction = calculateStripesFunction(orientation)
		squareType = maybeFlipSquareType(squareType, flipGrain)
		stripesFunction({ctx, origin, size, squareType})
	}
}