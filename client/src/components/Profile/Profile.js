import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "../Loader/Loader";
// import API from "../../utils/API";

const Profile = () => {
  const {
    user,
    isAuthenticated,
    isLoading,
    getAccessTokenSilently,
  } = useAuth0();
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

  // useEffect(() => {
  //   // API.getUsers() will get a list of all current users.
  //   // we identify users by Auth0.sub, which is a hashed value.
  //   // if the user's Auth.sub does not exist in our current database, we then post that new user to our DB.
  //   API.getUsers().then((res) => {
  //     // console.log("user response: ", res);
  //     const apiUsers = res;
  //     // console.log("user response data: ", apiUsers);
  //   });

  //   // Defining the new user info
  //   // const newUser = {
  //   //   auth0_id: user.sub,
  //   //   userName: user.name,
  //   //   userEmail: user.email,
  //   // };
  //   //*** Add if (user exists) {
  //   //    API.postUser(newUser).then((res) => {
  //   //     console.log("posting user: ", res);
  //   // })
  //   //  } else { console.log('user exists')} ***

  //   // console.log("newUser data: ", newUser)
  // });

  if (isLoading) {
    return <Loader />;
  }

  return (
    isAuthenticated && (
      <div>
        {/* <div className="text-base sm:text-sm md:text-md lg:text-lg font-bold block ml-2 underline pt-2 pb-2">Hello: {user.email}</div> */}
      </div>
    )
  );
};

export default Profile;
