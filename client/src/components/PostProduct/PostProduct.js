import React from 'react';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { FormInputField } from '../FormField/FormField';
import { FormTextareaInput } from '../Textarea/Textarea';
// import { postItemToBackend } from 'serviceFile';

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
    };
  }
  handleInput = (event, name) => {
    console.log("event, name", event.target.value, name);
    this.setState({ [name]: event.target.value });
  };

  getDropDownValue = (value) => {
    this.setState({ category: value.value }, () => {
      console.log('getDrop', this.state.category);
    });
  };

  componentDidMount() {
    console.log("componentDidMount", this.state);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit clicked", this.state);
    // make api call to DB to create new Item
    // postItemToBackend(this.state);
  };

  render() {
    return (
      <div className="container mx-auto">
        <div className="space-y-4">
          <div className="card block border mb-4 rounded overflow-hidden">
            <div className="card-body p-3" id="disclaimer">
              Cup Of Sugar is not responsible for your transactions. Rent items
              at your risk. Consider taking precautions such as requesting
              Drivers License information before making a transaction. We
              recommend using Paypal for rental transactions. Please contact
              CupOSugarMPLS@gmail.com if you have questions.
            </div>
          </div>
        </div>
        <form
          className="block border mb-4 rounded overflow-hidden"
          onSubmit={this.handleSubmit}
        >
          <FormInputField
            class="post-product-item-name-field"
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
          <label>Rental Rate Per Day</label>
          <div className="form-row">
            <div className="input-group col-md-3">
              <div className="input-group-prepend">
                <span className="input-group-text">$</span>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
                placeholder="0"
                onChange={(e) => this.handleInput(e, 'rentalFee')}
              />
              <div className="input-group-append">
                <span className="input-group-text">.00</span>
              </div>
            </div>
          </div>
          <FormInputField
            class="form-group col-md-4"
            title="Maximum Rental Time"
            placeholder="Example: 2 weeks"
            name="maxRentalDuration"
            handleInput={this.handleInput}
          />
          <FormInputField
            class="form-group col-md-4"
            title="Email"
            placeholder="example@email.com"
            name="email"
            handleInput={this.handleInput}
          />
          <FormInputField
            class="form-group col-md-4"
            title="Phone Number (optional)"
            placeholder="XXXXXXXXXX"
            name="phone"
            handleInput={this.handleInput}
          />
          <div className="form-group col-md-4">
            <label>Preferred Contact Method</label>
            <select
              id="inputPreferredContact"
              className="form-control"
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
          <button type="submit" className="btn btn-primary" value="Submit">
            Save Listing
          </button>
          <button type="submit" className="btn btn-danger" value="cancel">
            Cancel
          </button>
        </form>
      </div>
    );
  }
}
