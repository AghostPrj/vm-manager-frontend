import Vue from 'vue'
import Pagination from '@/components/pagination/Pagination'
import Table from '@/components/table/Table'
import NoData from '@/components/no-data/NoData'
import DialogBox from '@/components/dialog-box/DialogBox'
// 下拉选项
import Select from '@/components/select/Select'
const COMPONENT_PREFIX = 'Bm'
/**
 * 注册自定义组件到全局
 */
export function registerBMComponents() {
  Vue.component(COMPONENT_PREFIX + Pagination.name, Pagination)
  Vue.component(COMPONENT_PREFIX + Table.name, Table)
  Vue.component(COMPONENT_PREFIX + NoData.name, NoData)
  Vue.component(COMPONENT_PREFIX + DialogBox.name, DialogBox)
  Vue.component(COMPONENT_PREFIX + Select.name, Select)
}
