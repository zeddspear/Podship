import React from 'react';
import TranscribedListItem from './TranscribedListItem';

function StarterBriefMainCard() {
  return (
    <div className="brief-main-card col-12 col-lg-7  border px-2 py-3 my-5">
      <div className="small-headings d-flex justify-content-between px-1 px-md-5">
        <p className="name ps-0 pe-3 pe-sm-5 pe-md-10">File Name/URL</p>
        <p className="duration px-2">Est.Delivery</p>
        <p className="cost px-2">Cost</p>
      </div>

      <TranscribedListItem />
      <TranscribedListItem />

      <div className="d-flex justify-content-between px-1 py-3 px-md-5">
        <div>
          <p className="fs-5 fw-bold">
            Estimated Total
            <span className="estimated-val-min"> ($0.20/min)</span>
          </p>
        </div>
        <div>
          <p className="fs-5 fw-bold">$0.50</p>
        </div>
      </div>
    </div>
  );
}

export default StarterBriefMainCard;
