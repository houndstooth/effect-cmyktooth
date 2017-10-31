import { Coordinate } from '../../../../../src'
import { Address, Unit } from '../../../../../src/components/types'
import { TRANSPARENT } from '../../../../../src/constants'
import { executeSelectedHoundstoothEffects } from '../../../../../src/execute/executeSelectedHoundstoothEffects'
import { Color } from '../../../../../src/render'
import { state } from '../../../../../src/state'
import { Effect } from '../../../../../src/store/types'
import { iterator } from '../../../../../src/utilities/codeUtilities'
import * as from from '../../../../../src/utilities/from'
import * as to from '../../../../../src/utilities/to'
import { activateTestMarkerCanvas } from '../../../../../test/integration/helpers/activateTestMarkerCanvas'
import { sectionCenterIsColor } from '../../../../../test/integration/helpers/sectionCenterIsColor'
import { thisLayerOnly } from '../../../../../test/integration/helpers/thisFrameOnly'
import { cmyktoothEffect } from '../../../effects/cmyktoothEffect'
import * as sectionExpections from '../helpers/sectionExpections'
import { SectionExpectation } from '../helpers/types'

describe('cmyktooth effect', () => {
	it('the absolute center is always blank', () => {
		state.selectedHoundstoothEffects = [ cmyktoothEffect ]
		const houndstoothOverrides: Effect = { basePattern: { layerSettings: thisLayerOnly(to.Layer(16)) } }

		activateTestMarkerCanvas()

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

		const color: Color = TRANSPARENT
		const areaSize: Unit = to.Unit(800)
		const areaOrigin: Coordinate = to.Coordinate([ 0, 0 ])
		const sectionAddress: Address = to.Address([ 0, 0 ])
		const sectionResolution: number = 1
		const id: number = 0
		expect(sectionCenterIsColor({ areaOrigin, areaSize, sectionAddress, sectionResolution, color, id }))
	})

	it('layer 0 is totally blank', () => {
		state.selectedHoundstoothEffects = [ cmyktoothEffect ]
		const houndstoothOverrides: Effect = { basePattern: { layerSettings: thisLayerOnly(to.Layer(0)) } }
		activateTestMarkerCanvas()

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

		const basicallyCheckWholeCanvasPoints: Coordinate[] = iterator(8).map((canvasX: number): Coordinate =>
			iterator(8).map((canvasY: number): Coordinate =>
				to.Coordinate([ canvasX * 100, canvasY * 100 ])).reduce((a: Coordinate, b: Coordinate): Coordinate =>
				to.Coordinate(from.Coordinate(a).concat(from.Coordinate(b)))))

		const color: Color = TRANSPARENT
		const areaSize: Unit = to.Unit(100)
		const sectionAddress: Address = to.Address([ 0, 0 ])
		const sectionResolution: number = 1
		basicallyCheckWholeCanvasPoints.forEach((areaOrigin: Coordinate, id: number): void => {
			sectionCenterIsColor({ areaOrigin, areaSize, sectionAddress, sectionResolution, color, id })
		})
	})

	it('layer 1 is black, grain going to the right', () => {
		state.selectedHoundstoothEffects = [ cmyktoothEffect ]
		const houndstoothOverrides: Effect = { basePattern: { layerSettings: thisLayerOnly(to.Layer(1)) } }
		activateTestMarkerCanvas()

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

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
	})

	it('layer 2 is cyan, grain going to the right bottom', () => {
		state.selectedHoundstoothEffects = [ cmyktoothEffect ]
		const houndstoothOverrides: Effect = { basePattern: { layerSettings: thisLayerOnly(to.Layer(2)) } }
		activateTestMarkerCanvas()

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

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
	})

	it('layer 3 is magenta, grain going to the bottom', () => {
		state.selectedHoundstoothEffects = [ cmyktoothEffect ]
		const houndstoothOverrides: Effect = { basePattern: { layerSettings: thisLayerOnly(to.Layer(3)) } }
		activateTestMarkerCanvas()

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

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
	})

	it('layer 4 is yellow, grain going to the bottom left', () => {
		state.selectedHoundstoothEffects = [ cmyktoothEffect ]
		const houndstoothOverrides: Effect = { basePattern: { layerSettings: thisLayerOnly(to.Layer(4)) } }
		activateTestMarkerCanvas()

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

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
	})
})
