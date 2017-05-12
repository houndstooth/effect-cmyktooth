import { START_ITERATION } from '../common/customize'
import drawSolidSquare from '../../shared/render/drawSolidSquare'
import drawSolidSquareDiagonal from '../render/drawSolidSquareDiagonal'
import calculateStripesFunction from '../utilities/calculateStripesFunction'
import calculateStripeColors from '../utilities/calculateStripeColors'
import { ORIENTATION_OF_STRIPES_TO_GRID_DIAGONALITY_MAPPING } from '../common/constants'

export default ({ origin, size, orientation, squareType, iteration, color }) => {
	if (iteration < START_ITERATION) return

	if (squareType == 'SOLID_OPAQUE') {
		const squareFunction = ORIENTATION_OF_STRIPES_TO_GRID_DIAGONALITY_MAPPING[ orientation ] ? drawSolidSquareDiagonal : drawSolidSquare
		squareFunction({origin, size, color, scaleFromCenter: true })
	} else if (squareType == 'STRIPED_TOP_CUSP_OPAQUE' || squareType == 'STRIPED_TOP_CUSP_TRANSLUCENT') {
		const stripesFunction = calculateStripesFunction(orientation)
		const {originColor, otherColor} = calculateStripeColors({color, squareType, orientation})
		stripesFunction({origin, size, originColor, otherColor, scaleFromCenter: true})
	}
}