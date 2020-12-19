import React from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { FormInputField } from "../FormField/FormField";
import FormTextareaInput from "../Textarea/Textarea";
import postItemToBackend from "../../utils/serviceFile";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default class PostProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: "",
      itemDescription: "",
      image: "",
      category: "",
      rentalFee: "",
      maxRentalDuration: "",
      email: "",
      phone: "",
      preferredContact: "",
      availableStatus: true,
      showModal: false,
      setShowModal: false,
      UserId: "",
    };
  }

  handleInput = (event, name) => {
    // console.log('event, name', event.target.value, name);
    this.setState({ [name]: event.target.value });
    // console.log("current props", this.props);
  };

  getDropDownValue = (value) => {
    this.setState({ category: value.value }, () => {
      console.log("getDrop", this.state.category);
    });
  };

  componentDidMount() {
    console.log('componentDidMount', this.state);
     // get current user information
     const currentUser = this.props.currentUser;
     // console.log("current user info before post req: ", currentUser);
     const currentUserAuth0 = this.props.currentUser.auth0_id;
     // console.log("Submit button currentUser: ", currentUserAuth0);
 
     API.getUserByAuth0(currentUserAuth0).then((res) => {
       const dbUserInfo = res;
       // console.log("Get user by auth on post product: ", dbUserInfo);
 
       // check if user exists in db after they post item
       if (dbUserInfo == null) {
         // if user exists, set state to user id
         API.postUser(currentUser).then((res) => {
           // console.log("response of API Post: ", res);
           const userId = res.id;
 
           this.setState({
             UserId: userId,
           });
           // console.log("state after the post: ", this.state);
         });
       } else {
         console.log("User already exists.");
         // console.log("res id in else: ", res.id);
         const userId = res.id;
 
         this.setState({
           UserId: userId,
         });
 
         console.log("else statement state: ", this.state);
       }
     });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log("submit clicked", this.state);
    // get current user information
    // const currentUser = this.props.currentUser;
    // // console.log("current user info before post req: ", currentUser);
    // const currentUserAuth0 = this.props.currentUser.auth0_id;
    // // console.log("Submit button currentUser: ", currentUserAuth0);

    // API.getUserByAuth0(currentUserAuth0).then((res) => {
    //   const dbUserInfo = res;
    //   // console.log("Get user by auth on post product: ", dbUserInfo);

    //   // check if user exists in db after they post item
    //   if (dbUserInfo == null) {
    //     // if user exists, set state to user id
    //     API.postUser(currentUser).then((res) => {
    //       // console.log("response of API Post: ", res);
    //       const userId = res.id;

    //       this.setState({
    //         UserId: userId,
    //       });
    //       // console.log("state after the post: ", this.state);
    //     });
    //   } else {
    //     console.log("User already exists.");
    //     // console.log("res id in else: ", res.id);
    //     const userId = res.id;

    //     this.setState({
    //       UserId: userId,
    //     });

    //     console.log("else statement state: ", this.state);
    //   }
    // });

    // make api call to DB to create new Item
    postItemToBackend(this.state).then((postSucceeded) => {
      if (postSucceeded) {
        //set state showModal to true
        this.setState({ showModal: true });
      } else {
        console.log("error");
      }
    });
  };

  render() {
    return (
      <div>
        <div className="container mx-auto pt-2">
          <div>{this.state.showModal ? <Modal /> : ""}</div>
          <div className="space-y-4">
            <div className="card block border mb-4 rounded overflow-hidden shadow-lg">
              <div
                className="card-body p-3 bg-red-400 text-white text-center text-lg p-5 "
                id="disclaimer"
              >
                Cup Of Sugar is not responsible for your transactions. Rent
                items at your risk. Consider taking precautions such as
                requesting Drivers License information before making a
                transaction. We recommend using Paypal for rental transactions.
                Please contact CupOSugarMPLS@gmail.com if you have questions.
              </div>
            </div>

            <form
              className="block border mb-4 rounded overflow-hidden p-5 shadow-lg"
              onSubmit={this.handleSubmit}
            >
              <FormInputField
                class="post-product-item-name-field font-bold text-l p-2 underline"
                title="Item Name"
                placeholder="Ex: Paddleboard"
                name="itemName"
                handleInput={this.handleInput}
              />
              <FormTextareaInput handleInput={this.handleInput} />
              <FormInputField
                class="post-product-item-image-link"
                title="Image (online hosted images only)"
                placeholder="Paste a link for your image here"
                name="image"
                handleInput={this.handleInput}
              />

              <DropdownMenu getDropDownValue={this.getDropDownValue} />
              <br />
              <hr className="pb-1" />
              <div>
                <div className="font-bold text-xl p-2 underline">
                  Rental Rate Per Day
                </div>
                <div className="flex">
                  <span className="flex-2 py-2 px-2 bg-white placeholder-gray-400 text-gray-900 appearance-none inline-block w-sm">
                    $:
                  </span>
                  <input
                    type="text"
                    className="flex-2 ml-1 py-1 px-1 bg-white rounded-lg placeholder-gray-400 text-gray-900 appearance-none inline-block w-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    aria-div="Amount (to the nearest dollar)"
                    placeholder=" 0"
                    onChange={(e) => this.handleInput(e, "rentalFee")}
                  />
                  <div className="flex-2 ml-1 py-2 px-2 bg-white placeholder-gray-400 text-gray-900 appearance-none inline-block w-sm">
                    <span>.00</span>
                  </div>
                </div>
              </div>
              <br />
              <hr className="pb-1" />
              <FormInputField
                class=""
                title="Maximum Rental Time"
                placeholder="Example: 2 weeks"
                name="maxRentalDuration"
                handleInput={this.handleInput}
              />
              <hr className="pb-1" />
              <FormInputField
                class=""
                title="Email"
                placeholder="example@email.com"
                name="email"
                handleInput={this.handleInput}
              />
              <hr className="pb-1" />
              <FormInputField
                class=""
                title="Phone Number (optional)"
                placeholder="XXXXXXXXXX"
                name="phone"
                handleInput={this.handleInput}
              />
              <hr className="pb-1" />
              <div className="font-bold text-xl p-2 underline">
                <div>Preferred Contact Method</div>
              </div>
              <div className="pb-3">
                <select
                  id="inputPreferredContact"
                  className="py-2 px-10 bg-white rounded-lg placeholder-gray-400 text-gray-900 appearance-none inline-block w-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 flex-1 "
                  name="preferredContact"
                  value={this.state.value}
                  onChange={(e) => this.handleInput(e, "preferredContact")}
                >
                  <option>Choose...</option>
                  <option value="Call or Text">Call or Text</option>
                  <option value="Call Only">Call Only</option>
                  <option value="Text Only">Text Only</option>
                  <option value="Email">Email</option>
                  <option value="No Preference">No Preference</option>
                </select>
              </div>
              <hr className="p-1" />
              <div className="flex">
                <button
                  type="submit"
                  className="py-2 px-4 pr-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none flex-2"
                  value="Submit"
                >
                  Save Listing <FontAwesomeIcon icon={faCompactDisc}/>
                </button>

                <Link
                  to="/"
                  type="button"
                  className="py-2 px-4 bg-red-500 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md focus:outline-none flex-2 ml-2"
                  value="cancel"
                >
                  Cancel <FontAwesomeIcon icon={faTimes}/>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
