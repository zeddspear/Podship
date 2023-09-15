import React, { useState } from 'react';
import Header from '../../components/Header';
import SmallCard from '../../components/SmallCard';
import UploadFile from '../../components/UploadFile';
import UploadFileByURL from '../../components/UploadFileByURL';
import uploadIcon from '../../Assets/icons/Uplode.svg';
import shareURLIcon from '../../Assets/icons/URl.svg';

function Transcribing() {
  const [Overlay, setOverlay] = useState(false);
  const [uploadFileOverlay, setUplaodFileOverlay] = useState(false);
  const [urlFileOverlay, setURLFileOverlay] = useState(false);

  const onCloseClick = () => {
    setOverlay(false);
    setUplaodFileOverlay(false);
    setURLFileOverlay(false);
  };

  const uploadFunc = () => {
    setOverlay(true);
    setUplaodFileOverlay(true);
  };

  const shareFunc = () => {
    setOverlay(true);
    setURLFileOverlay(true);
  };

  return (
    <>
      <section className="Transcribing">
        {Overlay && (
          <div className="overlay d-flex justify-content-center align-items-center">
            {uploadFileOverlay && <UploadFile onClose={onCloseClick} />}
            {urlFileOverlay && <UploadFileByURL onClose={onCloseClick} />}
          </div>
        )}

        <Header className="bg-light" />
        <div className="container px-4 py-5 d-flex flex-column justify-content-center align-items-center">
          <div className="row pt-3 text-center">
            <h2 className="display-4 fw-bolder">Upload Your Content</h2>
            <p className="my-3">
              Using the best AI language models and speech to text APIs,
              transcribe your audio and <br /> video with 90% and above
              accuracy. Having a transcript is great for episode reference,
              <br /> editing, and SEO.
            </p>
          </div>
          <div className="row mt-0 mb-1 my-md-4">
            <SmallCard
              onClickFunc={uploadFunc}
              icon={uploadIcon}
              text={'Upload a file'}
              bgColor={'uploadcard'}
            />
            <SmallCard
              onClickFunc={shareFunc}
              icon={shareURLIcon}
              text={'Paste a URL'}
              bgColor={'sharecard'}
            />
          </div>
          <div className="row mt-5 mt-md-3 text-center">
            <p className="fw-bold">$0.20 per minute.</p>
            <p>Supported file formats: m4a, mp3, webm, mp4, mpga, wav, mpeg</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Transcribing;
