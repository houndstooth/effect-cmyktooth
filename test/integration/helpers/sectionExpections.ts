import { Color, constants, to } from '../../../../../src'
import {
	Diagonal,
	ExpectDiagonalDividedSection,
	ExpectedDividedSection,
	ExpectedSolidSection,
	ExpectSolidSection,
	sectionCenterIsColor,
} from '../../../../../test'
import { ExpectSection, ExpectSectionParams, Fill } from './types'

const { TRANSPARENT } = constants

const expectSection: ExpectSection =
	({ expectedSection, areaSize, solidColor, areaOrigin }: ExpectSectionParams): void => {
		let method: ExpectSolidSection | ExpectDiagonalDividedSection
		let color: Color
		let colors: [ Color, Color ]
		const diagonalType: Diagonal = expectedSection[ 0 ]
		const sectionDefiningColor: Fill = expectedSection[ 1 ]

		if (diagonalType === 'solid') {
			if (sectionDefiningColor === 'transparent') {
				color = TRANSPARENT
			}
			else if (sectionDefiningColor === 'opaque') {
				color = solidColor
			}
			else {
				return
			}

			expectSolidSection({ areaSize, areaOrigin, color })
		}
		else if (diagonalType === 'solidButTestPrincipalToAvoidSeam') {
			expectPrincipalDiagonalDividedSection({ areaSize, areaOrigin, colors: [ solidColor, solidColor ] })
		}
		else {
			if (diagonalType === 'minor') {
				method = expectMinorDiagonalDividedSection
			}
			else if (diagonalType === 'principal') {
				method = expectPrincipalDiagonalDividedSection
			}
			else {
				return
			}

			if (sectionDefiningColor === 'transparent') {
				colors = [ TRANSPARENT, solidColor ]
			}
			if (sectionDefiningColor === 'opaque') {
				colors = [ solidColor, TRANSPARENT ]
			}
			else {
				return
			}

			if (method) {
				method({ areaSize, areaOrigin, colors })
			}
		}
	}

const expectSolidSection: ExpectSolidSection =
	({ areaSize, areaOrigin, color, baseId }: ExpectedSolidSection): void => {
		expect(sectionCenterIsColor({
			areaOrigin,
			areaSize,
			color,
			id: baseId,
			sectionAddress: to.Address([ 0, 0 ]),
			sectionResolution: 1,
		})).toBe(true)
	}

const expectMinorDiagonalDividedSection: ExpectDiagonalDividedSection =
	({ areaSize, areaOrigin, colors, baseId = 0 }: ExpectedDividedSection): void => {
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

const expectPrincipalDiagonalDividedSection: ExpectDiagonalDividedSection =
	({ areaSize, areaOrigin, colors, baseId = 0 }: ExpectedDividedSection): void => {
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
