import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css'

function Sliderbanner() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
  
    return (
      <div >
        <Slider className='slider' {...settings}>
          <div className='slide'>
            <img src="../../../images-slider/eco1.jpg" alt="" />
          </div>
          <div className='slide'>
            <img src="../../../images-slider/eco2.jpg" alt="" />
          </div>
          <div className='slide'>
            <img src="../../../images-slider/eco3.jpg" alt="" />
          </div>
          {/* Ajoutez d'autres slides selon vos besoins */}
        </Slider>
      </div>
    );
  }
  
  export default Sliderbanner;
  
