import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import { withApollo } from "react-apollo";
import { SIGNUP_MUTATION, LOGIN_MUTATION } from "./quries";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from "../types";

const AuthState = ({ children, client }) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    user: null,
    loading: true,
    error: null
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = () => {
    // @todo - load token into global headers
  };

  // Register User
  const register = ({ name, email, password, password2 }) => {
    // send request with the query
    client
      .mutate({
        mutation: SIGNUP_MUTATION,
        variables: {
          newUser: {
            name: name,
            email: email,
            password: password,
            password2: password2
          }
        }
      })
      .then(result => dispatch({ type: REGISTER_SUCCESS, payload: result }))
      // TODO: Register fail
      .catch(err => console.log(err));
  };

  // Login User

  // Logout

  // Clear errors

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default withApollo(AuthState);
