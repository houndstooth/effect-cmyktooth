import cmyktoothEffect from '../../effects/cmyktoothEffect'
import pixelIsColorWithMarker from '../../../../test/integration/helpers/pixelIsColorWithMarker'
import tileSectorCenterIsColor from '../../../../test/integration/helpers/tileSectorCenterIsColor'
import execute from '../../../../src/application/execute'
import composeMainHoundstooth from '../../../../src/store/composeMainHoundstooth'
import activateTestMarkerCanvas from '../../../../test/integration/helpers/activateTestMarkerCanvas'
import { TRANSPARENT } from '../../../../src/constants'
import codeUtilities from '../../../../src/utilities/codeUtilities'

const thisIterationFrameOnly = frame => ({
    basePattern: {
        iterationSettings: {
            startIterationFrame: frame,
            endIterationFrame: frame
        },
    },
})

describe('cmyktooth effect test', () => {
    it('the absolute center is always blank', () => {
        composeMainHoundstooth({ houndstoothEffects: [ cmyktoothEffect ] })
        activateTestMarkerCanvas()

        execute({ iterating: true })

        const color = TRANSPARENT
        const tileSizeInPixels = 800
        const originInPixels = [ 0, 0 ]
        const x = 0
        const y = 0
        const n = 1
        expect(tileSectorCenterIsColor({ originInPixels, tileSizeInPixels, x, y, n, color, id }))
    })

    it('iteration 0 is totally blank', () => {
        composeMainHoundstooth({
            houndstoothEffects: [ cmyktoothEffect ],
            houndstoothOverrides: thisIterationFrameOnly(0)
        })
        activateTestMarkerCanvas()

        execute({ iterating: true })

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

    it('iteration 1', () => {
        composeMainHoundstooth({
            houndstoothEffects: [ cmyktoothEffect ],
            houndstoothOverrides: thisIterationFrameOnly(1)
        })
        activateTestMarkerCanvas()

        execute({ iterating: true })

        const SEMI_BLACK = { r: 0, g: 0, b: 0, a: 0.5 }
        const tileSizeInPixels = 800 / 4

        solid({ address: [ 0, 0 ], tileSizeInPixels, color: TRANSPARENT, baseId: 0 })
        solid({ address: [ 1, 0 ], tileSizeInPixels, color: TRANSPARENT, baseId: 2 })
        principal({ address: [ 2, 0 ], tileSizeInPixels, colors: [ SEMI_BLACK, TRANSPARENT], baseId: 4 })
        solid({ address: [ 3, 0 ], tileSizeInPixels, color: SEMI_BLACK, baseId: 6 })

        minor({ address: [ 0, 1 ], tileSizeInPixels, colors: [SEMI_BLACK, TRANSPARENT], baseId: 8 })
        solid({ address: [ 1, 1 ], tileSizeInPixels, color: TRANSPARENT, baseId: 10 })
        solid({ address: [ 2, 1 ], tileSizeInPixels, color: TRANSPARENT, baseId: 12 })
        solid({ address: [ 3, 1 ], tileSizeInPixels, color: TRANSPARENT, baseId: 14 })

        principal({ address: [ 0, 2 ], tileSizeInPixels, colors: [TRANSPARENT, SEMI_BLACK], baseId: 16 })
        solid({ address: [ 1, 2 ], tileSizeInPixels, color: TRANSPARENT, baseId: 18 })
        solid({ address: [ 2, 2 ], tileSizeInPixels, color: TRANSPARENT, baseId: 20 })
        solid({ address: [ 3, 2 ], tileSizeInPixels, color: TRANSPARENT, baseId: 22 })

        solid({ address: [ 0, 3 ], tileSizeInPixels, color: TRANSPARENT, baseId: 24 })
        solid({ address: [ 1, 3 ], tileSizeInPixels, color: TRANSPARENT, baseId: 26 })
        minor({ address: [ 2, 3 ], tileSizeInPixels, colors: [TRANSPARENT, SEMI_BLACK], baseId: 28 })
        solid({ address: [ 3, 3 ], tileSizeInPixels, color: SEMI_BLACK, baseId: 30 })
    })

    fit('iteration 2', () => {
        composeMainHoundstooth({
            houndstoothEffects: [ cmyktoothEffect ],
            houndstoothOverrides: thisIterationFrameOnly(2)
        })
        activateTestMarkerCanvas()

        execute({ iterating: true })

        const SEMI_CYAN = { r: 0, g: 255, b: 255, a: 0.3333 }
        const tileSizeInPixels = 800 / 4

        solid({ address: [ 0, 0 ], tileSizeInPixels, color: SEMI_CYAN, baseId: 0 })
        minor({ address: [ 1, 0 ], tileSizeInPixels, colorOne: })
    })
})

const principal = ({ address, tileSizeInPixels, colors, baseId }) => {
    const originInPixels = [ address[0] * tileSizeInPixels, address[1] * tileSizeInPixels ]
    expect(tileSectorCenterIsColor({ originInPixels, tileSizeInPixels, n: 2, x: 1, y: 0, color: colors[0], id: baseId }))
    expect(tileSectorCenterIsColor({ originInPixels, tileSizeInPixels, n: 2, x: 0, y: 1, color: colors[1], id: baseId + 1}))
}

const minor = ({ address, tileSizeInPixels, colors, baseId }) => {
    const originInPixels = [ address[0] * tileSizeInPixels, address[1] * tileSizeInPixels ]
    expect(tileSectorCenterIsColor({ originInPixels, tileSizeInPixels, n: 2, x: 0, y: 0, color: colors[0], id: baseId }))
    expect(tileSectorCenterIsColor({ originInPixels, tileSizeInPixels, n: 2, x: 1, y: 1, color: colors[1], id: baseId + 1}))
}

const solid = ({ address, tileSizeInPixels, color, baseId }) => {
    const originInPixels = [ address[0] * tileSizeInPixels, address[1] * tileSizeInPixels ]
    expect(tileSectorCenterIsColor({ originInPixels, tileSizeInPixels, n: 1, x: 0, y: 0, color, id: baseId }))
}