import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

function UploadFileByURL({ onClose }) {
  return (
    <div className="uploadurloverlay d-flex align-items-center flex-column m-2 p-2">
      <AiOutlineClose
        onClick={onClose}
        className="closeupload fw-bold"
        size={20}
      />
      <p className="text-center my-5 fw-bold fs-4">
        Enter a URL to your audio or video file
      </p>
      <form>
        <input
          className="enter-a-url pt-2 pb-3 mt-3 mb-5 fs-6"
          type="text"
          placeholder="Enter the full URL, must be publicly accessible"
          name="url"
        />
      </form>
      <button className="btn start-btn my-4 px-5 py-3">
        Submit <BsArrowRight size={15} />
      </button>
      <div className="row mt-5 mt-md-3 text-center">
        <p className="fw-bold">$0.20 per minute.</p>
        <p>Supported file formats: m4a, mp3, webm, mp4, mpga, wav, mpeg</p>
      </div>
    </div>
  );
}

export default UploadFileByURL;
