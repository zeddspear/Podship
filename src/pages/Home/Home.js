import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

function Home() {
  return (
    <>
      <section className="Home bg-primary">
        <Header className="bg-primary" />
        <div className="container-fluid py-8">
          <div className="container px-4">
            <div className="row home-top-text">
              <h2 className="display-2 fw-bold">
                Easily
                <div className="littleText align-middle ms-4 px-2 pt-3 px-md-3 ">
                  <p className="fs-6">
                    Audio or video, and <br /> the first one is
                    <span> Free</span>
                  </p>
                </div>
                <br />
                <span>Transcribe</span> Your Content
              </h2>
            </div>
            <div className="row home-bottom-text mt-3 ps-0 ps-md-3 ps-lg-7 ps-xl-10">
              <p className="fs-6">
                Transcribe near instantly for less per minute than Rev & other
                competitors. Using the best AI language models & speech to text
                APIs, transcribe your audio & video with 90% & above accuracy.
                Having a transcript is great for episode reference, editing, and
                SEO.
              </p>
              <p className="fs-5">
                Get your first transcription free!
                <strong> (up to 45 minutes)</strong>
              </p>
              <div>
                <Link to={'/transcribing'}>
                  <button className="btn start-btn px-5 py-3 mt-3">
                    Start Transcribing <BsArrowRight size={15} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
