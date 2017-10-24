import {routerReducer as routing} from "react-router-redux";
import {combineReducers} from 'redux'
import menuBar from "./menuBar";
import counter from "./counter";

// const rootReducer = {
const rootReducer = combineReducers({
  routing,
  menuBar,
  counter,
})

export default rootReducer
