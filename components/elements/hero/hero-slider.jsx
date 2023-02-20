import React from 'react';
import { EffectFade, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Counter from '../../common/counter';
import 'swiper/swiper.min.css';
import GhostImageSlider from './ghost-hero-slider';
let imgSrc = [
  '/assets/img/banner/slider/Production/Sustainable_Trash_Hauling.png',
  '/assets/img/banner/slider/Production/Construction_Cleanup.png',
  '/assets/img/banner/slider/Production/Demolition.png',
  '/assets/img/banner/slider/Production/Appliance_Removal_&_Disposal.png',
  '/assets/img/banner/slider/Production/Sustainable_Yard_CLean_up.png',
];
const HeroSlider = () => {
      
    return (
      <div className="bd-banner__right p-relative z-index-1 mb-60">
        <div className="bd-banner__active  swiper-container">
          <div className="swiper-wrappers">
           
                    <GhostImageSlider images={imgSrc} />
          </div>
        </div>
      
        <div className="bd-banner-pagination banner-pagination-1"></div>
      </div>
    );
};

export default HeroSlider;