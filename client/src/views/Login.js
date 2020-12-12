import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import Banner from '../components/Banner/Banner';


const Login = () => {
  const { isAuthenticated } = useAuth0();

    return !isAuthenticated && (
      <Banner />
    )
};

export default Login;