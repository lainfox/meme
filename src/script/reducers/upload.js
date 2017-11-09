import {
  UPLOAD_FILE,
  RESET_FILE,
} from "../actions/upload";

export const upload = (state = {
  file: '',
}, action) => {
  switch (action.type) {
  case UPLOAD_FILE:
    return {
      ...state,
      file: action.file
    }
  case RESET_FILE:
    return {
      ...state,
      file: ''
    }
  default:
    return state
  }
}
