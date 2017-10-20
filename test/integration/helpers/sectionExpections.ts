import { TRANSPARENT } from '../../../../../src/constants'
import * as to from '../../../../../src/to'
import { sectionCenterIsColor } from '../../../../../test/integration/helpers/sectionCenterIsColor'
import {
	Diagonal,
	ExpectDiagonalDividedSection,
	ExpectSolidSection,
} from '../../../../../test/integration/helpers/types'
import { ExpectSection, Fill } from './types'

const expectSection: ExpectSection = ({ expectedSection, areaSize, solidColor, areaOrigin }) => {
	let method
	let color
	let colors
	const diagonalType = expectedSection[ 0 ]
	const sectionDefiningColor = expectedSection[ 1 ]

	if (diagonalType === Diagonal.Solid) {
		if (sectionDefiningColor === Fill.Transparent) {
			color = TRANSPARENT
		}
		if (sectionDefiningColor === Fill.Opaque) {
			color = solidColor
		}

		expectSolidSection({ areaSize, areaOrigin, color })
	}
	else if (diagonalType === Diagonal.SolidButTestPrincipalToAvoidSeam) {
		expectPrincipalDiagonalDividedSection({ areaSize, areaOrigin, colors: [ solidColor, solidColor ] })
	}
	else {
		if (diagonalType === Diagonal.Minor) {
			method = expectMinorDiagonalDividedSection
		}
		if (diagonalType === Diagonal.Principal) {
			method = expectPrincipalDiagonalDividedSection
		}

		if (sectionDefiningColor === Fill.Transparent) {
			colors = [ TRANSPARENT, solidColor ]
		}
		if (sectionDefiningColor === Fill.Opaque) {
			colors = [ solidColor, TRANSPARENT ]
		}

		method({ areaSize, areaOrigin, colors })
	}
}

const expectSolidSection: ExpectSolidSection = ({ areaSize, areaOrigin, color, baseId }) => {
	expect(sectionCenterIsColor({
		areaOrigin,
		areaSize,
		color,
		id: baseId,
		sectionAddress: to.Address([ 0, 0 ]),
		sectionResolution: 1,
	})).toBe(true)
}

const expectMinorDiagonalDividedSection: ExpectDiagonalDividedSection = params => {
	const { areaSize, areaOrigin, colors, baseId = 0 } = params
	expect(sectionCenterIsColor({
		areaOrigin,
		areaSize,
		color: colors[ 0 ],
		id: baseId,
		sectionAddress: to.Address([ 0, 0 ]),
		sectionResolution: 2,
	})).toBe(true)
	expect(sectionCenterIsColor({
		areaOrigin,
		areaSize,
		color: colors[ 1 ],
		id: baseId + 1,
		sectionAddress: to.Address([ 1, 1 ]),
		sectionResolution: 2,
	})).toBe(true)
}

const expectPrincipalDiagonalDividedSection: ExpectDiagonalDividedSection = params => {
	const { areaSize, areaOrigin, colors, baseId = 0 } = params
	expect(sectionCenterIsColor({
		areaOrigin,
		areaSize,
		color: colors[ 0 ],
		id: baseId,
		sectionAddress: to.Address([ 1, 0 ]),
		sectionResolution: 2,
	})).toBe(true)
	expect(sectionCenterIsColor({
		areaOrigin,
		areaSize,
		color: colors[ 1 ],
		id: baseId + 1,
		sectionAddress: to.Address([ 0, 1 ]),
		sectionResolution: 2,
	})).toBe(true)
}

export {
	expectSection,
	expectMinorDiagonalDividedSection,
	expectPrincipalDiagonalDividedSection,
	expectSolidSection,
}
