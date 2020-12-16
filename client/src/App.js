import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
// import Product from './views/Product';
import PostProduct from "./components/PostProduct/PostProduct";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./views/Login";
import SingleProductPage from "./components/SingleProductPage/SingleProductPage";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/postproduct">
            <PostProduct />
          </Route>
          {/* <Route path="/product/:id">
            <Product />
          </Route> */}
          <Route path="/productpage">
            <SingleProductPage />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
