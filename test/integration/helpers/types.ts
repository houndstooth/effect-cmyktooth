import { Color, Coordinate, Unit } from '../../../../../src/indexForTest'
import { Diagonal } from '../../../../../test'

type Fill =
	| 'transparent'
	| 'opaque'

type SectionExpectation = [ Diagonal, Fill ]

interface ExpectSectionParams {
	areaOrigin: Coordinate,
	areaSize: Unit,
	expectedSection: [ Diagonal, Fill ],
	solidColor: Color,
}

type ExpectSection = (_: ExpectSectionParams) => void

export {
	SectionExpectation,
	ExpectSection,
	ExpectSectionParams,
	Fill,
}
