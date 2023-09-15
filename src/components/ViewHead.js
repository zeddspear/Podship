import React from 'react';
import viewHeadIcon from '../Assets/icons/view-heading-icon.svg';
import copyIcon from '../Assets/icons/copy-text.svg';
import downloadIcon from '../Assets/icons/download.svg';

function ViewHead({ viewName }) {
  return (
    <div className="row my-5 py-3">
      <div className="d-flex justify-content-between align-items-center flex-md-row flex-column text-center">
        <div className="transcription-view-name d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
          <div className="transcription-view-icon p-3 border">
            <img src={viewHeadIcon} alt="view-head-icon" />
          </div>
          <h2 className="display-5 fw-bold">{viewName}</h2>
        </div>
        <div className="download-copy-btns ms-0 ms-md-2 mt-3 mt-md-0 d-flex justify-content-center align-items-center gap-3">
          <button className="btn copy-text px-4 py-2">
            <img className="me-2" src={copyIcon} alt="copy-icon" /> Copy Text
          </button>
          <button className="btn download-text px-4 py-3">
            <img className="me-2" src={downloadIcon} alt="copy-icon" /> Download
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewHead;
