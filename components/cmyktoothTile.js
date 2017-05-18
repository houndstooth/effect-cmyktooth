import calculateSquareCenter from '../utilities/calculateSquareCenter'
import calculateSquareType from '../utilities/calculateSquareType'
import tile from '../../shared/components/tile'
import calculateRotation from '../utilities/calculateRotation'
import calculateCmyktoothColors from '../utilities/calculateCmyktoothColors'

export default ({ x, y, options }) => {
	const { cmyktooth: { color, squareSize, orientation } } = options
	const squareType = calculateSquareType({ x, y })
	const { originColor, otherColor } = calculateCmyktoothColors({ color, squareType })
	const center = calculateSquareCenter({ x, y, orientation, squareSize })
	const rotationAboutCenter = calculateRotation({ orientation })
	const scaleFromGridCenter = true
	const size = squareSize

	tile({ center, size, originColor, otherColor, scaleFromGridCenter, rotationAboutCenter })
}


