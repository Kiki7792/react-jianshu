import axios from 'axios'
import { CHANGE_LOGIN,  } from './actionTypes'

const changeLogin = () => ({
  type: CHANGE_LOGIN,
  value: true
})

export const handleLogin = (account, password) => {
  return dispatch => {
    axios.get(`/api/login.json?account=${account}&password=${password}`).then(res => {
      const { success, data } = res.data
      if (success && data) {
        dispatch(changeLogin())
      }
    }).catch(err => {
      console.log('login--', err)
    })
  }
}

export const handleLogout = () => ({
  type: CHANGE_LOGIN,
  value: false
})