import { appState, constants, Radian, to } from '../../../../../src/indexForTest'
import { cmyktoothViewRotationAboutCanvasCenter } from '../../../pattern'

const subject: () => Radian = cmyktoothViewRotationAboutCanvasCenter.default

xdescribe('cmyktooth view rotation about canvas center', () => {
	const { EIGHTH_OF_CIRCLE_ROTATION, QUARTER_CIRCLE_ROTATION, NO_ROTATION } = constants

	it('rotates the view an eight of the way round each layer', () => {
		appState.execute.currentLayer = to.Layer(0)
		expect(subject()).toBe(NO_ROTATION)
		appState.execute.currentLayer = to.Layer(1)
		expect(subject()).toBe(EIGHTH_OF_CIRCLE_ROTATION)
		appState.execute.currentLayer = to.Layer(2)
		expect(subject()).toBe(QUARTER_CIRCLE_ROTATION)
	})
})
