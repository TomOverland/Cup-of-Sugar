import React from "react";
import API from "../../utils/API";

class OwnerCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dbUsers: [],
    };
  }

  componentDidMount() {
    // when page loads, the authenticated user's auth0.sub is saved to currentUser variable.
    const currentUser = this.props.currentUser;
    // console.log("currentUser: ", currentUser);
    // Then, we search the database's user table for the user with that matching auth0.sub.
    // *** Change getUsers below to query for auth.sub... ***
    API.getUsers().then((res) => {
      //   console.log("user response: ", res);
      const apiUsers = res;
      //   console.log("apiUsers: ", apiUsers);
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
