import { ADD_HOUSE } from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_HOUSE:
      return {
        ...state,
        houses: [action.payload, ...state.houses],
        loading: false
      };
    default:
      return state;
  }
};
