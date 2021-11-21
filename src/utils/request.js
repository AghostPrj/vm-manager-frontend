import axios from 'axios'
// import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      // please modify it according to the actual situation
      config.headers['x-aghost-auth-code'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data

    return res
  },
  error => {
    if (error.response) {
      const res = error.response
      console.log('res', res)

      if (res.data.code === 1008) {
        window.location.href = store.getters.baseUrl + res.data.message
      }
    }
  }
)

export default service
