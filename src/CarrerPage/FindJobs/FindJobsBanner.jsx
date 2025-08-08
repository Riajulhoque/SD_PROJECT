import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Company1 from '../../assets/Company1.jpg'
import Company2 from '../../assets/Company2.jpg'
import Company3 from '../../assets/Company3.jpg'
import Company5 from '../../assets/Company5.jpg'
import Company6 from '../../assets/Company6.jpg'
import Slider from "react-slick";
// import FindJobBanner from "../../src/assets/FindJobBanner.png";

const FindJobBanner = () => {
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
      <h1 className='text-4xl text-green-600 font-semibold p-15 text-center'>HOT jobs</h1>
      <div className="hotJobs">
        <Slider {...settings} className=''>
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src={Company1}
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Data Analyst Intern
              <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>Assist in collecting, cleaning, and analyzing data using Excel and Power BI.</p>
              <div className="card-actions justify-end">
              <button className="btn text-orange-950 hover:bg-secondary hover:text-white ">View Details</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src={Company2}
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                UI/UX Designer 
              <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>Create mobile and web UI designs in Figma with strong UX understanding.</p>
              <div className="card-actions justify-end">
              <button className="btn text-orange-950 hover:bg-secondary hover:text-white">View Details</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src={Company3}
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Junior Software Engineer
              <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>Entry-level developer needed with knowledge of Java or Python.</p>
              <div className="card-actions justify-end">
              <button className="btn text-orange-950 hover:bg-secondary hover:text-white">View Details</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src={Company5}
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Front-End Web Developer
              <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>We are seeking a passionate web developer with expertise in HTML, CSS, and React.</p>
              <div className="card-actions justify-end">
              <button className="btn text-orange-950 hover:bg-secondary hover:text-white">View Details</button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img
                src={Company6}
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Graphic Designer
              <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>Design social media posts, website banners, and logos using Adobe tools.</p>
              <div className="card-actions justify-end">
              <button className="btn text-orange-950 hover:bg-secondary hover:text-white">View Details</button>
              </div>
            </div>
          </div>
          
        </Slider>
          
      </div>
      
    </div>
  );
};

export default FindJobBanner;