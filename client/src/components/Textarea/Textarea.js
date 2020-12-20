import React from "react";

const FormTextareaInput = (props) => {
  const style = {
    textarea: {
      height: "200px"
    },
    
  }
  return (
    <div className="space-y-6">
       <hr className="pt-1" />
      <div className="block">
        <div className="font-bold text-xl p-2 underline">
          Description
        </div>
        <br />
        <textarea
          className="flex-2 ml-1 py-1 px-1 bg-white rounded-lg placeholder-gray-400 text-gray-900 appearance-none inline-block w-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
          id="itemDescriptionTextarea"
          rows="5"
          placeholder="Describe your item and rental details here"
          onChange={(e) => props.handleInput(e, "itemDescription")}
          style={style.textarea}
        ></textarea>
      </div>
      <hr className="p-1" />
    </div>
  );
};

export default FormTextareaInput;
