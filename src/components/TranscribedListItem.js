import React from 'react';
import removeIcon from '.././Assets/icons/Remove.svg';

function TranscribedListItem() {
  return (
    <div className="list-item d-flex justify-content-between px-1 py-3 px-md-5">
      <div className="item-name me-3 ps-0 pe-3 pe-sm-5 pe-md-10">
        <p>
          ruinousmedisa-wfx6sivg1_rawdasdddddddddddddddasdasdddddddddddddddddddddddddddd
        </p>
        <p className="remove w-50">
          <img className="mb-1" src={removeIcon} alt="removeIcon" /> Remove
        </p>
      </div>
      <div className="item-duration px-2 px-md-0 pe-md-7">
        <p>5 minutes</p>
      </div>
      <div className="item-cost ps-2 ps-md-0 pe-1">
        <p>$0.50</p>
      </div>
    </div>
  );
}

export default TranscribedListItem;
