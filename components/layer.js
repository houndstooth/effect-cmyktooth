import square from './square'
import calculateColorAndTransparency from '../utilities/calculateColorAndTransparency'
import iterator from '../../shared/utilities/iterator'
import calculateSquareCenter from '../utilities/calculateSquareCenter'
import calculateSquareType from '../utilities/calculateSquareType'
import { GRID_SIZE } from '../../shared/common/customize'

export default ({ orientation, squareSize, iteration }) => {
	const color = calculateColorAndTransparency({ iteration, orientation })

	iterator(GRID_SIZE).forEach(x => {
		iterator(GRID_SIZE).forEach(y => {
			const center = calculateSquareCenter({ x, y, orientation, squareSize })
			const squareType = calculateSquareType({ x, y })
			square({ center, size: squareSize, orientation, squareType, iteration, color })
		})
	})
}