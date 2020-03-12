import React from "react";
import "./App.css";
import AuthState from "./context/auth/AuthState";
import { ApolloProvider } from "@apollo/react-hooks";
import { Home } from "./pages/Home";
import client from "./client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Register } from "./components/register";
import { Login } from "./components/login";

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthState>
        <Router>
          <>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/signup' component={Register} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </>
        </Router>
      </AuthState>
    </ApolloProvider>
  );
}

export default App;
