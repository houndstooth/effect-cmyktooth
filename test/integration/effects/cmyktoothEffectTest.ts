import {
	Address,
	codeUtilities,
	Color,
	Coordinate,
	executeSelectedEffects,
	from,
	to,
	TRANSPARENT,
	Unit,
} from '../../../../../src/indexForTest'
import { sectionCenterIsColor, setAppStateForEffectTests } from '../../../../../test'
import { cmyktoothEffect } from '../../../effects'
import { SectionExpectation, sectionExpections, thisLayerOnly } from '../helpers'

describe('cmyktooth effect', () => {
	beforeEach(() => {
		setAppStateForEffectTests.setAvailableEffects({ cmyktooth: cmyktoothEffect })
		setAppStateForEffectTests.setSelectedEffects([ 'cmyktooth' ])
		setAppStateForEffectTests.setOverrides({
			basePattern: {
				gridSettings: { tileResolution: 4 },
			},
		})
	})

	it('the absolute center is always blank', async (done: DoneFn) => {
		thisLayerOnly(15)

		executeSelectedEffects.default()

		setTimeout(() => {
			const color: Color = TRANSPARENT
			const areaSize: Unit = to.Unit(800)
			const areaOrigin: Coordinate = to.Coordinate([ 0, 0 ])
			const sectionAddress: Address = to.Address([ 0, 0 ])
			const sectionResolution: number = 1
			const id: number = 0
			expect(sectionCenterIsColor({ areaOrigin, areaSize, sectionAddress, sectionResolution, color, id }))

			done()
		},         0)
	})

	it('layer 0 is totally blank', async (done: DoneFn) => {
		thisLayerOnly(0)

		executeSelectedEffects.default()

		setTimeout(() => {
			const checkMostPoints: Coordinate[] = codeUtilities.iterator(8).map((canvasX: number): Coordinate =>
				codeUtilities.iterator(8).map((canvasY: number): Coordinate =>
					to.Coordinate([ canvasX * 100, canvasY * 100 ])).reduce((a: Coordinate, b: Coordinate): Coordinate =>
					to.Coordinate(from.Coordinate(a).concat(from.Coordinate(b)))))

			const color: Color = TRANSPARENT
			const areaSize: Unit = to.Unit(100)
			const sectionAddress: Address = to.Address([ 0, 0 ])
			const sectionResolution: number = 1
			checkMostPoints.forEach((areaOrigin: Coordinate, id: number): void => {
				sectionCenterIsColor({ areaOrigin, areaSize, sectionAddress, sectionResolution, color, id })
			})

			done()
		},         0)
	})

	it('layer 1 is black, grain going to the right', async (done: DoneFn) => {
		thisLayerOnly(1)

		executeSelectedEffects.default()

		setTimeout(() => {
			const SEMI_BLACK: Color = { r: 0, g: 0, b: 0, a: 0.5 }
			const areaSize: Unit = to.Unit(800 / 4)

			sectionExpections.expectSolidSection({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 0, from.Unit(areaSize) * 0 ]),
				areaSize,
				baseId: 0,
				color: TRANSPARENT,
			})
			sectionExpections.expectSolidSection({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 1, from.Unit(areaSize) * 0 ]),
				areaSize,
				baseId: 2,
				color: TRANSPARENT,
			})
			sectionExpections.expectPrincipalDiagonalDividedSection({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 2, from.Unit(areaSize) * 0 ]),
				areaSize,
				baseId: 4,
				colors: [ SEMI_BLACK, TRANSPARENT ],
			})
			sectionExpections.expectSolidSection({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 3, from.Unit(areaSize) * 0 ]),
				areaSize,
				baseId: 6,
				color: SEMI_BLACK,
			})

			sectionExpections.expectMinorDiagonalDividedSection({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 0, from.Unit(areaSize) * 1 ]),
				areaSize,
				baseId: 8,
				colors: [ SEMI_BLACK, TRANSPARENT ],
			})
			sectionExpections.expectSolidSection({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 1, from.Unit(areaSize) * 1 ]),
				areaSize,
				baseId: 10,
				color: TRANSPARENT,
			})
			sectionExpections.expectSolidSection({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 2, from.Unit(areaSize) * 1 ]),
				areaSize,
				baseId: 12,
				color: TRANSPARENT,
			})
			sectionExpections.expectSolidSection({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 3, from.Unit(areaSize) * 1 ]),
				areaSize,
				baseId: 14,
				color: TRANSPARENT,
			})

			sectionExpections.expectPrincipalDiagonalDividedSection({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 0, from.Unit(areaSize) * 2 ]),
				areaSize,
				baseId: 16,
				colors: [ TRANSPARENT, SEMI_BLACK ],
			})
			sectionExpections.expectSolidSection({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 1, from.Unit(areaSize) * 2 ]),
				areaSize,
				baseId: 18,
				color: TRANSPARENT,
			})
			sectionExpections.expectSolidSection({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 2, from.Unit(areaSize) * 2 ]),
				areaSize,
				baseId: 20,
				color: TRANSPARENT,
			})
			sectionExpections.expectSolidSection({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 3, from.Unit(areaSize) * 2 ]),
				areaSize,
				baseId: 22,
				color: TRANSPARENT,
			})

			sectionExpections.expectSolidSection({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 0, from.Unit(areaSize) * 3 ]),
				areaSize,
				baseId: 24,
				color: TRANSPARENT,
			})
			sectionExpections.expectSolidSection({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 1, from.Unit(areaSize) * 3 ]),
				areaSize,
				baseId: 26,
				color: TRANSPARENT,
			})
			sectionExpections.expectMinorDiagonalDividedSection({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 2, from.Unit(areaSize) * 3 ]),
				areaSize,
				baseId: 28,
				colors: [ TRANSPARENT, SEMI_BLACK ],
			})
			sectionExpections.expectSolidSection({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 3, from.Unit(areaSize) * 3 ]),
				areaSize,
				baseId: 30,
				color: SEMI_BLACK,
			})

			done()
		},         0)
	})

	it('layer 2 is cyan, grain going to the right bottom', async (done: DoneFn) => {
		thisLayerOnly(2)

		executeSelectedEffects.default()

		setTimeout(() => {
			const SEMI_CYAN: Color = { r: 0, g: 255, b: 255, a: 0.3333 }
			const areaSize: Unit = to.Unit(800 / 4)

			sectionExpections.expectSolidSection({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 0, from.Unit(areaSize) * 0 ]),
				areaSize,
				baseId: 0,
				color: SEMI_CYAN,
			})
			sectionExpections.expectPrincipalDiagonalDividedSection({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 1, from.Unit(areaSize) * 0 ]),
				areaSize,
				baseId: 2,
				colors: [ TRANSPARENT, SEMI_CYAN ],
			})
			sectionExpections.expectPrincipalDiagonalDividedSection({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 2, from.Unit(areaSize) * 0 ]),
				areaSize,
				baseId: 4,
				colors: [ SEMI_CYAN, TRANSPARENT ],
			})
			sectionExpections.expectSolidSection({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 3, from.Unit(areaSize) * 0 ]),
				areaSize,
				baseId: 6,
				color: SEMI_CYAN,
			})

			sectionExpections.expectPrincipalDiagonalDividedSection({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 0, from.Unit(areaSize) * 1 ]),
				areaSize,
				baseId: 8,
				colors: [ SEMI_CYAN, TRANSPARENT ],
			})
			sectionExpections.expectSolidSection({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 1, from.Unit(areaSize) * 1 ]),
				areaSize,
				baseId: 10,
				color: TRANSPARENT,
			})
			sectionExpections.expectSolidSection({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 2, from.Unit(areaSize) * 1 ]),
				areaSize,
				baseId: 12,
				color: TRANSPARENT,
			})
			sectionExpections.expectPrincipalDiagonalDividedSection({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 3, from.Unit(areaSize) * 1 ]),
				areaSize,
				baseId: 14,
				colors: [ TRANSPARENT, SEMI_CYAN ],
			})

			sectionExpections.expectPrincipalDiagonalDividedSection({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 0, from.Unit(areaSize) * 2 ]),
				areaSize,
				baseId: 16,
				colors: [ TRANSPARENT, SEMI_CYAN ],
			})
			sectionExpections.expectSolidSection({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 1, from.Unit(areaSize) * 2 ]),
				areaSize,
				baseId: 18,
				color: TRANSPARENT,
			})
			sectionExpections.expectSolidSection({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 2, from.Unit(areaSize) * 2 ]),
				areaSize,
				baseId: 20,
				color: TRANSPARENT,
			})
			sectionExpections.expectPrincipalDiagonalDividedSection({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 3, from.Unit(areaSize) * 2 ]),
				areaSize,
				baseId: 22,
				colors: [ SEMI_CYAN, TRANSPARENT ],
			})

			sectionExpections.expectSolidSection({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 0, from.Unit(areaSize) * 3 ]),
				areaSize,
				baseId: 24,
				color: SEMI_CYAN,
			})
			sectionExpections.expectPrincipalDiagonalDividedSection({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 1, from.Unit(areaSize) * 3 ]),
				areaSize,
				baseId: 26,
				colors: [ SEMI_CYAN, TRANSPARENT ],
			})
			sectionExpections.expectPrincipalDiagonalDividedSection({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 2, from.Unit(areaSize) * 3 ]),
				areaSize,
				baseId: 28,
				colors: [ TRANSPARENT, SEMI_CYAN ],
			})
			sectionExpections.expectSolidSection({
				areaOrigin: to.Coordinate([ from.Unit(areaSize) * 3, from.Unit(areaSize) * 3 ]),
				areaSize,
				baseId: 30,
				color: SEMI_CYAN,
			})

			done()
		},         0)
	})

	it('layer 3 is magenta, grain going to the bottom', async (done: DoneFn) => {
		thisLayerOnly(3)

		executeSelectedEffects.default()

		setTimeout(() => {
			const SEMI_MAGENTA: Color = { r: 255, g: 0, b: 255, a: 0.25 }
			const areaSize: Unit = to.Unit(800 / 8)

			const expectedSectionRows: SectionExpectation[][] = [
				[
					[ 'solid', 'transparent' ],
					[ 'minor', 'transparent' ],
					[ 'principal', 'opaque' ],
					[ 'solid', 'opaque' ],
					[ 'solid', 'opaque' ],
					[ 'minor', 'opaque' ],
					[ 'principal', 'transparent' ],
					[ 'solid', 'transparent' ],
				],
				[
					[ 'solid', 'transparent' ],
					[ 'solid', 'opaque' ],
					[ 'solid', 'transparent' ],
					[ 'solidButTestPrincipalToAvoidSeam', 'opaque' ],
					[ 'solid', 'opaque' ],
					[ 'solid', 'transparent' ],
					[ 'solid', 'opaque' ],
					[ 'solid', 'transparent' ],
				],
				[
					[ 'principal', 'transparent' ],
					[ 'solid', 'opaque' ],
					[ 'solid', 'transparent' ],
					[ 'minor', 'opaque' ],
					[ 'principal', 'opaque' ],
					[ 'solid', 'transparent' ],
					[ 'solid', 'opaque' ],
					[ 'minor', 'transparent' ],
				],
				[
					[ 'solid', 'opaque' ],
					[ 'solidButTestPrincipalToAvoidSeam', 'opaque' ],
					[ 'solid', 'transparent' ],
					[ 'solid', 'transparent' ],
					[ 'solid', 'transparent' ],
					[ 'solid', 'transparent' ],
					[ 'solid', 'opaque' ],
					[ 'solid', 'opaque' ],
				],
				[
					[ 'solid', 'opaque' ],
					[ 'minor', 'opaque' ],
					[ 'principal', 'transparent' ],
					[ 'solid', 'transparent' ],
					[ 'solid', 'transparent' ],
					[ 'minor', 'transparent' ],
					[ 'principal', 'opaque' ],
					[ 'solid', 'opaque' ],
				],
				[
					[ 'solid', 'opaque' ],
					[ 'solid', 'transparent' ],
					[ 'solid', 'opaque' ],
					[ 'solid', 'transparent' ],
					[ 'solid', 'transparent' ],
					[ 'solid', 'opaque' ],
					[ 'solid', 'transparent' ],
					[ 'solidButTestPrincipalToAvoidSeam', 'opaque' ],
				],
				[
					[ 'principal', 'opaque' ],
					[ 'solid', 'transparent' ],
					[ 'solid', 'opaque' ],
					[ 'minor', 'transparent' ],
					[ 'principal', 'transparent' ],
					[ 'solid', 'opaque' ],
					[ 'solid', 'transparent' ],
					[ 'minor', 'opaque' ],
				],
				[
					[ 'solid', 'transparent' ],
					[ 'solid', 'transparent' ],
					[ 'solid', 'opaque' ],
					[ 'solid', 'opaque' ],
					[ 'solid', 'opaque' ],
					[ 'solidButTestPrincipalToAvoidSeam', 'opaque' ],
					[ 'solid', 'transparent' ],
					[ 'solid', 'transparent' ],
				],
			]

			expectedSectionRows.forEach((expectedSectionRow: SectionExpectation[], row: number): void => {
				expectedSectionRow.forEach((expectedSection: SectionExpectation, col: number): void => {
					sectionExpections.expectSection({
						areaOrigin: to.Coordinate([ from.Unit(areaSize) * col, from.Unit(areaSize) * row ]),
						areaSize,
						expectedSection,
						solidColor: SEMI_MAGENTA,
					})
				})
			})

			done()
		},         0)
	})

	it('layer 4 is yellow, grain going to the bottom left', async (done: DoneFn) => {
		thisLayerOnly(4)

		executeSelectedEffects.default()

		setTimeout(() => {
			const SEMI_YELLOW: Color = { r: 255, g: 255, b: 0, a: 0.2 }
			const areaSize: Unit = to.Unit(800 / 8)

			const expectedSectionRows: SectionExpectation[][] = [
				[
					[ 'solid', 'transparent' ],
					[ 'minor', 'transparent' ],
					[ 'minor', 'opaque' ],
					[ 'solid', 'transparent' ],
					[ 'solid', 'transparent' ],
					[ 'minor', 'transparent' ],
					[ 'minor', 'opaque' ],
					[ 'solid', 'transparent' ],
				],
				[
					[ 'minor', 'opaque' ],
					[ 'solid', 'opaque' ],
					[ 'solid', 'opaque' ],
					[ 'minor', 'transparent' ],
					[ 'minor', 'opaque' ],
					[ 'solid', 'opaque' ],
					[ 'solid', 'opaque' ],
					[ 'minor', 'transparent' ],
				],
				[
					[ 'minor', 'transparent' ],
					[ 'solid', 'opaque' ],
					[ 'solid', 'opaque' ],
					[ 'minor', 'opaque' ],
					[ 'minor', 'transparent' ],
					[ 'solid', 'opaque' ],
					[ 'solid', 'opaque' ],
					[ 'minor', 'opaque' ],
				],
				[
					[ 'solid', 'transparent' ],
					[ 'minor', 'opaque' ],
					[ 'minor', 'transparent' ],
					[ 'solid', 'transparent' ],
					[ 'solid', 'transparent' ],
					[ 'minor', 'opaque' ],
					[ 'minor', 'transparent' ],
					[ 'solid', 'transparent' ],
				],
			]
			const doubleRows: SectionExpectation[][] = expectedSectionRows.concat(expectedSectionRows)

			doubleRows.forEach((expectedSectionRow: SectionExpectation[], row: number): void => {
				expectedSectionRow.forEach((expectedSection: SectionExpectation, col: number): void => {
					sectionExpections.expectSection({
						areaOrigin: to.Coordinate([ from.Unit(areaSize) * col, from.Unit(areaSize) * row ]),
						areaSize,
						expectedSection,
						solidColor: SEMI_YELLOW,
					})
				})
			})

			done()
		},         0)
	})
})
