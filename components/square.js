import { START_ITERATION } from '../common/customize'
import drawSolidSquare from '../../shared/render/drawSolidSquare'
import drawStripedSquare from '../../shared/render/drawStripedSquare'
import calculateRotation from '../utilities/calculateRotation'
import calculateStripeColors from '../utilities/calculateStripeColors'

export default ({ center, size, orientation, squareType, iteration, color }) => {
	if (iteration < START_ITERATION) return
	const rotationAboutCenter = calculateRotation({ orientation })

	if (squareType == 'SOLID_OPAQUE') {
		drawSolidSquare({
			center,
			size,
			color,
			scaleFromGridCenter: true,
			rotationAboutCenter
		})
	} else if (squareType == 'STRIPED_B' || squareType == 'STRIPED_A') {
		const { originColor, otherColor } = calculateStripeColors({ color, squareType, orientation })
		drawStripedSquare({
			center,
			size,
			originColor,
			otherColor,
			scaleFromGridCenter: true,
			rotationAboutCenter
		})
	}
}