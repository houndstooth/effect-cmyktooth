import { CENTER } from '../../shared/common/constants'
import rotateCoordinateAboutPoint from '../../shared/utilities/rotateCoordinateAboutPoint'
import calculateCoordinateRelativeToGridCenter from './calculateCoordinateRelativeToGridCenter'
import calculateRotation from '../utilities/calculateRotation'

export default ({ x, y, orientation, squareSize }) => rotateCoordinateAboutPoint({
	point: CENTER,
	coordinate: calculateCoordinateRelativeToGridCenter({ x, y, squareSize }),
	rotation: calculateRotation({ orientation })
})
