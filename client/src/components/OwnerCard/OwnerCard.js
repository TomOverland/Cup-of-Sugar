import React from 'react';
import API from '../../utils/API';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit } from '@fortawesome/free-solid-svg-icons';
import RentalStatusButton from '../RentalStatusButton/RentalStatusButton';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

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
        const dbUserInfo = res;

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
  }
  // Event that allows user to change the rental status of their items
  changeStatus = (event, status) => {
    const id = event.target.value;
    API.changeStatus(id, { status }).then((res) => {
      console.log('in OwnerCard post ChangeStat', res);
    });
  };

  // Delete a Listing from the DB, then update the state so it no longer appears on the page
  handleDelete = (event) => {
    console.log('this will be deleted', event.target.value);
    const itemId = event.target.value;
    API.deleteItem(itemId).then((res) => {
      const updatedDbUserItems = this.state.dbUserItems.filter((userItem) => {
        if (userItem.id !== itemId) return userItem;
      });
      this.setState({
        dbUserItems: updatedDbUserItems,
      });
    });
  };

  render() {
    return (
      <div className="container mx-auto lg:grid grid-cols-3 gap-4">
        {this.state.dbUserItems.map((item) => (
          <div className="flex space-x-4 rounded-md" key={item.name}>
            <div className="flex-2 rounded-md p-6 bg-gray-100">
              <img
                alt={item.name}
                src={process.env.PUBLIC_URL + item.image}
                className="bg-blue bg-cover pb-2 px-5"
              />
              <hr />
              <div className="py-1 px-10">
                <div className="text-2xl font-bold mb-3 underline">
                  {item.itemName}
                </div>

                <div className="text-lg mb-3 font-bold">
                  Daily Fee: ${item.rentalFee}.00
                </div>
              </div>
              <RentalStatusButton
                value={item.id}
                isAvailable={item.availableStatus}
                changeStatus={this.changeStatus}
              />
              <button
                className="py-2 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md focus:outline-none"
                type="button"
                value={item.id}
                onClick={(e) => this.handleDelete(e)}
              >
                Delete <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default OwnerCard;
