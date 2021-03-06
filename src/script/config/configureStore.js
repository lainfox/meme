import { createStore, applyMiddleware, compose } from 'redux'
import {routerMiddleware} from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import createHistory from 'history/createBrowserHistory'
import rootReducer from '../reducers'

export const history = createHistory()

const initialState = {}
const enhancers = []
const loggerMiddleware = createLogger()
const middleware = [
  thunkMiddleware,
  // loggerMiddleware,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  middleware.push(loggerMiddleware);
}

// enhancers.push(
//   reactReduxFirebase(firebaseConfig, reduxFirebaseConfig)
// );

// if (process.env.NODE_ENV === 'development') {
//   const devToolsExtension = window.devToolsExtension

//   if (typeof devToolsExtension === 'function') {
//     enhancers.push(devToolsExtension())
//   }
// }


const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store;
