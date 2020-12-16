import React from 'react';
// import { categories } from '../common/constants';
import { Checkboxes, useCheckboxes } from '../Checkbox/Checkbox';

export function Sidebar() {
  const checkboxes = useCheckboxes();

  const handleSubmit = (event) => {
    const categoryArr = checkboxes.checkboxes
      .filter((box) => box.checked)
      .map((checkbox) => checkbox.name);
    return console.log('categoryArr', categoryArr);
  };

  return (
    <>
      <form className="m-4" onSubmit={handleSubmit}>
        <div className="form-group">
          <Checkboxes {...checkboxes} />
          {/* <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            ></input>
            <label className="pl-1 form-check-label" for="gridCheck">
              Currently Available
            </label>
          </div> */}
        </div>
        {/* {categories.map((category) => {
          return (
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value={category}
                id="defaultCheck1"
                onChange={e => {setCheckbox()}}
              ></input>
              <label className="pl-1 form-check-label">
                {category}
              </label>
            </div>
          );
        })} */}
        <br />
        <hr />
        <br />
        <button
          type="submit"
          className="py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md focus:outline-none"
          value="submit"
        >
          Filter
        </button>
      </form>
    </>
  );
}
