import {
  FETCH_LIST,
  SET_CATEGORY_FILTER,
} from "../actions/list";

const defaultList = require('../config/memeList.json');

export const list = (state = defaultList, action) => {
  switch (action.type) {
  case FETCH_LIST:
    return [
      ...state,
      action
    ]
  default:
    return state
  }
}

export const categoryFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case SET_CATEGORY_FILTER:
      return action.filter
    default:
      return state
  }
}
