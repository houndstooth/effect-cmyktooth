import { START_ITERATION } from '../common/customize'
import drawSolidSquare from '../../shared/render/drawSolidSquare'
import drawSolidSquareDiagonal from '../render/drawSolidSquareDiagonal'
import calculateStripesFunction from '../utilities/calculateStripesFunction'
import calculateStripeColors from '../utilities/calculateStripeColors'

export default ({ origin, size, orientation, isMainGridDiagonal, squareType, iteration, color }) => {
	if (iteration < START_ITERATION) return

	if (squareType == 'SOLID_OPAQUE') {
		const squareFunction = isMainGridDiagonal ? drawSolidSquareDiagonal : drawSolidSquare
		squareFunction({origin, size, color })
	} else if (squareType == 'STRIPED_TOP_CUSP_OPAQUE' || squareType == 'STRIPED_TOP_CUSP_TRANSLUCENT') {
		const stripesFunction = calculateStripesFunction(orientation)
		const {originColor, otherColor} = calculateStripeColors({color, squareType, orientation})
		stripesFunction({origin, size, originColor, otherColor})
	}
}