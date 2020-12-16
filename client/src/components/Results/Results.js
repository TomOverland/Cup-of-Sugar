// We appear to be using Home.js as the results page.  Consider deleting this.
import React from "react";
import API from "../../utils/API";
import { useAuth0 } from '@auth0/auth0-react';
import Profile from "../Profile/Profile";
// import Home from './Home';

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = { items: [] };
  }

  // Component did mount gets called after the render() method, so the map method starts as undefined.
  componentDidMount() {
    console.log("Component did mount... Sending Axios Request...");
    API.getItems().then((res) => {
      console.log("response: ", res);
      const items = res;
      console.log("response data: ", items);
      this.setState({
        items: items,
      });
    });
  }

  render() {
    return (
      <div>
        <Profile />
        <p>Current List of Items:</p>
        <hr />
        <ul>
          {this.state.items.map((item) => (
            <p>
              <li>Item ID: {item.id}</li>
              <li>Item Name: {item.itemName}</li>
              <li>Item Description: {item.itemDescription}</li>
              <li>image: {item.image}</li>
              <li>category: {item.category}</li>
              <li>rental fee: {item.rentalFee}</li>
              <li>max rental duration: {item.maxRentalDuration}</li>
              <li>email: {item.email}</li>
              <li>phone: {item.phone}</li>
              <li>preferred contact: {item.preferredContact}</li>
              <li>available status: {item.availableStatus}</li>
            </p>
          ))}
        </ul>
      </div>
    );
  }
}

export default Results;
