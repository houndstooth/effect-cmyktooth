import { executeLayer, ExecuteLayerParams, from } from '../../../../../src/indexForTest'

const originalExecuteLayer: (_: ExecuteLayerParams) => Promise<void> = executeLayer.default

const thisLayerOnly: (layer: number) => void =
	(layer: number): void => {
		spyOn(executeLayer, 'default').and.callFake((executeLayerParams: ExecuteLayerParams): void => {
			if (from.Layer(executeLayerParams.layer) !== layer) {
				return
			}
			originalExecuteLayer(executeLayerParams).then().catch()
		})
	}

export default thisLayerOnly
