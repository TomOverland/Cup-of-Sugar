// View of single product from results list
import React from "react";
// import { Link } from "react-router-dom";
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Login from '../../views/Login';
import SingleProductCard from '../SingleProductCard/SingleProductCard';

const SingleProductPage = (props) => {
  // Get ID from URL param, then pass as prop to SingleProductCard.
  const url = window.location.pathname
  const splitUrl = url.split('/productpage/')
  const id = splitUrl[1];
  //console.log('id: ', id)

  return (
    <div>
      <SingleProductCard searchid={id}/>
    </div>
    
    
  );
};

export default withAuthenticationRequired(SingleProductPage, {
  onRedirecting: () => <Login />
});

