import React from "react";
import {
  BrowserRouter as Router, 
  Switch, 
  Route,
} from "react-router-dom";
import Login from "./views/Login";
import Home from "./views/Home";
import Product from "./views/Product"

function App() {
  return(
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
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
