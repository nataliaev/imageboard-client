import { SET_FAVORITES, ADD_FAVORITE, DELETE_FAVORITE } from "../actions";

export default function(state = [], action = {}) {
  switch (action.type) {
    case SET_FAVORITES:
      return action.payload;
    case ADD_FAVORITE:
      return [...state, action.payload];
    case DELETE_FAVORITE:
      return state.filter(image => image.id !== action.payload);
    default:
      return state;
  }
}
