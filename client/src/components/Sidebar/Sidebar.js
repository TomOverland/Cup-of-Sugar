import React from 'react';
import { Checkboxes, useCheckboxes } from '../Checkbox/Checkbox';
import API from '../../utils/API';

export function Sidebar(props) {
  const checkboxes = useCheckboxes();

  const handleSubmit = (event) => {
    event.preventDefault();
    const categoryArr = checkboxes.checkboxes
      .filter((box) => box.checked)
      .map((checkbox) => checkbox.name)
      .join(',');
    API.getFilteredItems(categoryArr).then((response) => {
      console.log('filter response', response);
      props.setItems(response);
    });
  };

  const resetCheckboxes = () => {
    //target all checkboxes on the page by class, put them in a const (arr)
    const checkboxArr = document.getElementsByClassName('form-check-input');
    console.log(checkboxArr);
    //forEach through the checkboxes
    Array.prototype.forEach.call(checkboxArr, (checkbox) => {
      console.log('checkbox.checked', checkbox.checked)
      checkbox.checked = false
    });
    // checkboxArr.forEach(checkbox => {(checkbox.checked = 'false')});
    //set each checkbox...
  }

  return (
    <>
      <form className="m-4" onSubmit={handleSubmit}>
        <div className="form-group">
          <Checkboxes {...checkboxes} />
        </div>
        <br />
        <hr />
        <br />
        <button
          type="submit"
          className="py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none mr-1"
          value="submit"
        >
          Filter
        </button>
        <button
          type="button"
          className="py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md focus:outline-none"
          value="reset"
          onClick={(e) => {
            API.getItems().then((response) => {
              props.setItems(response);
              resetCheckboxes();
            });
          
          }}
        >
          Reset
        </button>
      </form>
    </>
  );
}
