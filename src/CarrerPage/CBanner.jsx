import React from 'react';
import CarrerBanner from "../../src/assets/CarrerBanner.png"

const CBanner = () => {
  return (
    <div>
      <div className="CarrerBannerS Flex mb-20" 
      style={{
        width:"",
        height: "700px",
        backgroundImage:`url(${CarrerBanner})`,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat"
      }}>
        <div className="leftC">
          <h2 className='text-9xl font-bold text-sky-500/100 pt-29 pl-18'>Job Fair </h2><br />
          <h3 className='text-5xl font-semibold text-white pl-22'>Find Your ideal job .</h3>
          <input type="text" className="input rounded-xl mt-25 ml-74" placeholder="Find Your ideal Companies. " list="browsers" />
          <datalist id="browsers" >
            <option value="BEXIMCO Group"></option>
            <option value="Square Group"></option>
            <option value="PRAN-RFL Group"></option>
            <option value="ACI Limited"></option>
            <option value="Grameenphone Ltd. "></option>
            <option value="BRAC "></option>
            <option value="Bashundhara Group"></option>
            <option value="Bangladesh Petroleum Corporation "></option>
          </datalist>
        </div>
        {/* <div className="RightC"></div> */}
      </div>
      
    </div>
  );
};

export default CBanner;