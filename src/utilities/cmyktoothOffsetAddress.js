import { GRID_SIZE } from '../constants'

const ADDRESS_OFFSET_Y = GRID_SIZE % 2 === 0 ? (GRID_SIZE / 2) % 2 : ((GRID_SIZE + 1) / 2) % 2
const ADDRESS_OFFSET_X = ADDRESS_OFFSET_Y === 1 ? 0 : 1

export default () => [ ADDRESS_OFFSET_X, ADDRESS_OFFSET_Y ]
