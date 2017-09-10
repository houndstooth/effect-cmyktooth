import cmyktoothViewRotationAboutCanvasCenter from '../../../src/outlines/cmyktoothViewRotationAboutCanvasCenter'

describe('cmyktooth view rotation about canvas center', () => {
	it('rotates the view an eight of the way round each layer', () => {
		expect(cmyktoothViewRotationAboutCanvasCenter(0)).toBe(Math.PI / 4)
		expect(cmyktoothViewRotationAboutCanvasCenter(Math.PI / 4)).toBe(Math.PI / 2)
	})
})
