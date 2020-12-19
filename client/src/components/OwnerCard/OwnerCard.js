import React from 'react';
import API from '../../utils/API';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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

  // Delete a Listing from the DB, then update the state so it no longer appears on the page
  handleDelete = (event) => {
    console.log('this will be deleted', event.target.value);
    const itemId = event.target.value;
    API.deleteItem(itemId).then((res) => {
      const updatedDbUserItems = this.state.dbUserItems.filter((userItem) => {
        if (userItem.id != itemId) return userItem;
      });
      this.setState(
        {
          dbUserItems: updatedDbUserItems,
        },
      );
    });
  };

  render() {
    return (
      <div>
        <div>
          <p>OwnerCard Component</p>
          <ul>
            {this.state.dbUserItems.map((item) => (
              <>
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
                <Link
                // STILL NEED TO WRITE THIS NINA
                  to="/editlisting"
                  item={item}
                  className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md focus:outline-none mr-1"
                >
                  Edit <FontAwesomeIcon icon={faEdit} />
                </Link>
                <button
                  className="py-2 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md focus:outline-none"
                  type="button"
                  value={item.id}
                  onClick={(e) => this.handleDelete(e)}
                >
                  Delete <FontAwesomeIcon icon={faSkullCrossbones} />
                </button>
              </>
            ))}
          </ul>
        </div>
        <div className="container mx-auto lg:grid grid-cols-3 gap-4">
          <div className="p-4 flex space-x-4 rounded-md ">
            <div className="flex-2 rounded-md p-6 bg-gray-100">
              <div>
                <img
                  alt="mockup"
                  src={process.env.PUBLIC_URL + '/lawnmower.jpg'}
                  className="bg-blue bg-cover py-1 px-10"
                />
              </div>
              <hr />
              <div className="py-1 px-10">
                <div className="text-2xl font-bold mb-3 underline">
                  Lawn Mower
                </div>
                <div className="text-lg mb-3">
                  Lawn Mower, runs pretty alright
                </div>
                <div className="text-lg mb-3 font-bold underline">
                  Daily Fee:
                </div>
                <div className="text-lg mb-3">$5.00</div>
              </div>
              <div>
                <Link
                  to="/editlisting"
                  // item={item}
                  className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md focus:outline-none mr-1"
                >
                  Edit <FontAwesomeIcon icon={faEdit} />
                </Link>
                <button
                  className="py-2 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md focus:outline-none"
                  type="button"
                  // onClick={(e) => handleDelete(e, item.id)}
                >
                  Delete <FontAwesomeIcon icon={faSkullCrossbones} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OwnerCard;
