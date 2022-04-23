import { fromJS } from 'immutable'
import { INIT_HOME_DATA } from './actionTypes'
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: []
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case INIT_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList),
      })

    default:
      return state
  }
}

export default reducer