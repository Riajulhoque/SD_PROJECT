import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import authentic from '../assets/authentic.jpg'
import Company1 from '../assets/Company1.jpg'
import Company2 from '../assets/Company2.jpg'
import Company3 from '../assets/Company3.jpg'
import Company6 from '../assets/Company6.jpg'
import Company5 from '../assets/Company5.jpg'
import GreenByteCompany from '../assets/GreenByteCompany.png'
import BroCode from '../assets/BroCode.png'
import TechNovaCompany from '../assets/TechNovaCompany.png'
import PixelMatrixCompany from '../assets/PixelMatrixCompany.png'
import DataWiseCompany from '../assets/DataWiseCompany.png'


// import React, { Component } from "react";
import Slider from "react-slick";


const FeaturedCompanies = () => {
   const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    
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
              <div className="image w-15 h-15 shadow-md rounded-xl ">
                <a href=""> <img className='rounded-xl' src={TechNovaCompany} alt="" /></a>
              </div>
              <div className="name"> 
                <div className="companyName rounded-xl"><a href=""><h2 className="card-title"> TechNova Ltd. </h2></a></div>
                <div className="place"><p>Dhaka, Bangladesh</p></div>
              </div>
              <div className="icon w-10 h-10 ">
                <img src={authentic} alt="" />
              </div>

            </div>
            <h2 className="card-title"> Front-End Web Developer <div className="badge badge-secondary">NEW</div> </h2>
            <p>We are seeking a passionate web developer with expertise in HTML, CSS, and React.</p>
            <div className="card-actions justify-between pt-10">
              <div className="badge badge-outline rounded-xl badge-secondary btn p-5 hover:bg-secondary hover:text-white"><h2>More Jobs</h2></div>
              <div className="badge badge-outline rounded-xl badge-secondary btn p-5 hover:bg-secondary hover:text-white">View Company</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm ">
          <figure>
            <img src={Company6} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="companyInfo flex justify-between">
              <div className="image w-15 h-15 shadow-md rounded-xl ">
                <a href=""> <img className='rounded-xl' src={GreenByteCompany} alt="" /></a>
              </div>
              <div className="name"> 
                <div className="companyName"><h2 className="card-title"> GreenByte Solutions	 </h2></div>
                <div className="place"><p>Chittagong</p></div>
              </div>
              <div className="icon w-10 h-10 ">
                <img src={authentic} alt="" />
              </div>

            </div>
            <h2 className="card-title"> Graphic Designer <div className="badge badge-secondary">NEW</div> </h2>
            <p>Design social media posts, website banners, and logos using Adobe tools.</p>
            <div className="card-actions justify-between pt-10">
              <div className="badge badge-outline rounded-xl badge-secondary btn p-5 hover:bg-secondary hover:text-white"><h2>More Jobs</h2></div>
              <div className="badge badge-outline rounded-xl badge-secondary btn p-5 hover:bg-secondary hover:text-white">View Company</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm ">
          <figure>
            <img src={Company3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="companyInfo flex justify-between">
              <div className="image w-15 h-15 shadow-md rounded-xl ">
                <a href=""> <img className='rounded-xl' src={BroCode} alt="" /></a>
              </div>
              <div className="name"> 
                <div className="companyName"><h2 className="card-title"> BroCode Agency </h2></div>
                <div className="place"><p>Sylhet</p></div>
              </div>
              <div className="icon w-10 h-10 ">
                <img src={authentic} alt="" />
              </div>

            </div>
            <h2 className="card-title"> Junior Software Engineer <div className="badge badge-secondary">NEW</div> </h2>
            <p>Entry-level developer needed with knowledge of Java or Python.</p>
            <div className="card-actions justify-between pt-10">
              <div className="badge badge-outline rounded-xl badge-secondary btn p-5 hover:bg-secondary hover:text-white"><h2>More Jobs</h2></div>
              <div className="badge badge-outline rounded-xl badge-secondary btn p-5 hover:bg-secondary hover:text-white">View Company</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm ">
          <figure>
            <img src={Company2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="companyInfo flex justify-between">
              <div className="image w-15 h-15 shadow-md rounded-xl ">
                <a href=""> <img className='rounded-xl' src={GreenByteCompany} alt="" /></a>
              </div>
              <div className="name"> 
                <div className="companyName"><h2 className="card-title"> PixelMatrix Studio </h2></div>
                <div className="place"><p>Rajshahi</p></div>
              </div>
              <div className="icon w-10 h-10 ">
                <img src={authentic} alt="" />
              </div>

            </div>
            <h2 className="card-title"> UI/UX Designer <div className="badge badge-secondary">NEW</div> </h2>
            <p>Create mobile and web UI designs in Figma with strong UX understanding.</p>
            <div className="card-actions justify-between pt-10">
              <div className="badge badge-outline rounded-xl badge-secondary btn p-5 hover:bg-secondary hover:text-white"><h2>More Jobs</h2></div>
              <div className="badge badge-outline rounded-xl badge-secondary btn p-5 hover:bg-secondary hover:text-white">View Company</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm ">
          <figure>
            <img src={Company1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="companyInfo flex justify-between">
              <div className="image w-15 h-15 shadow-md rounded-xl ">
                <a href=""> <img className='rounded-xl' src={DataWiseCompany} alt="" /></a>
              </div>
              <div className="name"> 
                <div className="companyName"><h2 className="card-title"> DataWise Analytics </h2></div>
                <div className="place"><p>Dhaka</p></div>
              </div>
              <div className="icon w-10 h-10 ">
                <img src={authentic} alt="" />
              </div>

            </div>
            <h2 className="card-title"> Data Analyst Intern <div className="badge badge-secondary">NEW</div> </h2>
            <p>Assist in collecting, cleaning, and analyzing data using Excel and Power BI.</p>
            <div className="card-actions justify-between pt-10">
              <div className="badge badge-outline rounded-xl badge-secondary btn p-5 hover:bg-secondary hover:text-white"><h2>More Jobs</h2></div>
              <div className="badge badge-outline rounded-xl badge-secondary btn p-5 hover:bg-secondary hover:text-white">View Company</div>
            </div>
          </div>
        </div>
        
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedCompanies;