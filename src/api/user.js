import request from '@/utils/request'

// v1.0-登陆
export const apiLogin = (params) => {
  return request({
    url: '/v1/login',
    method: 'POST',
    data: params
  })
}

// v1.0-登出
export const apiLogout = () => {
  return request({
    url: '/v1/logout',
    method: 'GET'
  })
}

