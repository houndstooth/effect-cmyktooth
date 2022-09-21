import { wrapper } from '../../../../../src/app/execute/layer/executeLayer'
import { ExecuteLayerParams, from } from '../../../../../src/indexForTest'

const originalExecuteLayer: (_: ExecuteLayerParams) => Promise<void> = wrapper.executeLayer

const thisLayerOnly: (layer: number) => void =
	(layer: number): void => {
		// @ts-ignore
		spyOn(wrapper, 'executeLayer').and.callFake((executeLayerParams: ExecuteLayerParams): void => {
			if (from.Layer(executeLayerParams.layer) !== layer) {
				return
			}
			originalExecuteLayer(executeLayerParams).then().catch()
		})
	}

export default thisLayerOnly
