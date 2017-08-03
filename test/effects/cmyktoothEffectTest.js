import cmyktoothEffect from '../../effects/cmyktoothEffect'
import tileSectorCenterIsColor from '../../../../test/integration/helpers/tileSectorCenterIsColor'
import execute from '../../../../src/application/execute'
import composeMainHoundstooth from '../../../../src/store/composeMainHoundstooth'
import activateTestMarkerCanvas from '../../../../test/integration/helpers/activateTestMarkerCanvas'
import { TRANSPARENT } from '../../../../src/constants'
import codeUtilities from '../../../../src/utilities/codeUtilities'
import thisFrameOnly from '../../../../test/integration/helpers/thisFrameOnly'

describe('cmyktooth effect test', () => {
	let thisIterationFrameOnly
	beforeEach(() => thisIterationFrameOnly = thisFrameOnly.thisIterationFrameOnly)

	it('the absolute center is always blank', () => {
		composeMainHoundstooth({
			houndstoothEffects: [ cmyktoothEffect ],
			houndstoothOverrides: { basePattern: { iterationSettings: thisIterationFrameOnly(32) } },
		})
		activateTestMarkerCanvas()

		execute()

		const color = TRANSPARENT
		const tileSizeInPixels = 800
		const originInPixels = [ 0, 0 ]
		const x = 0
		const y = 0
		const n = 1
		const id = 0
		expect(tileSectorCenterIsColor({ originInPixels, tileSizeInPixels, x, y, n, color, id }))
	})

	it('iteration 0 is totally blank', () => {
		composeMainHoundstooth({
			houndstoothEffects: [ cmyktoothEffect ],
			houndstoothOverrides: { basePattern: { iterationSettings: thisIterationFrameOnly(0) } },
		})
		activateTestMarkerCanvas()

		execute()

		const basicallyCheckWholeCanvasPoints = codeUtilities.iterator(8).map(x => {
			return codeUtilities.iterator(8).map(y => {
				return [ x * 100, y * 100 ]
			})
		}).reduce((a, b) => a.concat(b))

		const color = TRANSPARENT
		const tileSizeInPixels = 100
		const x = 0
		const y = 0
		const n = 1
		basicallyCheckWholeCanvasPoints.forEach((originInPixels, id) => {
			tileSectorCenterIsColor({ originInPixels, tileSizeInPixels, x, y, n, color, id })
		})
	})

	it('iteration 1 is black, grain going to the right', () => {
		composeMainHoundstooth({
			houndstoothEffects: [ cmyktoothEffect ],
			houndstoothOverrides: { basePattern: { iterationSettings: thisIterationFrameOnly(1) } },
		})
		activateTestMarkerCanvas()

		execute()

		const SEMI_BLACK = { r: 0, g: 0, b: 0, a: 0.5 }
		const tileSizeInPixels = 800 / 4

		solid({ address: [ 0, 0 ], tileSizeInPixels, color: TRANSPARENT, baseId: 0 })
		solid({ address: [ 1, 0 ], tileSizeInPixels, color: TRANSPARENT, baseId: 2 })
		principal({ address: [ 2, 0 ], tileSizeInPixels, colors: [ SEMI_BLACK, TRANSPARENT ], baseId: 4 })
		solid({ address: [ 3, 0 ], tileSizeInPixels, color: SEMI_BLACK, baseId: 6 })

		minor({ address: [ 0, 1 ], tileSizeInPixels, colors: [ SEMI_BLACK, TRANSPARENT ], baseId: 8 })
		solid({ address: [ 1, 1 ], tileSizeInPixels, color: TRANSPARENT, baseId: 10 })
		solid({ address: [ 2, 1 ], tileSizeInPixels, color: TRANSPARENT, baseId: 12 })
		solid({ address: [ 3, 1 ], tileSizeInPixels, color: TRANSPARENT, baseId: 14 })

		principal({ address: [ 0, 2 ], tileSizeInPixels, colors: [ TRANSPARENT, SEMI_BLACK ], baseId: 16 })
		solid({ address: [ 1, 2 ], tileSizeInPixels, color: TRANSPARENT, baseId: 18 })
		solid({ address: [ 2, 2 ], tileSizeInPixels, color: TRANSPARENT, baseId: 20 })
		solid({ address: [ 3, 2 ], tileSizeInPixels, color: TRANSPARENT, baseId: 22 })

		solid({ address: [ 0, 3 ], tileSizeInPixels, color: TRANSPARENT, baseId: 24 })
		solid({ address: [ 1, 3 ], tileSizeInPixels, color: TRANSPARENT, baseId: 26 })
		minor({ address: [ 2, 3 ], tileSizeInPixels, colors: [ TRANSPARENT, SEMI_BLACK ], baseId: 28 })
		solid({ address: [ 3, 3 ], tileSizeInPixels, color: SEMI_BLACK, baseId: 30 })
	})

	it('iteration 2 is cyan, grain going to the right bottom', () => {
		composeMainHoundstooth({
			houndstoothEffects: [ cmyktoothEffect ],
			houndstoothOverrides: { basePattern: { iterationSettings: thisIterationFrameOnly(2) } },
		})
		activateTestMarkerCanvas()

		execute()

		const SEMI_CYAN = { r: 0, g: 255, b: 255, a: 0.3333 }
		const tileSizeInPixels = 800 / 4

		solid({ address: [ 0, 0 ], tileSizeInPixels, color: SEMI_CYAN, baseId: 0 })
		principal({ address: [ 1, 0 ], tileSizeInPixels, colors: [ TRANSPARENT, SEMI_CYAN ], baseId: 2 })
		principal({ address: [ 2, 0 ], tileSizeInPixels, colors: [ SEMI_CYAN, TRANSPARENT ], baseId: 4 })
		solid({ address: [ 3, 0 ], tileSizeInPixels, color: SEMI_CYAN, baseId: 6 })

		principal({ address: [ 0, 1 ], tileSizeInPixels, colors: [ SEMI_CYAN, TRANSPARENT ], baseId: 8 })
		solid({ address: [ 1, 1 ], tileSizeInPixels, color: TRANSPARENT, baseId: 10 })
		solid({ address: [ 2, 1 ], tileSizeInPixels, color: TRANSPARENT, baseId: 12 })
		principal({ address: [ 3, 1 ], tileSizeInPixels, colors: [ TRANSPARENT, SEMI_CYAN ], baseId: 14 })

		principal({ address: [ 0, 2 ], tileSizeInPixels, colors: [ TRANSPARENT, SEMI_CYAN ], baseId: 16 })
		solid({ address: [ 1, 2 ], tileSizeInPixels, color: TRANSPARENT, baseId: 18 })
		solid({ address: [ 2, 2 ], tileSizeInPixels, color: TRANSPARENT, baseId: 20 })
		principal({ address: [ 3, 2 ], tileSizeInPixels, colors: [ SEMI_CYAN, TRANSPARENT ], baseId: 22 })

		solid({ address: [ 0, 3 ], tileSizeInPixels, color: SEMI_CYAN, baseId: 24 })
		principal({ address: [ 1, 3 ], tileSizeInPixels, colors: [ SEMI_CYAN, TRANSPARENT ], baseId: 26 })
		principal({ address: [ 2, 3 ], tileSizeInPixels, colors: [ TRANSPARENT, SEMI_CYAN ], baseId: 28 })
		solid({ address: [ 3, 3 ], tileSizeInPixels, color: SEMI_CYAN, baseId: 30 })
	})

	it('iteration 3 is magenta, grain going to the bottom', () => {
		composeMainHoundstooth({
			houndstoothEffects: [ cmyktoothEffect ],
			houndstoothOverrides: { basePattern: { iterationSettings: thisIterationFrameOnly(3) } },
		})
		activateTestMarkerCanvas()

		execute()

		const SEMI_MAGENTA = { r: 255, g: 0, b: 255, a: 0.25 }
		const tileSizeInPixels = 800 / 8

		const expectedSectorRows = [
			[
				[ 'solid', 'trans' ],
				[ 'minor', 'trans' ],
				[ 'princ', 'color' ],
				[ 'solid', 'color' ],
				[ 'solid', 'color' ],
				[ 'minor', 'color' ],
				[ 'princ', 'trans' ],
				[ 'solid', 'trans' ],
			],
			[
				[ 'solid', 'trans' ],
				[ 'solid', 'color' ],
				[ 'solid', 'trans' ],
				[ 'sldls', 'color' ],
				[ 'solid', 'color' ],
				[ 'solid', 'trans' ],
				[ 'solid', 'color' ],
				[ 'solid', 'trans' ],
			],
			[
				[ 'princ', 'trans' ],
				[ 'solid', 'color' ],
				[ 'solid', 'trans' ],
				[ 'minor', 'color' ],
				[ 'princ', 'color' ],
				[ 'solid', 'trans' ],
				[ 'solid', 'color' ],
				[ 'minor', 'trans' ],
			],
			[
				[ 'solid', 'color' ],
				[ 'sldls', 'color' ],
				[ 'solid', 'trans' ],
				[ 'solid', 'trans' ],
				[ 'solid', 'trans' ],
				[ 'solid', 'trans' ],
				[ 'solid', 'color' ],
				[ 'solid', 'color' ],
			],
			[
				[ 'solid', 'color' ],
				[ 'minor', 'color' ],
				[ 'princ', 'trans' ],
				[ 'solid', 'trans' ],
				[ 'solid', 'trans' ],
				[ 'minor', 'trans' ],
				[ 'princ', 'color' ],
				[ 'solid', 'color' ],
			],
			[
				[ 'solid', 'color' ],
				[ 'solid', 'trans' ],
				[ 'solid', 'color' ],
				[ 'solid', 'trans' ],
				[ 'solid', 'trans' ],
				[ 'solid', 'color' ],
				[ 'solid', 'trans' ],
				[ 'sldls', 'color' ],
			],
			[
				[ 'princ', 'color' ],
				[ 'solid', 'trans' ],
				[ 'solid', 'color' ],
				[ 'minor', 'trans' ],
				[ 'princ', 'trans' ],
				[ 'solid', 'color' ],
				[ 'solid', 'trans' ],
				[ 'minor', 'color' ],
			],
			[
				[ 'solid', 'trans' ],
				[ 'solid', 'trans' ],
				[ 'solid', 'color' ],
				[ 'solid', 'color' ],
				[ 'solid', 'color' ],
				[ 'sldls', 'color' ],
				[ 'solid', 'trans' ],
				[ 'solid', 'trans' ],
			],
		]

		expectedSectorRows.forEach((expectedSectorRow, row) => {
			expectedSectorRow.forEach((expectedSector, col) => {
				expectSector({ expectedSector, address: [ col, row ], tileSizeInPixels, solidColor: SEMI_MAGENTA })
			})
		})
	})

	it('iteration 4 is yellow, grain going to the bottom left', () => {
		composeMainHoundstooth({
			houndstoothEffects: [ cmyktoothEffect ],
			houndstoothOverrides: { basePattern: { iterationSettings: thisIterationFrameOnly(4) } },
		})
		activateTestMarkerCanvas()

		execute()

		const SEMI_YELLOW = { r: 255, g: 255, b: 0, a: 0.2 }
		const tileSizeInPixels = 800 / 8

		const expectedSectorRows = [
			[
				[ 'solid', 'trans' ],
				[ 'minor', 'trans' ],
				[ 'minor', 'color' ],
				[ 'solid', 'trans' ],
				[ 'solid', 'trans' ],
				[ 'minor', 'trans' ],
				[ 'minor', 'color' ],
				[ 'solid', 'trans' ],
			],
			[
				[ 'minor', 'color' ],
				[ 'solid', 'color' ],
				[ 'solid', 'color' ],
				[ 'minor', 'trans' ],
				[ 'minor', 'color' ],
				[ 'solid', 'color' ],
				[ 'solid', 'color' ],
				[ 'minor', 'trans' ],
			],
			[
				[ 'minor', 'trans' ],
				[ 'solid', 'color' ],
				[ 'solid', 'color' ],
				[ 'minor', 'color' ],
				[ 'minor', 'trans' ],
				[ 'solid', 'color' ],
				[ 'solid', 'color' ],
				[ 'minor', 'color' ],
			],
			[
				[ 'solid', 'trans' ],
				[ 'minor', 'color' ],
				[ 'minor', 'trans' ],
				[ 'solid', 'trans' ],
				[ 'solid', 'trans' ],
				[ 'minor', 'color' ],
				[ 'minor', 'trans' ],
				[ 'solid', 'trans' ],
			],
		]

		expectedSectorRows.concat(expectedSectorRows).forEach((expectedSectorRow, row) => {
			expectedSectorRow.forEach((expectedSector, col) => {
				expectSector({ expectedSector, address: [ col, row ], tileSizeInPixels, solidColor: SEMI_YELLOW })
			})
		})
	})
})

const principal = ({ address, tileSizeInPixels, colors, baseId }) => {
	const originInPixels = [ address[ 0 ] * tileSizeInPixels, address[ 1 ] * tileSizeInPixels ]
	expect(tileSectorCenterIsColor({
		originInPixels,
		tileSizeInPixels,
		n: 2,
		x: 1,
		y: 0,
		color: colors[ 0 ],
		id: baseId,
	}))
	expect(tileSectorCenterIsColor({
		originInPixels,
		tileSizeInPixels,
		n: 2,
		x: 0,
		y: 1,
		color: colors[ 1 ],
		id: baseId + 1,
	}))
}

const minor = ({ address, tileSizeInPixels, colors, baseId }) => {
	const originInPixels = [ address[ 0 ] * tileSizeInPixels, address[ 1 ] * tileSizeInPixels ]
	expect(tileSectorCenterIsColor({
		originInPixels,
		tileSizeInPixels,
		n: 2,
		x: 0,
		y: 0,
		color: colors[ 0 ],
		id: baseId,
	}))
	expect(tileSectorCenterIsColor({
		originInPixels,
		tileSizeInPixels,
		n: 2,
		x: 1,
		y: 1,
		color: colors[ 1 ],
		id: baseId + 1,
	}))
}

const solid = ({ address, tileSizeInPixels, color, baseId }) => {
	const originInPixels = [ address[ 0 ] * tileSizeInPixels, address[ 1 ] * tileSizeInPixels ]
	expect(tileSectorCenterIsColor({ originInPixels, tileSizeInPixels, n: 1, x: 0, y: 0, color, id: baseId }))
}

const expectSector = ({ expectedSector, address, tileSizeInPixels, solidColor }) => {
	let method, color, colors
	if (expectedSector[ 0 ] === 'solid') {
		if (expectedSector[ 1 ] === 'trans') color = TRANSPARENT
		if (expectedSector[ 1 ] === 'color') color = solidColor

		solid({ address, tileSizeInPixels, color })
	}
	else if (expectedSector[ 0 ] === 'sldls') {
		principal({ address, tileSizeInPixels, colors: [ solidColor, solidColor ] })
	}
	else {
		if (expectedSector[ 0 ] === 'minor') method = minor
		if (expectedSector[ 0 ] === 'princ') method = principal

		if (expectedSector[ 1 ] === 'trans') colors = [ TRANSPARENT, solidColor ]
		if (expectedSector[ 1 ] === 'color') colors = [ solidColor, TRANSPARENT ]

		method({ address, tileSizeInPixels, colors })
	}
}
