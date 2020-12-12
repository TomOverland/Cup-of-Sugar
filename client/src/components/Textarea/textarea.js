import React from 'react';

export function FormTextareaInput() {
    return(
        <div className="space-y-6">
            <div className="block">
              <label for="exampleFormControlTextarea1" className="font-bold">Description</label>
              <textarea
                className="block resize border rounded-md"
                id="itemDescriptionTextarea"
                rows="5"
                placeholder="Describe your item and rental details here"
                
              ></textarea>
            </div>
        </div>
    )
}