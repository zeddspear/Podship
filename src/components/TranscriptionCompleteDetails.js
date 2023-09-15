import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

function TranscriptionCompleteDetails() {
  return (
    <div className="col-12 col-md-6 mt-10  mt-md-0 complete-details px-5 py-8 py-md-4">
      <div className="complete-headings">
        <h2 className="display-4">Your Transcription is On The way!</h2>
        <p>
          Our team and crafty tech is hard at work making your transcript.
          Please check your email shortly & click the link to view, edit, &
          marvel at all the possibilities.
        </p>
      </div>
      <div className="complete-btns mt-5">
        <p>
          <strong>In the meantime,</strong> email us any <br /> ideas or
          feedback you have, or check out
        </p>
        <div className="d-flex flex-column gap-3">
          <button className="btn complete-btn px-3 py-3">
            <span>Podcaster Starter Bried</span> <BsArrowRight />
          </button>
          <button className="btn complete-btn px-3 py-3">
            <span>Podcast Launch</span> <BsArrowRight />
          </button>
          <button className="btn complete-btn px-3 py-3">
            <span>Transcription</span> <BsArrowRight />
          </button>
          <button className="btn complete-btn px-3 py-3">
            <span>Sign up For Email</span> <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TranscriptionCompleteDetails;
