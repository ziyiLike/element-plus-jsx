import { useWithInstall } from '../../src/hooks'
import Providerx from './providerx.vue'

Providerx.prefix = 'El'
Providerx.name = 'Providerx'
const ElProviderx = useWithInstall(Providerx)

export { ElProviderx }
export default ElProviderx
export type ElProviderxInstance = InstanceType<typeof Providerx>
