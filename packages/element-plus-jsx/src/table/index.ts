import { useWithInstall } from '../../src/hooks'
import Tablex from './table.vue'

Tablex.prefix = 'El'
Tablex.name = 'Tablex'
const ElTablex = useWithInstall(Tablex)

export { ElTablex }
export default ElTablex
export type ElTablexInstance = InstanceType<typeof ElTablex>
export type * from './types'
