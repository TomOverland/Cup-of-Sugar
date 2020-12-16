import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <p>User Information:</p>
        <hr/>
        <p>Email: {user.email}</p>
        <p>Auth0 ID: {user.sub}</p>
        <br/>
      </div>
    )
  );
};

export default Profile;