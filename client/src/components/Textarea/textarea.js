import React from 'react';

export function FormTextareaInput() {
    return(
        <>
        <div className="form-row">
            <div className="form-group col-md-8">
              <label for="exampleFormControlTextarea1">Description</label>
              <textarea
                className="form-control"
                id="itemDescriptionTextarea"
                rows="5"
                placeholder="Describe your item and rental details here"
              ></textarea>
            </div>
          </div>
        </>
    )
}