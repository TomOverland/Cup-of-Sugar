import React from 'react';
import { Checkboxes, useCheckboxes } from '../Checkbox/Checkbox';
import API from '../../utils/API';
// import { HomeDisplayItems } from '../../views/Home';

export function Sidebar(props) {
  const checkboxes = useCheckboxes();

  const handleSubmit = (event) => {
    event.preventDefault();
    const categoryArr = checkboxes.checkboxes
      .filter((box) => box.checked)
      .map((checkbox) => checkbox.name)
      .join(',');
    //NEED TO WRITE if catergoryArr == [], getAllItems---no, need a reset button.
    API.getFilteredItems(categoryArr).then((response) => {
      console.log('filter response', response);
      props.setItems(response)
     
    });
  };

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
          className="py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md focus:outline-none"
          value="submit"
        >
          Filter
        </button>
      </form>
    </>
  );
}
