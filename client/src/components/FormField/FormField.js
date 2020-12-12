import React from 'react';

export function FormInputField (props) {
  // console.log("props", props)
    return (
        <>
            <div className="form-row">
            <div className={props.class}>
              <label>{props.title}</label>
              <input
                type="text"
                className="form-control"
                id=""
                placeholder={props.placeholder}
                onChange={(e) => props.handleInput(e, props.name)}
              />
            </div>
          </div>
        </>
    )
}