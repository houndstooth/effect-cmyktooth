import { Diagonal } from '../../../../../test/integration/helpers/types'
import { Coordinate, Color, Units } from '../../../../../src'

enum Fill {
	Transparent = 'transparent',
	Opaque = 'opaque',
}

type SectionExpectation = [ Diagonal, Fill ]

type ExpectSection = {
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
