import React from 'react';

export function FormInputField (props) {
  // console.log("props", props)
    return (
        <>
            <div>
            <div className={props.class}>
              <div className="font-bold text-xl p-3 underline">{props.title}</div>
              <input
                type="text"
                className="form-control py-2 px-10 bg-white rounded-lg placeholder-gray-400 text-gray-900 appearance-none inline-block w-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                id=""
                placeholder={props.placeholder}
                onChange={(e) => props.handleInput(e, props.name)}
              />
            </div>
            <br />
          </div>
        </>
    )
}