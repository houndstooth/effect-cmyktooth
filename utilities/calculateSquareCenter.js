import { CENTER } from '../../shared/common/constants'
import rotateCoordinateAboutPoint from '../../shared/utilities/rotateCoordinateAboutPoint'
import calculateCoordinateRelativeToGridCenter from './calculateCoordinateRelativeToGridCenter'
import calculateRotation from '../utilities/calculateRotation'

export default ({ origin, orientation, squareSize }) => rotateCoordinateAboutPoint({
	point: CENTER,
	coordinate: calculateCoordinateRelativeToGridCenter({ origin, squareSize }),
	rotation: calculateRotation({ orientation })
})
