import store from '../../../../store'

export default () => 1 / (store.currentState.iterationFrame + 2)
