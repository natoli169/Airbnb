import gql from "graphql-tag";

export const ADD_HOUSE_QUERY = gql`
  mutation CreateAHome($newHome: NewHome!) {
    addHome(input: $newHome) {
      id
    }
  }
`;

export const SEARCH_HOUSES_QUERY = gql`
  query searchHouses($city: city!) {
    Houses(city: $city) {
      id
      streetAdress
      zipCode
      state
      city
      minPrice
      maxPrice
      dateSold
      bathrooms
      bedrooms
      parking
      yearBuilt
      status
      homeType
      openHouse
      listedBy
      houseImage
      squareFeet
    }
  }
`;
