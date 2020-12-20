// List of items owned by the signed in user.
import React, { useEffect } from "react";
import OwnerCard from "../OwnerCard/OwnerCard";
import { useAuth0 } from "@auth0/auth0-react";
import Wrapper from "../Wrapper/Wrapper"

const OwnerList = () => {
  const { user } = useAuth0();
  const currentUser = {
    auth0_id: user.sub,
    userName: user.name,
    userEmail: user.email,
  };

  return (
    <div>
      <Wrapper>
       <h1 className="font-bold text-2xl mb-3 pl-3 pt-3">Your Listings</h1>
      <hr />
      <div className="text-base sm:text-sm md:text-md lg:text-lg font-bold block ml-2 underline">Welcome: {currentUser.userName}</div>
      <br/>
      <OwnerCard currentUser={currentUser} />
      </Wrapper>
    </div>
  );
};

export default OwnerList;
