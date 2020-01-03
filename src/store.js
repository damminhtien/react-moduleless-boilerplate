import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

const enhancers = []
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension =
    (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(thunkMiddleware),
  ...enhancers
)

export default createStore(rootReducer, {}, composedEnhancers)
