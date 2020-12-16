import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import SiteDescription from "../components/SiteDescription/SiteDescription"

import "../components/Banner/banner.css"

const Login = () => {
  const { isAuthenticated } = useAuth0();

    return !isAuthenticated && (
      <div className="background-image">
        <div className="p-3 ml-5">
          <SiteDescription />  
        </div>  
      </div>
    )
};

export default Login;