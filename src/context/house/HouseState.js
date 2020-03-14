import React, { createContext, useReducer } from "react";
import HouseReducer from "./houseReducer";
import { useQuery, useMutation } from "@apollo/react-hooks";

import { ADD_HOUSE_QUERY, SEARCH_HOUSES_QUERY } from "./queries";
import { ADD_HOUSE, SET_LOADING } from "../types";

// Initialize our state
const initialState = {
  houses: [],
  loading: true
};

// Create context
const HouseContext = createContext(initialState);

export const HouseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(HouseReducer, initialState);

  //Add House
  const addHouse = house => {
    // Give the query to our use mutation
    const [createHouse, NewHouse] = useMutation(ADD_HOUSE_QUERY);
    // Get House Fields
    const {
      streetAdress,
      zipCode,
      state,
      city,
      minPrice,
      maxPrice,
      dateSold,
      bathrooms,
      bedrooms,
      parking,
      yearBuilt,
      status,
      homeType,
      openHouse,
      listedBy,
      houseImage,
      squareFeet
    } = house;
    // Give the variables for our mutation
    createHouse({
      variables: {
        newHouse: {
          streetAdress,
          zipCode,
          state,
          city,
          minPrice,
          maxPrice,
          dateSold,
          bathrooms,
          bedrooms,
          parking,
          yearBuilt,
          status,
          homeType,
          openHouse,
          listedBy,
          houseImage,
          squareFeet
        }
      }
    });
    // TODO : HANDLE THE ERROR
    const { loading } = NewHouse;

    // Handle loading state
    if (!loading) setLoading();
  };
  // Search house using places
  const searchHouses = city => {
    // send query with variable and get data back
    const { loading, error, data } = useQuery(SEARCH_HOUSES_QUERY, {
      variables: { city }
    });
    // TODO : HANDLE THE ERROR
    // handle our loading state
    if (!loading) setLoading();

    // Give data to reducer to change our state
    dispatch({ type: ADD_HOUSE, payload: data });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <HouseContext.Provider
      // Inserted the states and functions that should be visible to our context users
      value={{
        houses: state.houses,
        loading: state.loading,
        addHouse,
        searchHouses
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseState;
