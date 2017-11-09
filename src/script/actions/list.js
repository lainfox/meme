/*
 * action types
 */

export const FETCH_LIST = 'FETCH_LIST'
export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER'

/*
 * action creators
 */
export function fetchList(category) {
  return {
    type: FETCH_LIST,
    category
  }
}

export const setCategoryFilter = filter => {
  return {
    type: SET_CATEGORY_FILTER,
    filter
  }
}

