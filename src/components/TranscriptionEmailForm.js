import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';

function TranscriptionEmailForm() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;

    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="formContainer mt-5 px-4 px-md-8 pt-4 pb-2">
      <div className="heading text-center">
        <h2 className="display-4 fw-bold">
          Almost <span>Done!</span>
        </h2>
        <p className="fs-5 fw-bold">
          Enter your name and email to get your starter brief.
        </p>
      </div>

      <form className="emailForm mt-5" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="true"
            onChange={handleInputs}
          />
        </div>

        <br />

        <div className="d-flex flex-column flex-md-row">
          <div className="d-flex flex-column">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              autoComplete="false"
              onChange={handleInputs}
            />
          </div>
          <br />
          <div className="d-flex flex-column ms-0 ms-md-10">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              autoComplete="false"
              onChange={handleInputs}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center my-5">
          <button className="btn start-btn px-5 py-3 mt-3" type="submit">
            Submit <BsArrowRight size={15} />
          </button>
        </div>
      </form>
      <div>
        <p className="text-center mt-2">
          By providing email you are opting in to PodShip communications and can
          opt out any time
        </p>
      </div>
    </div>
  );
}

export default TranscriptionEmailForm;
