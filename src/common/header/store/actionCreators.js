import axios from 'axios'
import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})

export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
})

export const changePage = (page) => ({
  type: actionTypes.CHNAGE_PAGE,
  page
})

export const getHotList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then(res => {
      const { success, data } = res.data
      if (success) dispatch(changeList(data))
    }).catch(err => {
      console.log('err--', err)
    })
  }
}