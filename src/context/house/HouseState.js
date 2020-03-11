import React, { useReducer } from "react";
import HouseContext from "./houseContext";
import HouseReducer from "./houseReducer";
import { ADD_HOUSE, SET_LOADING } from "../types";

const HouseState = props => {
  const initialState = {
    houses: [],
    loading: false
  };

  const [state, dispatch] = useReducer(HouseReducer, initialState);

  //Add House
  const addHouse = house => {
    dispatch({ type: ADD_HOUSE, payload: house });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <HouseContext.Provider
      value={{
        houses: state.houses,
        addHouse
      }}
    >
      {props.children}
    </HouseContext.Provider>
  );
};

export default HouseState;
