import { Color, Coordinate, Units } from '../../../../../src'
import { Diagonal } from '../../../../../test/integration/helpers/types'

enum Fill {
	Transparent = 'transparent',
	Opaque = 'opaque',
}

type SectionExpectation = [ Diagonal, Fill ]

interface ExpectSection {
	({}: {
		areaOrigin: Coordinate,
		areaSize: Units,
		expectedSection: [ Diagonal, Fill ],
		solidColor: Color,
	}): void,
}

export {
	Fill,
	SectionExpectation,
	ExpectSection,
}
