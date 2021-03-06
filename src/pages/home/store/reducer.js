import { fromJS } from 'immutable'
import {
  INIT_HOME_DATA,
  ADD_ARTICLE_LIST,
  TOGGLE_SCROLL_TOP
} from './actionTypes'
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [],
  articlePage: 1,
  showScroll: false
})

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList),
    writerList: fromJS(action.writerList),
  })
}

const addArticleList = (state, action) => {
  return state.merge({
    articleList: state.get('articleList').concat(action.list),
    articlePage: action.nextPage
  })
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case INIT_HOME_DATA:
      return changeHomeData(state, action)

    case ADD_ARTICLE_LIST:
      return addArticleList(state, action)
      // return state.set(
      //   'articleList',
      //   state.get('articleList').concat(action.list)
      // )

    case TOGGLE_SCROLL_TOP:
      return state.set('showScroll',action.show)

    default:
      return state
  }
}

export default reducer