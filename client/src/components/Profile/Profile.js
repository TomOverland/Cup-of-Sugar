import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "../Loader/Loader"
import API from '../../utils/API';

const Profile = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);
  const [userList, setUserList] = useState();

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "dev-naiex9c2.us.auth0.com";
  
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });
  
        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
  
        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        const { user_metadata } = await metadataResponse.json();
  
        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };
  
    getUserMetadata();
  }, []);

  useEffect(() => {
    API.getUsers().then((res) => {
        // console.log("user response: ", res);
        const apiUsers = res;
        // console.log("user response data: ", apiUsers);
     })

    const newUser = {
        auth0_id: user.sub,
        userName: user.name,
        userEmail: user.email,
    }

    // console.log("newUser data: ", newUser)

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