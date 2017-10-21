import { Color, Coordinate, Units } from '../../../../../src'
import { Diagonal } from '../../../../../test/integration/helpers/types'

enum Fill {
	Transparent,
	Opaque,
}

type SectionExpectation = [ Diagonal, Fill ]

type ExpectSection = (_: {
		areaOrigin: Coordinate,
		areaSize: Units,
		expectedSection: [ Diagonal, Fill ],
		solidColor: Color,
	}) => void

export {
	Fill,
	SectionExpectation,
	ExpectSection,
}
