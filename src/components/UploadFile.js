import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

function UploadFile({ onClose }) {
  return (
    <div className="uploadoverlay d-flex align-items-center flex-column m-2 p-2">
      <AiOutlineClose
        onClick={onClose}
        className="closeupload fw-bold"
        size={20}
      />
      <p className="text-center my-4 fw-bold fs-4">
        Select an audio or video file
      </p>
      <form>
        <input className="choose-a-file" type="file" name="audio/video" />
      </form>
      <div className="filebrowse px-10 d-flex flex-column justify-content-center align-items-center">
        <span>File Browse</span>
      </div>
      <button className="btn start-btn my-4 px-5 py-3">
        Upload a file <BsArrowRight size={15} />
      </button>
      <div className="row mt-5 mt-md-3 text-center">
        <p className="fw-bold">$0.20 per minute.</p>
        <p>Supported file formats: m4a, mp3, webm, mp4, mpga, wav, mpeg</p>
      </div>
    </div>
  );
}

export default UploadFile;
