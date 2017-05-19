import calculateSquareCenter from '../utilities/calculateSquareCenter'
import calculateSquareType from '../utilities/calculateSquareType'
import tile from '../../shared/components/tile'
import calculateRotation from '../utilities/calculateRotation'
import calculateCmyktoothColors from '../utilities/calculateCmyktoothColors'

export default ({ origin, options }) => {
	const { cmyktooth: { layerColor, squareSize, orientation } } = options
	const squareType = calculateSquareType({ origin })
	const colors = calculateCmyktoothColors({ layerColor, squareType })
	const center = calculateSquareCenter({ origin, orientation, squareSize })
	const rotationAboutCenter = calculateRotation({ orientation })
	const scaleFromGridCenter = true
	const size = squareSize

	tile({ center, size, colors, scaleFromGridCenter, rotationAboutCenter })
}


