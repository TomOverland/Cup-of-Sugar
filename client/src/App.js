import React, { Component } from "react";
import {
  BrowserRouter as Router, 
  Switch, 
  Route,
} from "react-router-dom";
import Login from "./views/Login";
import Home from "./views/Home";
import Product from "./views/Product"
import PostProduct from "./views/PostProduct"
import LoginButton from "./components/LoginButton/LoginButton";

function App() {
  return(
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
            <LoginButton />
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
  ) 
}

export default App;
