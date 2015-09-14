import { TOGGLE_LEFT_NAV } from '../constants/ActionTypes';

export default function leftNav(state = {toggled: false}, action) {
  switch (action.type) {
    case TOGGLE_LEFT_NAV:
      //return { menuToggled: !state.menuToggled };
      //return Object.assign({}, state, { toggled: !state.toggled });
      return { ...state, toggled: !state.toggled };
    default:
      return state;
  }
}
