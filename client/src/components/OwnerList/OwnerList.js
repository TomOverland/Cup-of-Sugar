// List of items owned by the signed in user.
import React, { useEffect } from "react";
import OwnerCard from "../OwnerCard/OwnerCard";
import { useAuth0 } from "@auth0/auth0-react";

const OwnerList = () => {
  const { user } = useAuth0();
  const currentUser = {
    auth0_id: user.sub,
    userName: user.name,
    userEmail: user.email,
  };

  return (
    <div>
      <p>current user auth0id: {currentUser.auth0_id}</p>
      <OwnerCard currentUser={currentUser} />
    </div>
  );
};

export default OwnerList;
