import { START_ITERATION } from '../common/customize'
import drawSolidSquare from '../../shared/render/drawSolidSquare'
import drawMinorDiagonalStripedSquare from '../../shared/render/drawMinorDiagonalStripedSquare'
import calculateRotation from '../utilities/calculateRotation'
import calculateStripeColors from '../utilities/calculateStripeColors'

export default ({ origin, size, orientation, squareType, iteration, color }) => {
	if (iteration < START_ITERATION) return
	const rotation = calculateRotation(orientation)

	if (squareType == 'SOLID_OPAQUE') {
		drawSolidSquare({origin, size, color, scaleFromCenter: true, rotation })
	} else if (squareType == 'STRIPED_B' || squareType == 'STRIPED_A') {
		const {originColor, otherColor} = calculateStripeColors({color, squareType, orientation})
		drawMinorDiagonalStripedSquare({origin, size, originColor, otherColor, scaleFromCenter: true, rotation})
	}
}