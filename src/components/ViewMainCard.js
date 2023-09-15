import React, { useState } from 'react';
import saveIcon from '../Assets/icons/save.svg';

function ViewMainCard({ viewData }) {
  const [selectedSpeaker, setSelectedSpeaker] = useState('spk_0');
  const [isEdit, setIsEdit] = useState(false);
  // const [newName, setNewName] = useState('');  This state is for commented text input

  const handleSpeaker = (e) => {
    setSelectedSpeaker((prev) => (prev = e.target.value));
  };

  return (
    <div className="main-view px-2 px-md-8 py-5">
      <div className="row">
        <div className="view-text-container">
          <div className="d-flex justify-content-between align-items-center flex-column flex-sm-row gap-3 gap-md-0">
            <div className="d-flex justify-content-center align-items-center fw-bold">
              <span className="me-1">Edit Name </span>
              <div className="sel">
                <select
                  name="speakers"
                  id="speakers"
                  value={selectedSpeaker}
                  onChange={handleSpeaker}
                  className="speaker-select mx-1 ps-1 pe-4 py-1"
                >
                  {viewData.speakerNames.map((speaker, idx) => {
                    return <option key={idx}>{speaker}</option>;
                  })}
                </select>
              </div>

              <div className="form-check form-switch ms-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="switchEditNames"
                  value={isEdit}
                  onChange={() => {
                    setIsEdit((prev) => !prev);
                    // setNewName('');
                  }}
                />
              </div>
            </div>

            <button className="btn save-text-btn">
              Save <img src={saveIcon} className="ms-1" alt="save-icon" />
            </button>
          </div>
        </div>
      </div>
      <br />
      {/* This commented component will render a text input  */}
      {/* {isEdit ? (
        <div className="enter-new-name d-flex flex-column flex-md-row align-items-center gap-2">
          <input
            className=" edit-name-input"
            type="text"
            id="enter-new-name"
            name="enter-new-name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button className="btn btn-primary ms-2">Done</button>
        </div>
      ) : null} */}
      <br />
      <div className="row">
        <div className="view-text p-4 mt-2">
          <p>{viewData.transcriptionText}</p>
        </div>
      </div>
    </div>
  );
}

export default ViewMainCard;
