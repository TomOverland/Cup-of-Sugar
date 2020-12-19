import React from 'react';
import API from '../../utils/API';

const RentalStatusButton = (props, changeStatus) => {
  console.log('in RentalStatButton', props);
  if (props.isAvailable === true) {
    console.log('in RentalStatBut if');
    return (<button type="button" value={props.value} onClick={(e) => props.changeStatus(e, 0)}>Wumbo</button>);
  } else {
      return (<button type="button" value={props.value} onClick={(e) => props.changeStatus(e, 1)}>NOT AVAILABLE</button>);
  }
};
export default RentalStatusButton;
