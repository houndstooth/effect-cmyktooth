import { CENTER } from '../../shared/constants'
import rotateCoordinateAboutPoint from '../../shared/utilities/rotateCoordinateAboutPoint'
import calculateCoordinateRelativeToGridCenter from './calculateCoordinateRelativeToGridCenter'
import state from '../../state'

export default ({ origin }) => rotateCoordinateAboutPoint({
	point: CENTER,
	coordinate: calculateCoordinateRelativeToGridCenter({ origin }),
	rotation: state.cmyktooth.orientation
})
