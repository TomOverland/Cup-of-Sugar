import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

const RentalStatusButton = (props, changeStatus) => {
  console.log('in RentalStatButton', props);
  //   if (props.isAvailable === 'true') {
  console.log('in RentalStatBut if');
  return (
    <button
      className={
        props.isAvailable
          ? 'py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md focus:outline-none mr-1'
          : 'py-2 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md focus:outline-none mr-1'
      }
      type="button"
      value={props.value}
      onClick={(e) => props.changeStatus(e, props.isAvailable ? 1 : 0)}
    >
      Change to {props.isAvailable ? 'Rented ' : 'Available '}
      <FontAwesomeIcon icon={faSyncAlt} />
    </button>
  );
};
export default RentalStatusButton;
