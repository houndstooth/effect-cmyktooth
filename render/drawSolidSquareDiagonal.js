import { SQRT } from '../common/constants'
import { UNIT } from '../../shared/common/customize'
import render from '../../shared/render/render'

export default ({ origin, size, color }) => {
	const diagonalSizedUnit = UNIT * size / SQRT

	const coordinates = [
		[
			origin[ 0 ],
			origin[ 1 ]
		],
		[
			origin[ 0 ] + diagonalSizedUnit,
			origin[ 1 ] - diagonalSizedUnit
		],
		[
			origin[ 0 ] + 2 * diagonalSizedUnit,
			origin[ 1 ]
		],
		[
			origin[ 0 ] + diagonalSizedUnit,
			origin[ 1 ] + diagonalSizedUnit
		]
	]

	render({ color, coordinates })
}