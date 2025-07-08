import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import authentic from '../assets/authentic.jpg'
import Company1 from '../assets/Company1.jpg'
import Company2 from '../assets/Company2.jpg'
import Company3 from '../assets/Company3.jpg'
import Company6 from '../assets/Company6.jpg'
import Company5 from '../assets/Company5.jpg'


// import React, { Component } from "react";
import Slider from "react-slick";


const FeaturedCompanies = () => {
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
      <div className='indicator'>
        <span className="indicator-item badge badge-secondary">Pro</span>
      <h2 className='text-5xl font-semibold text-blue pl-18' >Featured Companies</h2>
      </div>
      <div className="FeaturedCompanies slider-container pt-10 pb-10 gap-5">
        <Slider {...settings} className=''>
        <div className="card bg-base-100 w-96 shadow-sm ">
           {/* <span className="indicator-item badge badge-secondary">New</span> */}
          <figure className='rounded-xl'>
            <img src={Company5} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="companyInfo flex justify-between">
              <div className="image w-15 h-15"></div>
              <div className="name"> 
                <div className="companyName rounded-xl"><a href=""><h2 className="card-title"> Company </h2></a></div>
                <div className="place"><p>Company Place</p></div>
              </div>
              <div className="icon w-10 h-10 ">
                <img src={authentic} alt="" />
              </div>

            </div>
            <h2 className="card-title"> Job Title <div className="badge badge-secondary">NEW</div> </h2>
            <p>Job details</p>
            <div className="card-actions justify-between pt-10">
              <div className="badge badge-outline rounded-xl badge-secondary btn p-5"><h2>View Jobs</h2></div>
              <div className="badge badge-outline rounded-xl badge-secondary btn p-5">View Company</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm ">
          <figure>
            <img src={Company6} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="companyInfo flex justify-between">
              <div className="image w-15 h-15"></div>
              <div className="name"> 
                <div className="companyName"><h2 className="card-title"> Company Name </h2></div>
                <div className="place"><p>Company Place</p></div>
              </div>
              <div className="icon w-10 h-10 ">
                <img src={authentic} alt="" />
              </div>

            </div>
            <h2 className="card-title"> Job Title <div className="badge badge-secondary">NEW</div> </h2>
            <p>Job details</p>
            <div className="card-actions justify-between pt-10">
              <div className="badge badge-outline rounded-xl badge-secondary btn p-5"><h2>View Jobs</h2></div>
              <div className="badge badge-outline rounded-xl badge-secondary btn p-5">View Company</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm ">
          <figure>
            <img src={Company3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="companyInfo flex justify-between">
              <div className="image w-15 h-15"></div>
              <div className="name"> 
                <div className="companyName"><h2 className="card-title"> Company Name </h2></div>
                <div className="place"><p>Company Place</p></div>
              </div>
              <div className="icon w-10 h-10 ">
                <img src={authentic} alt="" />
              </div>

            </div>
            <h2 className="card-title"> Job Title <div className="badge badge-secondary">NEW</div> </h2>
            <p>Job details</p>
            <div className="card-actions justify-between pt-10">
              <div className="badge badge-outline rounded-xl badge-secondary btn p-5"><h2>View Jobs</h2></div>
              <div className="badge badge-outline rounded-xl badge-secondary btn p-5">View Company</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm ">
          <figure>
            <img src={Company2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="companyInfo flex justify-between">
              <div className="image w-15 h-15"></div>
              <div className="name"> 
                <div className="companyName"><h2 className="card-title"> Company Name </h2></div>
                <div className="place"><p>Company Place</p></div>
              </div>
              <div className="icon w-10 h-10 ">
                <img src={authentic} alt="" />
              </div>

            </div>
            <h2 className="card-title"> Job Title <div className="badge badge-secondary">NEW</div> </h2>
            <p>Job details</p>
            <div className="card-actions justify-between pt-10">
              <div className="badge badge-outline rounded-xl badge-secondary btn p-5"><h2>View Jobs</h2></div>
              <div className="badge badge-outline rounded-xl badge-secondary btn p-5">View Company</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm ">
          <figure>
            <img src={Company1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="companyInfo flex justify-between">
              <div className="image w-15 h-15"></div>
              <div className="name"> 
                <div className="companyName"><h2 className="card-title"> Company Name </h2></div>
                <div className="place"><p>Company Place</p></div>
              </div>
              <div className="icon w-10 h-10 ">
                <img src={authentic} alt="" />
              </div>

            </div>
            <h2 className="card-title"> Job Title <div className="badge badge-secondary">NEW</div> </h2>
            <p>Job details</p>
            <div className="card-actions justify-between pt-10">
              <div className="badge badge-outline rounded-xl badge-secondary btn p-5"><h2>View Jobs</h2></div>
              <div className="badge badge-outline rounded-xl badge-secondary btn p-5">View Company</div>
            </div>
          </div>
        </div>
        
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedCompanies;