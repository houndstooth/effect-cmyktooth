import { CENTER } from '../../shared/constants'
import rotateCoordinateAboutPoint from '../../shared/utilities/rotateCoordinateAboutPoint'
import calculateCoordinateRelativeToGridCenter from './calculateCoordinateRelativeToGridCenter'
import calculateRotation from '../utilities/calculateRotation'

export default ({ origin, orientation, tileSize }) => rotateCoordinateAboutPoint({
	point: CENTER,
	coordinate: calculateCoordinateRelativeToGridCenter({ origin, tileSize }),
	rotation: calculateRotation({ orientation })
})
