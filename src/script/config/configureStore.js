import { createStore, applyMiddleware, compose } from 'redux'
import {routerMiddleware} from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import {reactReduxFirebase} from 'react-redux-firebase'
// import {createLogger} from 'redux-logger'
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
const reduxFirebaseConfig = { userProfile: 'users' }

const initialState = {}
const enhancers = []
// const loggerMiddleware = createLogger()
const middleware = [
  thunkMiddleware,
  // loggerMiddleware,
  routerMiddleware(history)
]

// Add redux Firebase to compose
const createStoreWithFirebase = compose(
  applyMiddleware(...middleware),
  reactReduxFirebase(firebaseConfig, reduxFirebaseConfig),
  ...enhancers
)(createStore)

const store = createStoreWithFirebase(
  rootReducer,
  initialState
)

export default store;
