import React from 'react';

const GreatOpportunity = () => {
  return (
    <div>
      <div className="GreatOpportunity flex">
        <div>
          <h2 className='text-3xl font-semibold text-blue pl-18 mt-20 p-10'>Find your next great <br />opportunity!</h2>
        </div>
        <div> 
          <p className='text-1xl font-semibold text-blue pl-18 mt-20 p-10'>Join our newsletter and receive the best <br />openings every week on your inbox</p>
        </div>
        <div className='pt-15 mt-15 ml-5 p-10'>
          <label className="input validator ">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
             strokeLinejoin="rounded-xl"
             strokeLinecap="round"
             strokeWidth="2"
             fill="none"
             stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
            </svg>
            <input className='pl-10' type="email" placeholder="Enter valid email " required />
            {/* <div className="subscribe btn rounded-xl mt-10 mb-10"><h2>Subscribe</h2></div> */}
          </label>
          {/* <div className="validator-hint ">Enter valid email address</div> */}
        </div>
      </div>

    </div>
  );
};

export default GreatOpportunity;