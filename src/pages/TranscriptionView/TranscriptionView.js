import React from 'react';
import Header from '../../components/Header';
import ViewHead from '../../components/ViewHead';
import ViewMainCard from '../../components/ViewMainCard';
import viewData from './transcriptionViewData';

function TranscriptionView() {
  return (
    <>
      <section className="transcription-view px-1 px-md-0">
        <Header />
        <div className="container">
          <ViewHead viewName={viewData.name} />
          <ViewMainCard viewData={viewData} />
        </div>
      </section>
    </>
  );
}

export default TranscriptionView;
