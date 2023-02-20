import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { Scrollbar, A11y, Autoplay, Pagination, EffectFade } from 'swiper';
import Counter_Up from '../counter/counter_up';

export const GhostImageSlider = ({ images }) => {
 
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageNames, setImageNames] = useState(['']);
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

    const getImageName = (path) => {
      const filenameWithExtension = path.split('/').pop(); // get the file name with extension from the path
      const filename = filenameWithExtension.split('.')[0]; // get the file name without extension
      const nameWithSpaces = filename.replace(/_/g, ' '); // replace underscores with spaces
      return nameWithSpaces;
    };
  return (
    <Swiper modules={[Pagination, Scrollbar, A11y, Autoplay]}
              
             
              pagination={{
                clickable: true,
                el: '.bd-banner-pagination',
                        }} 
                        onSlideChange={handleSlideChange}>
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          {activeIndex === index && <Counter_Up index={index} image={image} title={getImageName(image)} />}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GhostImageSlider;
