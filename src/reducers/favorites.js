import { SET_FAVORITES, ADD_FAVORITE } from "../actions";

export default function(state = [], action = {}) {
  switch (action.type) {
    case SET_FAVORITES:
      return action.payload;
    case ADD_FAVORITE:
      return [...state, action.payload];
    default:
      return state;
  }
}