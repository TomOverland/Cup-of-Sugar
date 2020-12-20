import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

const RentalStatusButton = (props, changeStatus) => {
    const [isAvailable, setIsAvailable] = useState(props.isAvailable);
//   console.log('in RentalStatButton', props, "isAvailableconst", isAvailable);
  
  return (
    <button
      className={
        isAvailable
          ? 'py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md focus:outline-none mr-1'
          : 'py-2 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md focus:outline-none mr-1'
      }
      type="button"
      value={props.value}
      onClick={(e) => {
          props.changeStatus(e, props.isAvailable ? 0 : 1)
          setIsAvailable(!isAvailable);
          console.log("after onClick setstate", isAvailable)
        }
    }
    >
      Change to {isAvailable ? 'Rented ' : 'Available '}
      <FontAwesomeIcon icon={faSyncAlt} />
    </button>
  );
};
export default RentalStatusButton;
