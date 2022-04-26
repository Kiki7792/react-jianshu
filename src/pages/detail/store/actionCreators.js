import axios from "axios"
import { CHANGE_DETAIL } from './actionTypes'

const changeDetail = ({ title, content }) => ({
  type: CHANGE_DETAIL,
  title,
  content
})

export const getDetail = (id) => {
  return dispatch => {
    axios.get(`/api/detail.json?id=${id}`).then(res => {
      const { success, data } = res.data
      if (success) dispatch(changeDetail(data))
    }).catch(err => {
      console.log('err--', err)
    })
  }
}