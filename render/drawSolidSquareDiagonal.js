import { SQRT } from '../common/constants'
import { UNIT } from '../../shared/common/customize'
import render from '../../shared/render/render'
import scaleOrigin from '../../shared/utilities/scaleOrigin'

export default ({ origin, size, color, scaleFromCenter }) => {
	origin = scaleOrigin({ origin, scaleFromCenter })
	const diagonalSizedUnit = size * UNIT / SQRT

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