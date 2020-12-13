import React from "react";

<<<<<<< HEAD
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
=======
const FormTextareaInput = (props) => {
  return (
    <div className="space-y-6">
      <div className="block">
        <label for="itemDescription" className="font-bold">
          Description
        </label>
        <textarea
          className="block resize border rounded-md"
          id="itemDescriptionTextarea"
          rows="5"
          placeholder="Describe your item and rental details here"
          onChange={(e) => props.handleInput(e, "itemDescription")}
        ></textarea>
      </div>
    </div>
  );
};

export default FormTextareaInput;
>>>>>>> main
