// View of single product from results list
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Login from "../../views/Login";
// import Wrapper from "../Wrapper/Wrapper"
// import API from "../../utils/API";
import SingleProductCard from "../SingleProductCard/SingleProductCard";

const SingleProductPage = (props) => {
  // Get ID from URL param, then pass as prop to SingleProductCard
  const url = window.location.pathname;
  console.log("url: ", url);
  const splitUrl = url.split("/productpage/");
  console.log("splitUrl: ", splitUrl);
  const id = splitUrl[1];
  console.log("id: ", id);

  return (
    <div>
      <SingleProductCard searchId={id} />
    </div>
  );
};

export default withAuthenticationRequired(SingleProductPage, {
  onRedirecting: () => <Login />,
});
