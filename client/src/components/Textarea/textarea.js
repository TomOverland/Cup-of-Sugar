import React from 'react';

export function FormTextareaInput() {
    return(
        <div className="space-y-6 pt-2">
            <div className="block">
              <label for="exampleFormControlTextarea1" className="font-bold text-xl">Description</label>
              <hr className="p-2"/>
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