import React, { createContext, useReducer } from "react";
import HouseReducer from "./houseReducer";
import { withApollo } from "react-apollo";

import { ADD_HOUSE_QUERY, SEARCH_HOUSES_QUERY } from "./queries";
import { ADD_HOUSE, SET_LOADING } from "../types";

// Initialize our state
const initialState = {
  houses: [],
  loading: true
};

// Create context
export const HouseContext = createContext(initialState);

const HouseProvider = ({ children, client }) => {
  const [state, dispatch] = useReducer(HouseReducer, initialState);
  // Add House
  const addHouse = house => {
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
    // Give our client our query and variables
    client
      .mutate({
        mutation: ADD_HOUSE_QUERY,
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
      })
      .then(result => console.log(result))
      .then(setLoading())
      .catch(err => console.log(err));

    // TODO : HANDLE THE ERROR
  };
  // Search house using places
  const searchHouses = city => {
    // Give our client our query and variables
    client
      .query({ query: SEARCH_HOUSES_QUERY, variables: { city } })
      // Give data to reducer to change our state
      .then(result => dispatch({ type: ADD_HOUSE, payload: result }))
      .catch(err => console.log(err));

    // TODO : HANDLE THE ERROR
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

export default withApollo(HouseProvider);
