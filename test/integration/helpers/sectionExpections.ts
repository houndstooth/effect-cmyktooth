import { TRANSPARENT } from '../../../../../src/constants'
import { Color } from '../../../../../src/render'
import * as to from '../../../../../src/utilities/to'
import { sectionCenterIsColor } from '../../../../../test/integration/helpers/sectionCenterIsColor'
import { ExpectDiagonalDividedSection, ExpectSolidSection } from '../../../../../test/integration/helpers/types'
import { ExpectSection } from './types'

const expectSection: ExpectSection = ({ expectedSection, areaSize, solidColor, areaOrigin }) => {
	let method
	let color
	let colors: [ Color, Color ]
	const diagonalType = expectedSection[ 0 ]
	const sectionDefiningColor = expectedSection[ 1 ]

	if (diagonalType === 'solid') {
		if (sectionDefiningColor === 'transparent') {
			color = TRANSPARENT
		}
		if (sectionDefiningColor === 'opaque') {
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
		if (diagonalType === 'principal') {
			method = expectPrincipalDiagonalDividedSection
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
