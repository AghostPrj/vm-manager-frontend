// import store from '@/store'
import enums from './enums'

const getStatus = (value, enumKey) => {
  const options = Object.values(enums[enumKey])
  const option = options.find(i => i.value === value)
  return option ? option.label : '--'
}

export const roleTypeFilters = (status) => {
  return getStatus(status, 'ROLE_TYPES')
}
