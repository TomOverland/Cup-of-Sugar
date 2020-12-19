import React from "react";
import API from "../../utils/API";

class OwnerCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dbUser: [],
      dbUserItems: [],
    };
  }

  componentDidMount() {
    // when page loads, the authenticated user's auth0.sub is saved to currentUser variable.
    const currentUser = this.props.currentUser;
    console.log("currentUser owner card: ", currentUser);
    const userSearchParam = currentUser.auth0_id;
    console.log("user search param: ", userSearchParam);

    // Then, we search the database's user table for the user with that matching auth0.sub.
    // *** Change getUsers below to query for auth.sub... ***
    API.getUserByAuth0(userSearchParam).then((res) => {
      //   console.log("user response: ", res);
      const dbUserInfo = res;
      console.log("user info from db: ", dbUserInfo);

      this.setState({
        dbUser: dbUserInfo,
      });
    });
  }

  render() {
    return (
      <div>
        <p>OwnerCard Component</p>
      </div>
    );
  }
}

export default OwnerCard;
