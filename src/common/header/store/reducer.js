import * as actionTypes from './actionTypes'

const defaultState = {
  focused: false
}

const reducer = (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.focused = true
    return newState
  }
  if (action.type === actionTypes.SEARCH_FOCUS) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.focused = false
    return newState
  }
  return state
}

export default reducer
