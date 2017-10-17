import cmyktoothViewRotationAboutCanvasCenter from '../../../../src/view/cmyktoothViewRotationAboutCanvasCenter'

describe('cmyktooth view rotation about canvas center', () => {
	it('rotates the view an eight of the way round each layer', () => {
		expect(cmyktoothViewRotationAboutCanvasCenter(0 as any)).toBe(Math.PI / 4 as any)
		expect(cmyktoothViewRotationAboutCanvasCenter(Math.PI / 4 as any)).toBe(Math.PI / 2 as any)
	})
})
