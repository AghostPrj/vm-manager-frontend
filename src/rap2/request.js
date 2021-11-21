/**
 * jsonp连接rap2平台访问接口数据，模仿axios
 */

import jsonp from 'jsonp'
import config from '@/rap2/config'

/**
 * jsonp模仿axios连接rap2接口平台
 * @param params
 *
 * @returns {AxiosPromise}
 */
export const service = ({ url, method = 'get', data }) => {
  const requestUrl = `${config.jsonp.baseUrl}${method}${url}`
  const settings = {
    method: method,
    headers: {
      Authorization: config.jsonp.authorization
    },
    param: data
  }
  return new Promise((resolve, reject) => {
    jsonp(requestUrl, settings, function(err, resData) {
      if (err) { reject(err) } else { resolve(resData) }
    })
  })
}

export default service
