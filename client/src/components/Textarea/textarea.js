import React from 'react';

export function FormTextareaInput() {
    return(
        <>
        <div class="form-row">
            <div class="form-group col-md-8">
              <label for="exampleFormControlTextarea1">Description</label>
              <textarea
                class="form-control"
                id="itemDescriptionTextarea"
                rows="5"
                placeholder="Describe your item and rental details here"
              ></textarea>
            </div>
          </div>
        </>
    )
}