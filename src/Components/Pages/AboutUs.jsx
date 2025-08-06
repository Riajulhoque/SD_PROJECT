import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../Navbar';
import LatestNews from '../LatestNews';
import Header from '../Header';
import Aboutus from "../../assets/About Us.png"
import Hiring from "../../assets/Hiring.png"
import Hiring2 from "../../assets/hiring2.png"
import GoogleAdd from "../../assets/GoogleAdd.png"
import SponsoredArticlePromotions from "../../assets/SponsoredArticlePromotions.png"
import AffiliateMarketing from "../../assets/AffiliateMarketing.jpg"
import Sponsored from "../../assets/Sponsored.jpg"
import safin from "../../assets/Safin.jpg"
import safat from "../../assets/Safat.jpg"
import shuvo from "../../assets/Shuvo.jpg"
import jasems from "../../assets/jasems.jpg"
import { IoCall } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";






const AboutUs = () => {
  const {state} = useNavigation()
  return (
    <div>
      <header>
        <Header></Header>
          <nav className='w-11/12 mx-auto my-3'>
            <Navbar></Navbar>
          </nav>
      </header>


      {/* About Us banner section starts here */}
      <div className="AboutUS display flex [@media(max-width:700px)]:block">
        <div className="img w-400 [@media(max-width:700px)]:w-auto">
          <img src={Aboutus} alt="" />
        </div>
        <div className="info mt-20">
          <h2 className='text-4xl font-bold -ml-25 '>Welcome to Dragon News Portal - </h2>
          <h3 className='ml-15 w-[75%] text-lg mt-10'><span className='text-4xl font-semibold italic'>O</span>ur news portal was developed by a dedicated team of students from the International Islamic University Chittagong (IIUC) as part of our Software Development course. We are passionate about delivering accurate, timely, and diverse content that serves the needs of both the general public and business professionals.</h3>
        </div>
        
          
      </div>
      {/*  About Us banner section endss here  */}


      {/* team mate details starts here */}
        <h2 className='text-4xl font-semibold p-15 text-center'>Teammates Information</h2>
      <div className="TeamMateInfo gap-5 pb-18 grid grid-cols-4 [@media(max-width:800px)]:grid-cols-2">
        <div className="card bg-base-100  shadow-sm">
          <figure>
            <img src={safin} alt="Safin image" className='h-70 rounded-xl' />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Md. Safin Hossain <div className="badge badge-secondary">C233157</div>
            </h2><p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div className="card-actions justify-end mt-7">
              <div className="badge badge-outline btn hover:bg-secondary hover:text-white"><IoCall/></div>
              <div className="badge badge-outline btn hover:bg-secondary hover:text-white "><FaLinkedinIn /></div>
              <div className="badge badge-outline btn hover:bg-secondary hover:text-white"><FaFacebook/></div>
              <div className="badge badge-outline btn hover:bg-secondary hover:text-white "><CgProfile /></div>


            </div>
          </div>
        </div>
        <div className="card bg-base-100  shadow-sm">
          <figure>
            <img src={jasems} alt="Jasem image" className='h-70 rounded-xl'/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mohammed Jasem <div className="badge badge-secondary">C231098</div>
            </h2><p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div className="card-actions justify-end mt-7">
              <div className="badge badge-outline btn hover:bg-secondary hover:text-white"><IoCall/></div>
              <div className="badge badge-outline btn hover:bg-secondary hover:text-white "><FaLinkedinIn /></div>
              <div className="badge badge-outline btn hover:bg-secondary hover:text-white"><a href="https://www.facebook.com/mohammed.jasem.562"><FaFacebook/></a></div>
              <div className="badge badge-outline btn hover:bg-secondary hover:text-white "><CgProfile /></div>


            </div>
          </div>
        </div>
        <div className="card bg-base-100  shadow-sm">
          <figure>
            <img src={safat} alt="Safat image" className='h-70 rounded-xl' />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> Safat Bin Mannan <div className="badge badge-secondary">C233130</div>
            </h2><p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div className="card-actions justify-end mt-7">
              <div className="badge badge-outline btn hover:bg-secondary hover:text-white"><IoCall/></div>
              <div className="badge badge-outline btn hover:bg-secondary hover:text-white "><FaLinkedinIn /></div>
              <div className="badge badge-outline btn hover:bg-secondary hover:text-white"><FaFacebook/></div>
              <div className="badge badge-outline btn hover:bg-secondary hover:text-white "><CgProfile /></div>


            </div>
          </div>
        </div>
        <div className="card bg-base-100  shadow-sm">
          <figure>
            <img src={shuvo} alt="Shuvo image" className='h-70 rounded-xl' />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> Riajul Haque <div className="badge badge-secondary">C233157</div>
            </h2><p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div className="card-actions justify-end mt-7">
              <div className="badge badge-outline btn hover:bg-secondary hover:text-white"><IoCall/></div>
              <div className="badge badge-outline btn hover:bg-secondary hover:text-white "><a href="https://www.linkedin.com/in/md-riajul-haque/"><FaLinkedinIn /></a></div>
              <div className="badge badge-outline btn hover:bg-secondary hover:text-white"><a href="https://www.facebook.com/shuvo.reajul.3"><FaFacebook/></a></div>
              <div className="badge badge-outline btn hover:bg-secondary hover:text-white "><a href="https://riajulhoque.github.io/riajulprotfolio/"><CgProfile /></a></div>


            </div>
          </div>
        </div>
      </div>
      {/* team mate details ends here*/}

      {/* Hiring section starts here */}
      <div className="HiringForJob flex [@media(max-width:800px)]:block">
        <div className="hiringImg [@media(min-width:800px)]:hidden">
          <img src={Hiring2} alt="" />
        </div>
        <div className="info w-[70%] mt-20 ml-15">
          <h2 className='text-4xl font-semibold italic [@media(max-width:800px)]:text-2xl'> Job Seekers :</h2>
          <h3 className='ml-15 w-[75%] text-base mt-7'> Our News Portal is designed to help job seekers find the right opportunity quickly and easily. Whether you’re a student, a fresh graduate, or someone looking to advance in your career, our platform offers verified job postings from trusted companies across multiple industries such as IT, education, finance, and marketing. Users can search for jobs using filters like location, job type, and experience level to find positions that match their skills and interests. Each listing includes detailed information and contact options, allowing applicants to apply directly or through company links provided in the post. We update job listings regularly, so users always have access to the latest openings. With a clean interface and organized categories, our portal simplifies the job search process and helps users take confident steps toward their career goals.</h3>
          <h2 className='text-4xl font-semibold italic mt-10 [@media(max-width:800px)]:text-2xl'> Employers & Companies :</h2>
          <h3 className='ml-15 w-[75%] text-base mt-7'> Our platform offers an effective solution for companies looking to find qualified and motivated employees. Businesses can easily submit job openings that are displayed across relevant categories, helping them reach targeted job seekers. By publishing job offers on our portal, companies gain visibility among a growing user base of readers and applicants who are actively seeking employment. This increases the chances of finding the right candidates faster. In addition, we offer featured job promotions to boost exposure and attract more applicants. Whether you're hiring for a startup or a large organization, our platform provides a simple, cost-effective way to connect with potential employees and build a stronger team.</h3>

        </div>
        <div className="img w-[30%] [@media(max-width:800px)]:hidden "
          style={{
                  // width:"",
                  // height: "700px",
                  backgroundImage:`url(${Hiring})`,
                  backgroundSize:"cover",
                  backgroundRepeat:"no-repeat"
                }}
        ><div className="btn mt-155 ml-45 font-bold pl-11 pr-12 hover:bg-secondary buttonHover">Apply Now !</div>
          
          {/* <img className='' src={Hiring} alt="" /> */}
        </div>
      </div>
      {/* Hiring section ends here */}

      {/* Plan to Earn Revenue starts here */}
      <h2 className='text-4xl font-semibold p-15 text-center'>Plan to Earn Revenue</h2>
      <div className="EarnRevenue grid grid-cols-4 [@media(max-width:800px)]:grid-cols-2 gap-4 pb-20">
        <div className="card bg-base-100  shadow-sm rounded-xl">
          <figure className="px-10 pt-10"><img src={SponsoredArticlePromotions} alt="Shoes" className="rounded-xl shadow-lg" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Promotions</h2>
            <p>Allowing businesses to promote services or products through sponsored articles.</p>
            <div className="mt-6">
              <button className="btn text-orange-950 hover:bg-secondary hover:text-white btn-block">Read More</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm rounded-xl">
          <figure className="px-10 "><img src={Sponsored} alt="Shoes" className="rounded-xl shadow-lg" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Sponsored </h2>
            <p>Allowing businesses to promote services or products through sponsored articles.</p>
            <div className="mt-6">
              <button className="btn text-orange-950 hover:bg-secondary hover:text-white btn-block">Read More</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm rounded-xl">
          <figure className="px-10 pt-10"><img src={GoogleAdd} alt="Shoes" className="rounded-xl h-30" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Google AdSense</h2>
            <p>Displaying ads based on user interests and site traffic.</p>
            <div className="mt-6">
              <button className="btn text-orange-950 hover:bg-secondary hover:text-white btn-block">Read More</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm rounded-xl">
          <figure className="px-10 pt-10 "><img src={AffiliateMarketing} alt="Shoes" className="rounded-xl shadow-lg" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Affiliate Marketing</h2>
            <p>Partnering with companies and earning commissions through referral links.</p>
          <div className="mt-6">
              <button className="btn text-orange-950 hover:bg-secondary hover:text-white btn-block">Read More</button>
            </div>
          </div>
        </div>
        
       

      </div>
      {/* Plan to Earn Revenue ends here*/}
      {/* pro vertion offer starts here*/}
      <h2 className='text-4xl font-semibold p-15 text-center'>Our Pricing & Plans</h2>
      <div className="ProVertion grid grid-cols-3  gap-5 pb-20">
        {/* free */}
        <div className="card  bg-base-100 shadow-sm group ">
          <div className="card-body group-hover:text-white group-hover:bg-[#E8D59E] rounded-xl ">
            {/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
            <div className="flex justify-between">
              <h2 className="text-3xl font-bold">Free</h2>
              <span className="text-xl">$0/mo</span>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              <li><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>High-resolution image generation</span>
              </li>
              <li><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>High-resolution image generation</span>
              </li>
              <li><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>High-resolution image generation</span>
              </li>
              <li className="opacity-50"><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span className="line-through">Real-time collaboration tools</span>
              </li>
              <li className="opacity-50"><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span className="line-through">Real-time collaboration tools</span>
              </li>
              <li className="opacity-50"><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span className="line-through">Real-time collaboration tools</span>
              </li>
              <li className="opacity-50"><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span className="line-through">Real-time collaboration tools</span>
              </li>
              <li className="opacity-50"><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span className="line-through">Real-time collaboration tools</span>
              </li>
              <li className="opacity-50"><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span className="line-through">Real-time collaboration tools</span>
              </li>
              <li className="opacity-50"><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span className="line-through">Real-time collaboration tools</span>
              </li>
              <li className="opacity-50"><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span className="line-through">Real-time collaboration tools</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn badge hover:badge-warning hover:text-white badge-secondary mt-7 p-5 btn-block">Subscribe</button>
            </div>
          </div>
        </div>
        {/* Basic */}
        <div className="card  bg-base-100 shadow-sm group ">
          <div className="card-body group-hover:text-white group-hover:bg-green-400 rounded-xl ">
            {/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
            <div className="flex justify-between">
              <h2 className="text-3xl font-bold">Basic</h2>
              <span className="text-xl">$15/mo</span>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              <li><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>High-resolution image generation</span>
              </li>
              <li><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>High-resolution image generation</span>
              </li>
              <li><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>High-resolution image generation</span>
              </li>
              <li><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>High-resolution image generation</span>
              </li>
              <li><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>High-resolution image generation</span>
              </li>
              <li className="opacity-50"><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span className="line-through">Real-time collaboration tools</span>
              </li>
              <li className="opacity-50"><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span className="line-through">Real-time collaboration tools</span>
              </li>
              <li className="opacity-50"><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span className="line-through">Real-time collaboration tools</span>
              </li>
              <li className="opacity-50"><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span className="line-through">Real-time collaboration tools</span>
              </li>
              <li className="opacity-50"><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span className="line-through">Real-time collaboration tools</span>
              </li>
              <li className="opacity-50"><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span className="line-through">Real-time collaboration tools</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn badge badge-secondary mt-7 p-5 btn-block">Subscribe</button>
            </div>
          </div>
        </div>
        {/* Pro */}
        <div className="card  bg-base-100 shadow-sm group ">
          <div className="card-body group-hover:text-white group-hover:bg-sky-500 rounded-xl ">
            <span className="badge badge-xs badge-warning">Most Popular</span>
            <div className="flex justify-between">
              <h2 className="text-3xl font-bold">Premium</h2>
              <span className="text-xl">$20/mo</span>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              <li><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>High-resolution image generation</span>
              </li>
              <li><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>High-resolution image generation</span>
              </li>
              <li><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>High-resolution image generation</span>
              </li>
              <li><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>High-resolution image generation</span>
              </li>
              <li><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>High-resolution image generation</span>
              </li>
              <li><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>High-resolution image generation</span>
              </li>
              <li><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>High-resolution image generation</span>
              </li>
              <li><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>High-resolution image generation</span>
              </li>
              <li><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>High-resolution image generation</span>
              </li>
              <li><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>High-resolution image generation</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn badge badge-secondary mt-7 p-5 btn-block">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      {/* pro vertoin offer */}
    </div>
  );
};

export default AboutUs;