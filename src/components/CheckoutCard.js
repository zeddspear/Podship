import React, { useState } from 'react';

function CheckoutCard() {
  const [refName, setRefName] = useState('');
  return (
    <div className="col-12 col-lg-4 checkout-card px-4 py-3 my-5 mx-md-auto">
      <div className="ref-name-container d-flex flex-column mt-3 py-3">
        <label htmlFor="ref-name" className="my-2">
          Reference Name (optional)
        </label>
        <input
          id="ref-name"
          className="px-2"
          type="text"
          name="refName"
          onChange={(e) => setRefName(e.target.value)}
        />
      </div>
      <div className="checkout-bottom px-3 py-4 mt-5 mb-3">
        <div className="d-flex justify-content-between">
          <p className="fw-bold mx-1">Estimated Total</p>
          <p className="fw-bold mx-1">$0.50</p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn btn checkout-btn px-5 px-lg-6 px-xl-10 py-2">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutCard;
