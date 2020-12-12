import React from 'react';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';
import { FormInputField } from '../FormField/form-field';
import { FormTextareaInput } from '../Textarea/textarea';
// import { postItemToBackend } from 'myserviceFile';

export function PostProduct() {
  return (
    <div className="container mx-auto">
     
        <div class="space-y-4">
          <div class="card block border mb-4 rounded overflow-hidden">
            <div class="card-body p-3" id="disclaimer">
              Cup Of Sugar is not responsible for your transactions. Rent items
              at your risk. Consider taking precautions such as requesting
              Drivers License information before making a transaction. We
              recommend using Paypal for rental transactions. Please contact
              CupOSugarMPLS@gmail.com if you have questions.
            </div>
          </div>
        </div>
        <form className="block border mb-4 rounded overflow-hidden">
          <FormInputField
            class="post-product-item-name-field"
            title="Item Name"
            placeholder="Ex: Paddleboard"
            elementName="item-title"
          />
          <FormTextareaInput />
          <FormInputField
            class="post-product-item-image-link"
            title="Image (online hosted images only)"
            placeholder="Paste a link for your image here"
            elementName="item-image"
          />
          <DropdownMenu />
          <label for="rental-rate">Rental Rate Per Day</label>
          <div class="form-row">
            <div class="input-group col-md-3">
              <div class="input-group-prepend">
                <span class="input-group-text">$</span>
              </div>
              <input
                type="text"
                class="form-control"
                aria-label="Amount (to the nearest dollar)"
                placeholder="0"
              />
              <div class="input-group-append">
                <span class="input-group-text">.00</span>
              </div>
            </div>
          </div>
          <FormInputField
            class="form-group col-md-4"
            title="Maximum Rental Time"
            placeholder="Example: 2 weeks"
            elementName="maximum-rental-time"
          />
          <FormInputField
            class="form-group col-md-4"
            title="Email"
            placeholder="example@email.com"
            elementName="listing-email"
          />
          <FormInputField
            class="form-group col-md-4"
            title="Phone Number (optional)"
            placeholder="XXX-XXX-XXXX"
            elementName="listing-phone"
          />
          <div class="form-group col-md-4">
            <label for="inputPreferredContact">Preferred Contact Method</label>
            <select id="inputPreferredContact" class="form-control">
              <option selected>Choose...</option>
              <option>Call or Text</option>
              <option>Call Only</option>
              <option>Text Only</option>
              <option>Email</option>
              <option>No Preference</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary" value="submit">
            Save Listing
          </button>
          <button type="submit" class="btn btn-danger" value="cancel">
            Cancel
          </button>
        </form>
      </div>
  );
}
