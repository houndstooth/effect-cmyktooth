import { SQRT } from '../common/constants'
import { UNIT } from '../../shared/common/customize'
import render from '../../shared/render/render'
import scaleOrigin from '../../shared/utilities/scaleOrigin'

export default ({ origin, size, originColor, otherColor, scaleFromCenter }) => {
	origin = scaleOrigin({ origin, scaleFromCenter })
	const diagonalSizedUnit = size * UNIT * SQRT / 4

	const topTriangleCoordinates = [
		[
			origin[ 0 ] + 2 * diagonalSizedUnit,
			origin[ 1 ] - 2 * diagonalSizedUnit
		],
		[
			origin[ 0 ] + diagonalSizedUnit,
			origin[ 1 ] - diagonalSizedUnit
		],
		[
			origin[ 0 ] + 3 * diagonalSizedUnit,
			origin[ 1 ] - diagonalSizedUnit
		]
	]

	const topTrapezoidCoordinates = [
		[
			origin[ 0 ],
			origin[ 1 ]
		],
		[
			origin[ 0 ] + diagonalSizedUnit,
			origin[ 1 ] - diagonalSizedUnit
		],
		[
			origin[ 0 ] + 3 * diagonalSizedUnit,
			origin[ 1 ] - diagonalSizedUnit
		],
		[
			origin[ 0 ] + 4 * diagonalSizedUnit,
			origin[ 1 ]
		]
	]

	const bottomTrapezoidCoordinates = [
		[
			origin[ 0 ],
			origin[ 1 ]
		],
		[
			origin[ 0 ] + diagonalSizedUnit,
			origin[ 1 ] + diagonalSizedUnit
		],
		[
			origin[ 0 ] + 3 * diagonalSizedUnit,
			origin[ 1 ] + diagonalSizedUnit
		],
		[
			origin[ 0 ] + 4 * diagonalSizedUnit,
			origin[ 1 ]
		]
	]

	const bottomTriangleCoordinates = [
		[
			origin[ 0 ] + 2 * diagonalSizedUnit,
			origin[ 1 ] + 2 * diagonalSizedUnit
		],
		[
			origin[ 0 ] + diagonalSizedUnit,
			origin[ 1 ] + diagonalSizedUnit
		],
		[
			origin[ 0 ] + 3 * diagonalSizedUnit,
			origin[ 1 ] + diagonalSizedUnit
		]
	]

	render({ color: originColor, coordinates: topTriangleCoordinates })
	render({ color: otherColor, coordinates: topTrapezoidCoordinates })
	render({ color: originColor, coordinates: bottomTrapezoidCoordinates })
	render({ color: otherColor, coordinates: bottomTriangleCoordinates })
}