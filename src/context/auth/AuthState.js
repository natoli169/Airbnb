import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { ADD_USER } from "../../utils/quries";
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

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    user: null,
    loading: true,
    error: null
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User

  // Register User
  const register = ({ name, email, password, password2 }) => {
    // send request with the query
    const [createUser, newUser] = useMutation(ADD_USER, {
      update(cache, { data: { addUser } }) {
        const data = cache.readQuery({ query: ALL_USERS });
        cache.writeQuery({
          query: ALL_USERS,
          data: { user: [addUser, ...data.users] }
        });
      }
    });
    // Give the field names
    createUser({
      variables: {
        newUser: {
          name: name,
          email: email,
          password: password,
          password2: password2
        }
      }
    });

    dispatch({ type: REGISTER_SUCCESS, payload: data });
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
        error: state.error
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
