import React from 'react';

function SmallCard({ icon, text, bgColor, onClickFunc }) {
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-5 mt-md-0">
      <div
        onClick={() => {
          onClickFunc();
        }}
        className={`${bgColor} smallcard gap-5 d-flex flex-column justify-content-center align-items-center p-4 p-md-5`}
      >
        <div>
          <img src={icon} alt="icon" />
        </div>
        <p className="fs-5 text-center">{text}</p>
      </div>
    </div>
  );
}

export default SmallCard;
