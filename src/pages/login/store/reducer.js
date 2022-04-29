import { fromJS } from "immutable"
import { CHANGE_LOGIN } from "./actionTypes"

const defaultState = fromJS({
  login: false,
})


const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LOGIN:
      return state.set('login', action.value)
      // return state.merge({
      //   login: action.value
      // })

    default:
      return state
  }
}

export default reducer