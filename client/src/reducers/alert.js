import { SET_ALERT, REMOVE_ALERT } from "../actions/types.js";

const initinalState = [];

export default function (state = initinalState, action) {
  switch (action.type) {
    case SET_ALERT:
      return [...state, action.payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== action.payload);
    default:
      return state;
  }
}
