import React from "react";
import "./wrapper.css";
import API from '../../utils/API';
// import { useAuth0 } from '@auth0/auth0-react'

class Wrapper extends React.Component{
  constructor(props) {
    super(props);

    this.state = { 
      items: [],
      dbUsers: []
    };
  }

  

  componentDidMount() {
    // const { user } = useAuth0();

    API.getItems().then((res) => {
      // console.log("response: ", res);
      const items = res;
      // console.log("response data: ", items);
      this.setState({
        items: items,
      });
    });
    console.log('Items from DB: ', this.state.items);

    API.getUsers().then((res) => {
      // console.log("user response: ", res);re
      const dbUsers = res;
      // console.log("user response data: ", apiUsers);
      this.setState({
        dbUsers: dbUsers
      })
   })
   console.log('Users from db: ', this.state.dbUsers)

  //  const currentUser = {
  //   auth0_id: user.sub,
  //   userName: user.name,
  //   userEmail: user.email,
  //  }
  //  console.log('current user: ', currentUser);
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default Wrapper;