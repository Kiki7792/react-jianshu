import { fromJS } from "immutable"
import { CHANGE_DETAIL } from './actionTypes'

const defaultState = fromJS({
  title: '',
  content: ''
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content
      })
  
    default:
      return state
  }
}

export default reducer