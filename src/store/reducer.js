const defaultState = {
  focused: false
}

const reducer = (state = defaultState, action) => {
  if (action.type === 'search_focus') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.focused = true
    return newState
  }
  if (action.type === 'search_blur') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.focused = false
    return newState
  }
  return state
}

export default reducer