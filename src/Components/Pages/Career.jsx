import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../Navbar';
import Header from '../Header';
import CNavber from '../../CarrerPage/CNavber';
import CBanner from '../../CarrerPage/CBanner';
import FeaturedCompanies from '../../CarrerPage/FeaturedCompanies';
import SuccessStorys from '../../CarrerPage/SuccessStorys';
import GreatOpportunity from '../../CarrerPage/GreatOpportunity';
import jobCounter from '../../CarrerPage/jobCounter';

const Career = () => {
  const {state} = useNavigation()
  return (
    <div>
      <header>
                <Header></Header>
                <nav className='w-11/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <CNavber></CNavber>
            <CBanner></CBanner>
            <jobCounter></jobCounter>
            <FeaturedCompanies></FeaturedCompanies>
            <SuccessStorys></SuccessStorys>
            <GreatOpportunity></GreatOpportunity>
    </div>
  );
};

export default Career;