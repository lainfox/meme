import {routerReducer as routing} from "react-router-redux";
import {combineReducers} from 'redux'
// import {firebaseStateReducer as firebase} from 'react-redux-firebase'
import {list, categoryFilter} from "./list";
import {upload} from "./upload";
import {imgur} from "./imgur";
import counter from "./counter";

// const rootReducer = {
const rootReducer = combineReducers({
  routing,
  // firebase,
  list,
  categoryFilter,
  upload,
  imgur,
  counter,
})

export default rootReducer
