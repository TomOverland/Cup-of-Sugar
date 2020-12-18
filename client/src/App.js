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
import ProtectedRoute from "./auth/ProtectedRoute";
import OwnerList from "./components/OwnerList/OwnerList";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Wrapper> 
        <Switch> 
          <Route exact path="/">
            <Login />
            <Home />
          </Route>
          <ProtectedRoute path="/home" component={Home} />
          <ProtectedRoute path="/postproduct" component={PostProduct} />
          <ProtectedRoute path="/productpage" component={SingleProductPage} />
          <ProtectedRoute path="/contact" component={Contact} />
          <ProtectedRoute path="/owner" component={OwnerList} />
        </Switch>
        </Wrapper>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
