import { Diagonal } from '../../../../../test/integration/helpers/types'
import { Coordinate } from '../../../../../src/space'
import { Color } from '../../../../../src/render'

enum Fill {
	Transparent = 'transparent',
	Opaque = 'opaque',
}

type SectionExpectation = [ Diagonal, Fill ]

type ExpectSection = {
	({}: {
		expectedSection: [ Diagonal, Fill ],
		areaSize: number,
		areaOrigin: Coordinate,
		solidColor: Color,
	}): void,
}

export {
	Fill,
	SectionExpectation,
	ExpectSection,
}
