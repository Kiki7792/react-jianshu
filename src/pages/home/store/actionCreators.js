import axios from 'axios'
import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const changeHomeData = (data) => ({
  type: actionTypes.INIT_HOME_DATA,
  topicList: data.topicList,
  articleList: data.articleList,
  recommendList: data.recommendList,
  writerList: data.writerList
})

const addHomeList = (data, nextPage) => ({
  type: actionTypes.ADD_ARTICLE_LIST,
  list: fromJS(data),
  nextPage
})

export const getHomeInfo = () => {
  return dispatch => {
    axios.get('/api/home.json').then(res => {
      const { success, data } = res.data
      if (success) {
        const action = changeHomeData(data)
        dispatch(action)
      }
    }).catch(err => {
      console.log('err--', err)
    })
  }
}

export const getMoreList = (page) => {
  return dispatch => {
    axios.get(`/api/homeList.json?page=${page}`).then(res => {
      const { success, data } = res.data
      if (success) {
        dispatch(addHomeList(data, page + 1 ))
      }
    }).catch(err => {
      console.log('err--', err)
    })
  }
}