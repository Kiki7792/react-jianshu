import { createStore,compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

// https://juejin.cn/post/6844903734502227981
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
  // 使用 redux-tools
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store