import { ADD_HOUSE, SET_LOADING } from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_HOUSE:
      return {
        ...state,
        houses: [action.payload, ...state.houses]
      };
    case SET_LOADING:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
