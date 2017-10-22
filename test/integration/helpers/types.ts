import { Color, Coordinate, Unit } from '../../../../../src'
import { Diagonal } from '../../../../../test/integration/helpers/types'

type Fill =
	| 'transparent'
	| 'opaque'

type SectionExpectation = [ Diagonal, Fill ]

type ExpectSection = (_: {
		areaOrigin: Coordinate,
		areaSize: Unit,
		expectedSection: [ Diagonal, Fill ],
		solidColor: Color,
	}) => void

export {
	SectionExpectation,
	ExpectSection,
}
