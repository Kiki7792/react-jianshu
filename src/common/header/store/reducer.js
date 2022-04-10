import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 0
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused', true)

    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false)

    case actionTypes.CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
      
      // 等价于
      // return (
      //   state
      //     .set('list', action.data)
      //     .set('totalPage', action.totalPage)
      // )

    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true)

    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false)

    case actionTypes.CHNAGE_PAGE:
      return state.set('page', action.page)
  
    default:
      return state
  }
}

export default reducer
