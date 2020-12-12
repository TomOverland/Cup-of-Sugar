import React from 'react';

export function FormInputField (props) {
    return (
        <>
            <div className="form-row">
            <div className={props.class}>
              <label for={props.elementName}>{props.title}</label>
              <input
                type="text"
                className="form-control"
                id=""
                placeholder={props.placeholder}
              />
            </div>
          </div>
        </>
    )
}