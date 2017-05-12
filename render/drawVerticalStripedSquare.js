import { SQRT } from '../common/constants'
import { UNIT } from '../../shared/common/customize'
import render from '../../shared/render/render'

export default ({ origin, size, originColor, otherColor }) => {
	const diagonalSizedUnit = size * UNIT * SQRT / 4

	const leftTriangleCoordinates = [
		[
			origin[ 0 ],
			origin[ 1 ]
		],
		[
			origin[ 0 ] + diagonalSizedUnit,
			origin[ 1 ] - diagonalSizedUnit
		],
		[
			origin[ 0 ] + diagonalSizedUnit,
			origin[ 1 ] + diagonalSizedUnit
		]
	]

	const leftTrapezoidCoordinates = [
		[
			origin[ 0 ] + 2 * diagonalSizedUnit,
			origin[ 1 ] - 2 * diagonalSizedUnit
		],
		[
			origin[ 0 ] + 2 * diagonalSizedUnit,
			origin[ 1 ] + 2 * diagonalSizedUnit
		],
		[
			origin[ 0 ] + diagonalSizedUnit,
			origin[ 1 ] + diagonalSizedUnit
		],
		[
			origin[ 0 ] + diagonalSizedUnit,
			origin[ 1 ] - diagonalSizedUnit
		]
	]
	const rightTrapezoidCoordinates = [
		[
			origin[ 0 ] + 2 * diagonalSizedUnit,
			origin[ 1 ] - 2 * diagonalSizedUnit
		],
		[
			origin[ 0 ] + 2 * diagonalSizedUnit,
			origin[ 1 ] + 2 * diagonalSizedUnit
		],
		[
			origin[ 0 ] + 3 * diagonalSizedUnit,
			origin[ 1 ] + diagonalSizedUnit
		],
		[
			origin[ 0 ] + 3 * diagonalSizedUnit,
			origin[ 1 ] - diagonalSizedUnit
		]
	]
	const rightTriangleCoordinates = [
		[
			origin[ 0 ] + 3 * diagonalSizedUnit,
			origin[ 1 ] + diagonalSizedUnit
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

	render({ color: originColor, coordinates: leftTriangleCoordinates })
	render({ color: otherColor, coordinates: leftTrapezoidCoordinates })
	render({ color: originColor, coordinates: rightTrapezoidCoordinates })
	render({ color: otherColor, coordinates: rightTriangleCoordinates })
}