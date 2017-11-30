import { executeLayer, ExecuteLayerParams, from } from '../../../../../src'

const originalExecuteLayer: (_: ExecuteLayerParams) => Promise<void> = executeLayer.default

const thisLayerOnly: (layer: number) => void =
	(layer: number): void => {
		spyOn(executeLayer, 'default').and.callFake((params: ExecuteLayerParams): void => {
			if (from.Layer(params.layer) !== layer) {
				return
			}
			originalExecuteLayer(params).then().catch()
		})
	}

export default thisLayerOnly
