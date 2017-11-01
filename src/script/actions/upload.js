/*
 * action types
 */
export const UPLOAD_FILE = 'UPLOAD_FILE'
export const RESET_FILE = 'RESET_FILE'

/*
 * action creators
 */
export const upload = file => {
  return {
    type: UPLOAD_FILE,
    file
  }
}

export const resetFile = () => {
  return {
    type: RESET_FILE
  }
}
