import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import PostProduct from "../PostProduct/PostProduct";

const PostProductPage = () => {
  const { user } = useAuth0();

  const currentUser = {
    auth0_id: user.sub,
    userEmail: user.email,
  };

  console.log("PostProductPage currentUser: ", currentUser);

  return (
    <div>
      <PostProduct currentUser={currentUser} />
    </div>
  );
};

export default PostProductPage;
