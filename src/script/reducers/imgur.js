import {
  POST_TO_IMGUR
} from "../actions/imgur";

export const imgur = (state = {}, action) => {
  switch (action.type) {
  case POST_TO_IMGUR:
    return [
      ...state,
      action.payload
    ]
  default:
    return state
  }
}
