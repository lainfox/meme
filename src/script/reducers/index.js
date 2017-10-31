import {routerReducer as routing} from "react-router-redux";
import {combineReducers} from 'redux'
import {list, categoryFilter} from "./list";
import counter from "./counter";

// const rootReducer = {
const rootReducer = combineReducers({
  routing,
  list,
  categoryFilter,
  counter,
})

export default rootReducer
