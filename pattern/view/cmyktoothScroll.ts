// tslint:disable:max-line-length

import { CANVAS_SIZE, from, HALF, mathUtilities, Pixel, Px, to } from '../../../../src'
import { cmyktoothTileSize } from '../tile'

import cmyktoothTilt from './cmyktoothTilt'

const cmyktoothScroll: () => Px[] =
	(): Px[] => {
		const tileSizeValue: number = from.Unit(cmyktoothTileSize.default())
		const whereTileCenterWasBeforeItWasTilted: Pixel = to.Pixel([ tileSizeValue * HALF, tileSizeValue * HALF ])

		const whereTileCenterWasAfterItWasTilted: Pixel = to.Pixel(mathUtilities.rotate({
			fixedPoint: [ 0, 0 ],
			point: from.Pixel(whereTileCenterWasBeforeItWasTilted),
			rotation: cmyktoothTilt(),
		}))
		const scrollToScrollTileCenterBackToOrigin: Px[] = [
			to.Px(from.Px(whereTileCenterWasAfterItWasTilted[ 0 ]) * -1),
			to.Px(from.Px(whereTileCenterWasAfterItWasTilted[ 1 ]) * -1),
		]

		const oneDimensionOfScrollToScrollTileCenterFromCanvasOriginToCanvasCenter: Px = to.Px(from.Px(CANVAS_SIZE) * HALF)

		return [
			to.Px(from.Px(scrollToScrollTileCenterBackToOrigin[ 0 ]) + from.Px(oneDimensionOfScrollToScrollTileCenterFromCanvasOriginToCanvasCenter)),
			to.Px(from.Px(scrollToScrollTileCenterBackToOrigin[ 1 ]) + from.Px(oneDimensionOfScrollToScrollTileCenterFromCanvasOriginToCanvasCenter)),
		]
	}

export default cmyktoothScroll
