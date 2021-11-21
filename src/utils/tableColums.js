// 用户管理-表格列数组
export const USERS_COLUMN = [
  { key: 'id', label: 'ID' },
  { key: 'type', label: '用户类型' },
  { key: 'username', label: '用户名' },
  { key: 'real_name', label: '真名' },
  { key: 'GroupIdList', label: '所属用户组' },
  { key: 'created_at', label: '创建时间' },
  { key: 'updated_at', label: '更新时间' }
]

// 仓库管理-表格列数组
export const REPOSITORY_COLUMN = [
  { key: 'id', label: 'ID' },
  { key: 'nick_name', label: '仓库别名' },
  { key: 'repo_name', label: '仓库名称' }
]

// 用户组管理-表格列数组
export const USER_GROUP_COLUMN = [
  { key: 'id', label: 'ID' },
  { key: 'group_name', label: '用户组名称' },
  { key: 'privileges', label: '相关仓库' }
]

// 仓库路径管理-表格列数组
export const REPO_PATH_COLUMN = [
  { key: 'id', label: 'ID' },
  { key: 'nick_name', label: '路径别名' },
  { key: 'repo_id', label: '仓库ID' },
  { key: 'path', label: '路径' }
]
