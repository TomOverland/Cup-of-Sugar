import React from "react";
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { isAuthenticated } = useAuth0();

    return !isAuthenticated && (
      <h1>Login Page</h1>
    )
};

export default Login;
