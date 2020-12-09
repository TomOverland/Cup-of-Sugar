import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./views/Login";
// We have a VIEWS and a COMPONENT Login.  We should figure out which we're going to use.
// Probably similar issue with below.
import Home from "./views/Home";
import Product from "./views/Product";
import PostProduct from "./views/PostProduct";
import LoginButton from "./components/LoginButton/LoginButton";
import LogoutButton from "./components/LogoutButton/LogoutButton";

function App() {
  return (
    <div>
      <LoginButton />
      <LogoutButton />
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/postproduct">
            <PostProduct />
          </Route>
          <Route exact path="/product/:id">
            <Product />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
