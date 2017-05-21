import rotateCoordinateAboutPoint from '../../shared/utilities/rotateCoordinateAboutPoint'
import calculateCoordinateRelativeToGridCenter from './calculateCoordinateRelativeToGridCenter'
import state from '../../state'

export default ({ origin }) => rotateCoordinateAboutPoint({
	point: [ state.shared.canvasSize / 2, state.shared.canvasSize / 2 ],
	coordinate: calculateCoordinateRelativeToGridCenter({ origin }),
	rotation: state.cmyktooth.layerRotation
})
