import { apiLogin, apiGetUserInfo, apiLogout } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'
import { apiSubmitLogin } from '@/api/rap2'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: '',
    role: '' // 用户类型，1-管理 2-普通用户
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLE: (state, role) => {
    const roleType = role === 1
      ? 'admin' : 'user'
    state.role = roleType
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password, otpCode } = userInfo
    return new Promise((resolve, reject) => {
      apiLogin({ username: username.trim(), password: password, otp_code: otpCode })
        .then(response => {
          const { data } = response
          commit('SET_TOKEN', data)
          setToken(data)
          resolve()
        }).catch(error => {
          reject(error)
        })
    })
  },

  // for rap2-login purpose
  rap2Login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      apiSubmitLogin({ username: username.trim(), password: password }).then(response => {
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      apiGetUserInfo(state.token).then(response => {
        const { data } = response

        if (!data) {
          // reject('Verification failed, please Login again.')
        }

        const { username, type } = data

        commit('SET_NAME', username)
        commit('SET_ROLE', type)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      apiLogout().then(() => {
        removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
