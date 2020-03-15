import { ADD_HOUSE, SET_LOADING } from "../types";

export default (state, action) => {
  switch (action.type) {
    // Handle Add House
    case ADD_HOUSE:
      return {
        ...state,
        houses: [action.payload, ...state.houses],
        loading: false
      };
    // Handle Loading
    case SET_LOADING:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
