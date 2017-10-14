import { TRANSPARENT } from '../../../../../src/constants'
import sectionCenterIsColor from '../../../../../test/integration/helpers/sectionCenterIsColor'
import { ExpectSection, Fill } from './types'
import {
	Diagonal,
	ExpectDiagonalDividedSection,
	ExpectSolidSection,
} from '../../../../../test/integration/helpers/types'
import Address from '../../../../../src/components/types/Address'

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
		sectionResolution: 1,
		sectionAddress: [ 0, 0 ] as Address,
		color,
		id: baseId,
	})).toBe(true)
}

const expectMinorDiagonalDividedSection: ExpectDiagonalDividedSection = ({ areaSize, areaOrigin, colors, baseId }) => {
	expect(sectionCenterIsColor({
		areaOrigin,
		areaSize,
		sectionResolution: 2,
		sectionAddress: [ 0, 0 ] as Address,
		color: colors[ 0 ],
		id: baseId,
	})).toBe(true)
	expect(sectionCenterIsColor({
		areaOrigin,
		areaSize,
		sectionResolution: 2,
		sectionAddress: [ 1, 1 ] as Address,
		color: colors[ 1 ],
		id: baseId + 1,
	})).toBe(true)
}

const expectPrincipalDiagonalDividedSection: ExpectDiagonalDividedSection = params => {
	const { areaSize, areaOrigin, colors, baseId } = params
	expect(sectionCenterIsColor({
		areaOrigin,
		areaSize,
		sectionResolution: 2,
		sectionAddress: [ 1, 0 ] as Address,
		color: colors[ 0 ],
		id: baseId,
	})).toBe(true)
	expect(sectionCenterIsColor({
		areaOrigin,
		areaSize,
		sectionResolution: 2,
		sectionAddress: [ 0, 1 ] as Address,
		color: colors[ 1 ],
		id: baseId + 1,
	})).toBe(true)
}

export {
	expectSection,
	expectMinorDiagonalDividedSection,
	expectPrincipalDiagonalDividedSection,
	expectSolidSection,
}
