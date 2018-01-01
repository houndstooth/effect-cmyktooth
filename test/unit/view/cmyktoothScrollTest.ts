import { Px, to } from '../../../../../src/indexForTest'
import { pixelsAreClose, setAppStateForEffectTests } from '../../../../../test'
import { cmyktoothScroll } from '../../../pattern'

describe('cmyktooth scroll', () => {
	it('moves the pattern to be centered on the centermost transparent tile', () => {
		const subject: () => Px[] = cmyktoothScroll.default

		setAppStateForEffectTests.setCurrentLayer(to.Layer(0))
		expect(pixelsAreClose(
			[ to.Pixel(
				subject(),
			) ],
			[ to.Pixel(
				[ -400 + 400, -400 + 400 ],
			) ],
		)).toBe(true)

		setAppStateForEffectTests.setCurrentLayer(to.Layer(1))
		expect(pixelsAreClose(
			[ to.Pixel(
				subject(),
			) ],
			[ to.Pixel(
				// [ 400, 0 ],
				[ 0 + 400, -400 + 400 ],
			) ],
		)).toBe(true)

		setAppStateForEffectTests.setCurrentLayer(to.Layer(2))
		expect(pixelsAreClose(
			[ to.Pixel(
				subject(),
			) ],
			[ to.Pixel(
				[ 200 + 400, -200 + 400 ],
			) ],
		)).toBe(true)

		setAppStateForEffectTests.setCurrentLayer(to.Layer(3))
		expect(pixelsAreClose(
			[ to.Pixel(
				subject(),
			) ],
			[ to.Pixel(
				[ 200 + 400, 0 + 400 ],
			) ],
		)).toBe(true)
	})
})
