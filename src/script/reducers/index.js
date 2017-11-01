import {routerReducer as routing} from "react-router-redux";
import {combineReducers} from 'redux'
import {list, categoryFilter} from "./list";
import {upload} from "./upload";
import counter from "./counter";

// const rootReducer = {
const rootReducer = combineReducers({
  routing,
  list,
  categoryFilter,
  upload,
  counter,
})

export default rootReducer
