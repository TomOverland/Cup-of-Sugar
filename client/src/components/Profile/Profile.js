import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "../Loader/Loader"
import API from '../../utils/API';

const Profile = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const [userList, setUserList] = useState();

  useEffect(() => {
    API.getUsers().then((res) => {
        console.log("user response: ", res);
        const apiUsers = res;
        console.log("user response data: ", apiUsers);
     })

    const newUser = {
        auth0_id: user.sub,
        userName: user.name,
        userEmail: user.email,
    }

    console.log("newUser data: ", newUser)

    // API.postUser(newUser).then((res) => {
    //     console.log("posting user: ", res);
    // })

    });

 if (isLoading) {
    return <Loader />;
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