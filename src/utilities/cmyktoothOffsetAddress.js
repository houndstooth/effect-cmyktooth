import constants from '../cmyktoothConstants'

const ADDRESS_OFFSET_Y = constants.CMYKTOOTH_GRID_SIZE % 2 === 0 ? (constants.CMYKTOOTH_GRID_SIZE / 2) % 2 : ((constants.CMYKTOOTH_GRID_SIZE + 1) / 2) % 2
const ADDRESS_OFFSET_X = ADDRESS_OFFSET_Y === 1 ? 0 : 1

export default () => [ ADDRESS_OFFSET_X, ADDRESS_OFFSET_Y ]
