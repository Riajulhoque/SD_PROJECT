import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SuccessStory1 from '../assets/SuccessStory1.png'
import SuccessStory2 from '../assets/SuccessStory2.png'
import SuccessStory3 from '../assets/SuccessStory3.png'
import SuccessStory4 from '../assets/SuccessStory4.png'
import SuccessStory5 from '../assets/SuccessStory5.png'

import Slider from "react-slick";
const SuccessStorys = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div>
      <h2 className='text-5xl font-semibold text-blue pl-18 mt-20 pb-15' >Our Success Storys</h2>
      <Slider {...settings} className=''>
        
        <div className="card bg-base-100 w-30 h-50 shadow-sm ">
          <figure className='rounded-xl w-[90%]'>
            <img src={SuccessStory1} alt="Shoes" />
          </figure>
        </div>
        <div className="card bg-base-100 w-30 h-50 shadow-sm ">
          <figure className='rounded-xl w-[90%]'>
            <img src={SuccessStory2} alt="Shoes" />
          </figure>
        </div><div className="card bg-base-100 w-30 h-50 shadow-sm ">
          <figure className='rounded-xl w-[90%]'>
            <img src={SuccessStory3} alt="Shoes" />
          </figure>
        </div>
        <div className="card bg-base-100 w-30 h-50 shadow-sm ">
          <figure className='rounded-xl w-[90%]'>
            <img src={SuccessStory4} alt="Shoes" />
          </figure>
        </div>
        <div className="card bg-base-100 w-30 h-50 shadow-sm ">
          <figure className='rounded-xl w-[90%]'>
            <img src={SuccessStory5} alt="Shoes" />
          </figure>
        </div>
        </Slider>
      
    </div>
  );
};

export default SuccessStorys;