import React from 'react';
import Header from '../../components/Header';
import { BsArrowRight } from 'react-icons/bs';
import uploadIcon from '../../Assets/icons/moreUpload.svg';
import uploadURLs from '../../Assets/icons/moreURLs.svg';
import StarterBriefMainCard from '../../components/StarterBriefMainCard';
import CheckoutCard from '../../components/CheckoutCard';

function StarterBrief() {
  return (
    <>
      <section className="starter-brief">
        <Header className="bg-primary" />
        <div className="container px-4 pt-8 pb-5">
          <div className="row">
            <div className="d-flex flex-column flex-md-row gap-3">
              <button className="btn upload-more-files ps-0 pe-0 pe-md-5 py-2">
                <img
                  className="mx-2 ms-md-2 me-md-3"
                  src={uploadIcon}
                  alt="upload-icon"
                />
                Upload More Audio/Video{' '}
                <BsArrowRight className="ms-1 ms-md-2" size={15} />
              </button>
              <button className="btn upload-more-urls ps-0 pe-0 pe-md-5 py-2">
                <img
                  className=" mx-2 ms-md-2 me-md-3"
                  src={uploadURLs}
                  alt="upload-icon"
                />
                Paste More urls
                <BsArrowRight className="ms-1 ms-md-2" size={15} />
              </button>
            </div>
          </div>
          <div className="row">
            <StarterBriefMainCard />
            <div className="col-12 col-lg-1"></div>
            <CheckoutCard />
          </div>

          <div className="row">
            <div className="d-flex align-items-end flex-column">
              <ul className="faqslist">
                <li>
                  <p className="display-6 fw-bold">FAQs</p>
                </li>
                <li>
                  <a href="#">How do you keep my information Secure?</a>
                </li>
                <li>
                  <a href="#">How accurate are automated transcripts?</a>
                </li>
                <li>
                  <a href="#">
                    How long will it take to receive my automated transcript?
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default StarterBrief;
