import React, { useState } from 'react';
import { categories } from '../common/constants';

const getDefaultCheckboxes = () =>
  categories.map((category) => ({
    name: category,
    checked: false,
  }));

export function useCheckboxes(defaultCheckboxes) {
  const [checkboxes, setCheckboxes] = useState(
    defaultCheckboxes || getDefaultCheckboxes()
  );

  function setCheckbox(index, checked) {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index].checked = checked;
    setCheckboxes(newCheckboxes);
  }
  
  return {
    setCheckbox,
    checkboxes,
  };
}

export function Checkboxes({ checkboxes, setCheckbox }) {
  return (
    <>
      {checkboxes.map((checkbox, i) => (
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            key={checkbox.name}
            checked={checkbox.checked}
            onChange={(e) => {
              setCheckbox(i, e.target.checked);
            }}
          ></input>
          <label className="pl-1 form-check-label">{checkbox.name}</label>
        </div>
      ))}
    </>
  );
}
