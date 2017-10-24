import {TOGGLE_MENU_BAR} from "../actions/menuBar";

export default function menuBar(state = {active: false}, action) {
  switch (action.type) {
  case TOGGLE_MENU_BAR:
    return Object.assign({}, state, {
      active: !state.active
    })
  default:
    return state
  }
}
