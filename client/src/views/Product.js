import React from 'react';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';
import { FormInputField } from '../FormField/form-field';
import { FormTextareaInput } from '../Textarea/textarea';
// import { postItemToBackend } from 'myserviceFile';

export function Product() {
    return (
          <div class="container">
        <div class="row">
            <div class="card">
            </div>
        </div>
        <!--Product Image-->
        <div class="container image-container">
            <div class="row">
                <div class="col-xl-8 offset xl-2 py-5">
                    <h3>Product Name</h3>
                <div>
                    <input type="image" id="image" src="https://fakeimg.pl/640x360" alt="image of rentable item">
                </div>
                <div class="form-row">
                    <div class="form-group col-md-8">
        
                    <p class="product-info">
                        Item description, uses of operation, details on renting, etc.
                    </p>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-8">
                    </div>
                </div>
                <p>Rental Rate: $______/Day</p>
                <div class="form-row">
                    <div class="input-group col-md-2">
                        <div class="input-group-prepend">
                        </div>
                        <div class="input-group-append">
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-4">
                       <p>Maximum Rental Length:_______</p>
                    </div>
                </div>
                <div class="Item-image col-md-4"></div>
                <button type="Rent this Item" class="btn btn-primary" value="submit">
                    Rent this Item
                </button>
                <button type="submit" class="btn btn-danger" value="cancel">
                    Cancel
                </button>
            </form>
        </div>
    </div>
  );
}