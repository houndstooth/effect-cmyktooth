import { Color, Coordinate, Unit } from '../../../../../src'
import { Diagonal } from '../../../../../test/integration/helpers/types'

enum Fill {
	Transparent,
	Opaque,
}

type SectionExpectation = [ Diagonal, Fill ]

type ExpectSection = (_: {
		areaOrigin: Coordinate,
		areaSize: Unit,
		expectedSection: [ Diagonal, Fill ],
		solidColor: Color,
	}) => void

export {
	Fill,
	SectionExpectation,
	ExpectSection,
}
