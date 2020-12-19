import React from 'react';
import API from '../../utils/API';

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
    console.log('currentUser owner card: ', currentUser);
    const userSearchParam = currentUser.auth0_id;
    console.log('user search param: ', userSearchParam);

    // Then, we search the database's user table for the user with that matching auth0.sub.
    // *** Change getUsers below to query for auth.sub... ***
    API.getUserByAuth0(userSearchParam)
      .then((res) => {
        //   console.log("user response: ", res);
        const dbUserInfo = res;
        console.log('user info from db: ', dbUserInfo);

        this.setState({
          dbUser: dbUserInfo,
        });
      })
      .then(() => {
        const UserId = this.state.dbUser.id;
        console.log('userIDforAxios', UserId);

        API.getItemsByUser(UserId).then((res) => {
          console.log('res from getbyUser', res);
          const dbUserItems = res;

          this.setState({
            dbUserItems: dbUserItems,
          });
          console.log('state before ownerlist renders', this.state);
        });
      });

      // evaluate item.avaialableStatus to determine how a button attached to card should display to toggle status
  }

  render() {
    return (
      <div>
        <p>OwnerCard Component</p>
        <ul>
          {this.state.dbUserItems.map((item) => (
            <p>
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

export default OwnerCard;
