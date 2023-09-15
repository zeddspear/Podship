import React from 'react';
import Header from '../../components/Header';
import TranscriptionCompleteDetails from '../../components/TranscriptionCompleteDetails';

function TranscriptionComplete() {
  return (
    <>
      <section className="transcription-complete">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 empty-container"></div>
            <TranscriptionCompleteDetails />
          </div>
        </div>
      </section>
    </>
  );
}

export default TranscriptionComplete;
