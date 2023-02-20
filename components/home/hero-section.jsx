import Link from 'next/link';
import React from 'react';
import HeroSlider from '../elements/hero/hero-slider';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';

const HeroSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openVideoModal = () => setIsOpen(!isOpen);
    return (
      <section className="bd-banner__area grey-bg banner__overlay banner__height-1 p-relative">
        <div className="bd-banner__image-1">
          <img
            src="/assets/img/banner/banner-floating-trash.png"
            alt="banner-img"
          />
        </div>
        <div className="bd-banner__line">
          <img src="/assets/img/banner/banner-line.png" alt="banner-line" />
        </div>
        <div className="container">
          <div className="row g-0 align-items-center">
            <div className="col-xxl-7 col-xl-6 col-lg-6 ">
              <div className="bd-banner__content-box mb-60">
                <div className="bd-banner__text">
                  <h2>
                    QHaul <br />
                    Junk Removal
                  </h2>
                </div>
                <div className="row">
                  <div className="col-xxl-5"></div>
                  <div className="col-xxl-6">
                    <ModalVideo
                      channel="youtube"
                      isOpen={isOpen}
                      videoId="M5A3zRiYmPc"
                      onClose={() => {
                        openVideoModal();
                      }}
                    />
                    <div className="bd-banner__content__wrap">
                      <div className="bd-banner__content">
                        <p>
                          <b>
                            {' '}
                            We strive to continually give our customers a
                            professional, easy, and affordable waste management
                            solution.
                          </b>
                        </p>
                        <div className="bd-banner__button">
                          <div className="bd-button__inner">
                            <Link href="/contact">
                              <a className="bd-bn__btn-1">Contact Us</a>
                            </Link>
                          </div>
                          <div className="bd-banner__link">
                            <span
                              className="banner-video__btn popup-video"
                              onClick={() => {
                                openVideoModal();
                              }}
                            >
                              <i className="fa-solid fa-play"></i>
                              <span>
                                Learn
                                <br />
                                More
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-6 col-lg-6">
              <HeroSlider />
            </div>
          </div>
        </div>
      </section>
    );
};

export default HeroSection;