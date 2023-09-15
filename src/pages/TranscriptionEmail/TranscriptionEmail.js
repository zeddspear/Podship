import React from 'react';
import Header from '../../components/Header';
import TranscriptionEmailForm from '../../components/TranscriptionEmailForm';

function TranscriptionEmail() {
  return (
    <>
      <section className="transcription-email bg-light">
        <Header className="bg-light" />
        <div className="container">
          <div className="row">
            <TranscriptionEmailForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default TranscriptionEmail;
