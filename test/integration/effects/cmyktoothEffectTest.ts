import { Address, Coordinate } from '../../../../../src'
import { TRANSPARENT } from '../../../../../src/constants'
import executeSelectedHoundstoothEffects from '../../../../../src/execute/executeSelectedHoundstoothEffects'
import state from '../../../../../src/state'
import { iterator } from '../../../../../src/utilities/codeUtilities'
import activateTestMarkerCanvas from '../../../../../test/integration/helpers/activateTestMarkerCanvas'
import sectionCenterIsColor from '../../../../../test/integration/helpers/sectionCenterIsColor'
import { thisLayerOnly } from '../../../../../test/integration/helpers/thisFrameOnly'
import { Diagonal } from '../../../../../test/integration/helpers/types'
import cmyktoothEffect from '../../../effects/cmyktoothEffect'
import * as sectionExpections from '../helpers/sectionExpections'
import { Fill, SectionExpectation } from '../helpers/types'

describe('cmyktooth effect', () => {
	it('the absolute center is always blank', () => {
		state.selectedHoundstoothEffects = [ cmyktoothEffect ]
		const houndstoothOverrides = { basePattern: { layerSettings: thisLayerOnly(32) } }

		activateTestMarkerCanvas()

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

		const color = TRANSPARENT
		const areaSize = 800 as any
		const areaOrigin = [ 0 as any, 0 as any ] as Coordinate
		const sectionAddress = [ 0, 0 ] as Address
		const sectionResolution = 1
		const id = 0
		expect(sectionCenterIsColor({ areaOrigin, areaSize, sectionAddress, sectionResolution, color, id }))
	})

	it('layer 0 is totally blank', () => {
		state.selectedHoundstoothEffects = [ cmyktoothEffect ]
		const houndstoothOverrides = { basePattern: { layerSettings: thisLayerOnly(0) } }
		activateTestMarkerCanvas()

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

		const basicallyCheckWholeCanvasPoints = iterator(8).map(canvasX =>
			iterator(8).map(canvasY =>
				[ canvasX * 100 as any, canvasY * 100 as any ] as Coordinate)).reduce((a, b) => a.concat(b))

		const color = TRANSPARENT
		const areaSize = 100 as any
		const sectionAddress = [ 0, 0 ] as Address
		const sectionResolution = 1
		basicallyCheckWholeCanvasPoints.forEach((areaOrigin, id) => {
			sectionCenterIsColor({ areaOrigin, areaSize, sectionAddress, sectionResolution, color, id })
		})
	})

	it('layer 1 is black, grain going to the right', () => {
		state.selectedHoundstoothEffects = [ cmyktoothEffect ]
		const houndstoothOverrides = { basePattern: { layerSettings: thisLayerOnly(1) } }
		activateTestMarkerCanvas()

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

		const SEMI_BLACK = { r: 0, g: 0, b: 0, a: 0.5 }
		const areaSize = 800 / 4 as any

		sectionExpections.expectSolidSection({
			areaOrigin: [ areaSize * 0 as any, areaSize * 0 as any ] as Coordinate,
			areaSize,
			baseId: 0,
			color: TRANSPARENT,
		})
		sectionExpections.expectSolidSection({
			areaOrigin: [ areaSize * 1 as any, areaSize * 0 as any ] as Coordinate,
			areaSize,
			baseId: 2,
			color: TRANSPARENT,
		})
		sectionExpections.expectPrincipalDiagonalDividedSection({
			areaOrigin: [ areaSize * 2 as any, areaSize * 0 as any ] as Coordinate,
			areaSize,
			baseId: 4,
			colors: [ SEMI_BLACK, TRANSPARENT ],
		})
		sectionExpections.expectSolidSection({
			areaOrigin: [ areaSize * 3 as any, areaSize * 0 as any ] as Coordinate,
			areaSize,
			baseId: 6,
			color: SEMI_BLACK,
		})

		sectionExpections.expectMinorDiagonalDividedSection({
			areaOrigin: [ areaSize * 0 as any, areaSize * 1 as any ] as Coordinate,
			areaSize,
			baseId: 8,
			colors: [ SEMI_BLACK, TRANSPARENT ],
		})
		sectionExpections.expectSolidSection({
			areaOrigin: [ areaSize * 1 as any, areaSize * 1 as any ] as Coordinate,
			areaSize,
			baseId: 10,
			color: TRANSPARENT,
		})
		sectionExpections.expectSolidSection({
			areaOrigin: [ areaSize * 2 as any, areaSize * 1 as any ] as Coordinate,
			areaSize,
			baseId: 12,
			color: TRANSPARENT,
		})
		sectionExpections.expectSolidSection({
			areaOrigin: [ areaSize * 3 as any, areaSize * 1 as any ] as Coordinate,
			areaSize,
			baseId: 14,
			color: TRANSPARENT,
		})

		sectionExpections.expectPrincipalDiagonalDividedSection({
			areaOrigin: [ areaSize * 0 as any, areaSize * 2 as any ] as Coordinate,
			areaSize,
			baseId: 16,
			colors: [ TRANSPARENT, SEMI_BLACK ],
		})
		sectionExpections.expectSolidSection({
			areaOrigin: [ areaSize * 1 as any, areaSize * 2 as any ] as Coordinate,
			areaSize,
			baseId: 18,
			color: TRANSPARENT,
		})
		sectionExpections.expectSolidSection({
			areaOrigin: [ areaSize * 2 as any, areaSize * 2 as any ] as Coordinate,
			areaSize,
			baseId: 20,
			color: TRANSPARENT,
		})
		sectionExpections.expectSolidSection({
			areaOrigin: [ areaSize * 3 as any, areaSize * 2 as any ] as Coordinate,
			areaSize,
			baseId: 22,
			color: TRANSPARENT,
		})

		sectionExpections.expectSolidSection({
			areaOrigin: [ areaSize * 0 as any, areaSize * 3 as any ] as Coordinate,
			areaSize,
			baseId: 24,
			color: TRANSPARENT,
		})
		sectionExpections.expectSolidSection({
			areaOrigin: [ areaSize * 1 as any, areaSize * 3 as any ] as Coordinate,
			areaSize,
			baseId: 26,
			color: TRANSPARENT,
		})
		sectionExpections.expectMinorDiagonalDividedSection({
			areaOrigin: [ areaSize * 2 as any, areaSize * 3 as any ] as Coordinate,
			areaSize,
			baseId: 28,
			colors: [ TRANSPARENT, SEMI_BLACK ],
		})
		sectionExpections.expectSolidSection({
			areaOrigin: [ areaSize * 3 as any, areaSize * 3 as any ] as Coordinate,
			areaSize,
			baseId: 30,
			color: SEMI_BLACK,
		})
	})

	it('layer 2 is cyan, grain going to the right bottom', () => {
		state.selectedHoundstoothEffects = [ cmyktoothEffect ]
		const houndstoothOverrides = { basePattern: { layerSettings: thisLayerOnly(2) } }
		activateTestMarkerCanvas()

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

		const SEMI_CYAN = { r: 0, g: 255, b: 255, a: 0.3333 }
		const areaSize = 800 / 4 as any

		sectionExpections.expectSolidSection({
			areaOrigin: [ areaSize * 0 as any, areaSize * 0 as any ] as Coordinate,
			areaSize,
			baseId: 0,
			color: SEMI_CYAN,
		})
		sectionExpections.expectPrincipalDiagonalDividedSection({
			areaOrigin: [ areaSize * 1 as any, areaSize * 0 as any ] as Coordinate,
			areaSize,
			baseId: 2,
			colors: [ TRANSPARENT, SEMI_CYAN ],
		})
		sectionExpections.expectPrincipalDiagonalDividedSection({
			areaOrigin: [ areaSize * 2 as any, areaSize * 0 as any ] as Coordinate,
			areaSize,
			baseId: 4,
			colors: [ SEMI_CYAN, TRANSPARENT ],
		})
		sectionExpections.expectSolidSection({
			areaOrigin: [ areaSize * 3 as any, areaSize * 0 as any ] as Coordinate,
			areaSize,
			baseId: 6,
			color: SEMI_CYAN,
		})

		sectionExpections.expectPrincipalDiagonalDividedSection({
			areaOrigin: [ areaSize * 0 as any, areaSize * 1 as any ] as Coordinate,
			areaSize,
			baseId: 8,
			colors: [ SEMI_CYAN, TRANSPARENT ],
		})
		sectionExpections.expectSolidSection({
			areaOrigin: [ areaSize * 1 as any, areaSize * 1 as any ] as Coordinate,
			areaSize,
			baseId: 10,
			color: TRANSPARENT,
		})
		sectionExpections.expectSolidSection({
			areaOrigin: [ areaSize * 2 as any, areaSize * 1 as any ] as Coordinate,
			areaSize,
			baseId: 12,
			color: TRANSPARENT,
		})
		sectionExpections.expectPrincipalDiagonalDividedSection({
			areaOrigin: [ areaSize * 3 as any, areaSize * 1 as any ] as Coordinate,
			areaSize,
			baseId: 14,
			colors: [ TRANSPARENT, SEMI_CYAN ],
		})

		sectionExpections.expectPrincipalDiagonalDividedSection({
			areaOrigin: [ areaSize * 0 as any, areaSize * 2 as any ] as Coordinate,
			areaSize,
			baseId: 16,
			colors: [ TRANSPARENT, SEMI_CYAN ],
		})
		sectionExpections.expectSolidSection({
			areaOrigin: [ areaSize * 1 as any, areaSize * 2 as any ] as Coordinate,
			areaSize,
			baseId: 18,
			color: TRANSPARENT,
		})
		sectionExpections.expectSolidSection({
			areaOrigin: [ areaSize * 2 as any, areaSize * 2 as any ] as Coordinate,
			areaSize,
			baseId: 20,
			color: TRANSPARENT,
		})
		sectionExpections.expectPrincipalDiagonalDividedSection({
			areaOrigin: [ areaSize * 3 as any, areaSize * 2 as any ] as Coordinate,
			areaSize,
			baseId: 22,
			colors: [ SEMI_CYAN, TRANSPARENT ],
		})

		sectionExpections.expectSolidSection({
			areaOrigin: [ areaSize * 0 as any, areaSize * 3 as any ] as Coordinate,
			areaSize,
			baseId: 24,
			color: SEMI_CYAN,
		})
		sectionExpections.expectPrincipalDiagonalDividedSection({
			areaOrigin: [ areaSize * 1 as any, areaSize * 3 as any ] as Coordinate,
			areaSize,
			baseId: 26,
			colors: [ SEMI_CYAN, TRANSPARENT ],
		})
		sectionExpections.expectPrincipalDiagonalDividedSection({
			areaOrigin: [ areaSize * 2 as any, areaSize * 3 as any ] as Coordinate,
			areaSize,
			baseId: 28,
			colors: [ TRANSPARENT, SEMI_CYAN ],
		})
		sectionExpections.expectSolidSection({
			areaOrigin: [ areaSize * 3 as any, areaSize * 3 as any ] as Coordinate,
			areaSize,
			baseId: 30,
			color: SEMI_CYAN,
		})
	})

	it('layer 3 is magenta, grain going to the bottom', () => {
		state.selectedHoundstoothEffects = [ cmyktoothEffect ]
		const houndstoothOverrides = { basePattern: { layerSettings: thisLayerOnly(3) } }
		activateTestMarkerCanvas()

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

		const SEMI_MAGENTA = { r: 255, g: 0, b: 255, a: 0.25 }
		const areaSize = 800 / 8 as any

		const expectedSectionRows: SectionExpectation[][] = [
			[
				[ Diagonal.Solid, Fill.Transparent ],
				[ Diagonal.Minor, Fill.Transparent ],
				[ Diagonal.Principal, Fill.Opaque ],
				[ Diagonal.Solid, Fill.Opaque ],
				[ Diagonal.Solid, Fill.Opaque ],
				[ Diagonal.Minor, Fill.Opaque ],
				[ Diagonal.Principal, Fill.Transparent ],
				[ Diagonal.Solid, Fill.Transparent ],
			],
			[
				[ Diagonal.Solid, Fill.Transparent ],
				[ Diagonal.Solid, Fill.Opaque ],
				[ Diagonal.Solid, Fill.Transparent ],
				[ Diagonal.SolidButTestPrincipalToAvoidSeam, Fill.Opaque ],
				[ Diagonal.Solid, Fill.Opaque ],
				[ Diagonal.Solid, Fill.Transparent ],
				[ Diagonal.Solid, Fill.Opaque ],
				[ Diagonal.Solid, Fill.Transparent ],
			],
			[
				[ Diagonal.Principal, Fill.Transparent ],
				[ Diagonal.Solid, Fill.Opaque ],
				[ Diagonal.Solid, Fill.Transparent ],
				[ Diagonal.Minor, Fill.Opaque ],
				[ Diagonal.Principal, Fill.Opaque ],
				[ Diagonal.Solid, Fill.Transparent ],
				[ Diagonal.Solid, Fill.Opaque ],
				[ Diagonal.Minor, Fill.Transparent ],
			],
			[
				[ Diagonal.Solid, Fill.Opaque ],
				[ Diagonal.SolidButTestPrincipalToAvoidSeam, Fill.Opaque ],
				[ Diagonal.Solid, Fill.Transparent ],
				[ Diagonal.Solid, Fill.Transparent ],
				[ Diagonal.Solid, Fill.Transparent ],
				[ Diagonal.Solid, Fill.Transparent ],
				[ Diagonal.Solid, Fill.Opaque ],
				[ Diagonal.Solid, Fill.Opaque ],
			],
			[
				[ Diagonal.Solid, Fill.Opaque ],
				[ Diagonal.Minor, Fill.Opaque ],
				[ Diagonal.Principal, Fill.Transparent ],
				[ Diagonal.Solid, Fill.Transparent ],
				[ Diagonal.Solid, Fill.Transparent ],
				[ Diagonal.Minor, Fill.Transparent ],
				[ Diagonal.Principal, Fill.Opaque ],
				[ Diagonal.Solid, Fill.Opaque ],
			],
			[
				[ Diagonal.Solid, Fill.Opaque ],
				[ Diagonal.Solid, Fill.Transparent ],
				[ Diagonal.Solid, Fill.Opaque ],
				[ Diagonal.Solid, Fill.Transparent ],
				[ Diagonal.Solid, Fill.Transparent ],
				[ Diagonal.Solid, Fill.Opaque ],
				[ Diagonal.Solid, Fill.Transparent ],
				[ Diagonal.SolidButTestPrincipalToAvoidSeam, Fill.Opaque ],
			],
			[
				[ Diagonal.Principal, Fill.Opaque ],
				[ Diagonal.Solid, Fill.Transparent ],
				[ Diagonal.Solid, Fill.Opaque ],
				[ Diagonal.Minor, Fill.Transparent ],
				[ Diagonal.Principal, Fill.Transparent ],
				[ Diagonal.Solid, Fill.Opaque ],
				[ Diagonal.Solid, Fill.Transparent ],
				[ Diagonal.Minor, Fill.Opaque ],
			],
			[
				[ Diagonal.Solid, Fill.Transparent ],
				[ Diagonal.Solid, Fill.Transparent ],
				[ Diagonal.Solid, Fill.Opaque ],
				[ Diagonal.Solid, Fill.Opaque ],
				[ Diagonal.Solid, Fill.Opaque ],
				[ Diagonal.SolidButTestPrincipalToAvoidSeam, Fill.Opaque ],
				[ Diagonal.Solid, Fill.Transparent ],
				[ Diagonal.Solid, Fill.Transparent ],
			],
		]

		expectedSectionRows.forEach((expectedSectionRow, row) => {
			expectedSectionRow.forEach((expectedSection, col) => {
				sectionExpections.expectSection({
					areaOrigin: [ areaSize * col as any, areaSize * row as any ] as Coordinate,
					areaSize,
					expectedSection,
					solidColor: SEMI_MAGENTA,
				})
			})
		})
	})

	it('layer 4 is yellow, grain going to the bottom left', () => {
		state.selectedHoundstoothEffects = [ cmyktoothEffect ]
		const houndstoothOverrides = { basePattern: { layerSettings: thisLayerOnly(4) } }
		activateTestMarkerCanvas()

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

		const SEMI_YELLOW = { r: 255, g: 255, b: 0, a: 0.2 }
		const areaSize = 800 / 8  as any

		const expectedSectionRows: SectionExpectation[][] = [
			[
				[ Diagonal.Solid, Fill.Transparent ],
				[ Diagonal.Minor, Fill.Transparent ],
				[ Diagonal.Minor, Fill.Opaque ],
				[ Diagonal.Solid, Fill.Transparent ],
				[ Diagonal.Solid, Fill.Transparent ],
				[ Diagonal.Minor, Fill.Transparent ],
				[ Diagonal.Minor, Fill.Opaque ],
				[ Diagonal.Solid, Fill.Transparent ],
			],
			[
				[ Diagonal.Minor, Fill.Opaque ],
				[ Diagonal.Solid, Fill.Opaque ],
				[ Diagonal.Solid, Fill.Opaque ],
				[ Diagonal.Minor, Fill.Transparent ],
				[ Diagonal.Minor, Fill.Opaque ],
				[ Diagonal.Solid, Fill.Opaque ],
				[ Diagonal.Solid, Fill.Opaque ],
				[ Diagonal.Minor, Fill.Transparent ],
			],
			[
				[ Diagonal.Minor, Fill.Transparent ],
				[ Diagonal.Solid, Fill.Opaque ],
				[ Diagonal.Solid, Fill.Opaque ],
				[ Diagonal.Minor, Fill.Opaque ],
				[ Diagonal.Minor, Fill.Transparent ],
				[ Diagonal.Solid, Fill.Opaque ],
				[ Diagonal.Solid, Fill.Opaque ],
				[ Diagonal.Minor, Fill.Opaque ],
			],
			[
				[ Diagonal.Solid, Fill.Transparent ],
				[ Diagonal.Minor, Fill.Opaque ],
				[ Diagonal.Minor, Fill.Transparent ],
				[ Diagonal.Solid, Fill.Transparent ],
				[ Diagonal.Solid, Fill.Transparent ],
				[ Diagonal.Minor, Fill.Opaque ],
				[ Diagonal.Minor, Fill.Transparent ],
				[ Diagonal.Solid, Fill.Transparent ],
			],
		]

		expectedSectionRows.concat(expectedSectionRows).forEach((expectedSectionRow, row) => {
			expectedSectionRow.forEach((expectedSection, col) => {
				sectionExpections.expectSection({
					areaOrigin: [ areaSize * col as any, areaSize * row as any ] as Coordinate,
					areaSize,
					expectedSection,
					solidColor: SEMI_YELLOW,
				})
			})
		})
	})
})
