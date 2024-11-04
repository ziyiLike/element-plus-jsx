import { useWithInstall } from '../../src/hooks'
import Formx from './form.vue'

Formx.prefix = 'El'
Formx.name = 'Formx'
const ElFormx = useWithInstall(Formx)

export { ElFormx }
export default ElFormx
export type ElFormxInstance = InstanceType<typeof ElFormx>
export type * from './types'
