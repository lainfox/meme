import { createStore, applyMiddleware, compose } from 'redux'
import {routerMiddleware} from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import { createLogger } from 'redux-logger'
import createHistory from 'history/createBrowserHistory'
import rootReducer from '../reducers'

export const history = createHistory()

const firebaseConfig = {
  apiKey: "AIzaSyDrhcb_qtVxEC65vgg1s6eSlINrVQ8-wiE",
  authDomain: "meme-653c0.firebaseapp.com",
  databaseURL: "https://meme-653c0.firebaseio.com",
  storageBucket: "meme-653c0.appspot.com",
  projectId: "meme-653c0",
  messagingSenderId: "713785192499"
}
const reduxFirebaseConfig = { userProfile: 'users', enableLogging: false }

const initialState = {}
const enhancers = []
const loggerMiddleware = createLogger()
const middleware = [
  thunkMiddleware.withExtraArgument(getFirebase), // Pass getFirebase function as extra argument,
  loggerMiddleware,
  routerMiddleware(history)
]

enhancers.push(
  reactReduxFirebase(firebaseConfig, reduxFirebaseConfig)
);

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}


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
