import React from 'react'
import { ProductData } from '../../data/data';
import Product from '../products-product/product/product';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './productsSlider.css'

const ProductsSlider = () => {
   const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
    const productsSliderData = ProductData();
   return (
    <div className="productsSlider">
      <h2 className="title">ÇA VIENT DE SORTIR</h2>
      <Slider className='slider' {...settings}>
        {productsSliderData.map((product) => (
          <Product className="product" {...product} />
        ))}
      </Slider>
    </div>
  );
}


export default ProductsSlider
