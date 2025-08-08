import React from 'react';
import BookList from './BookList';
import CNavber from './CNavber';

const PreparationGuideline = () => {
  return (
    <div>
      <CNavber></CNavber>
      <h1 className='text-4xl text-green-600 font-semibold p-15 text-center'>Preparation Guidelin Books</h1>
      <BookList></BookList>
    </div>
  );
};

export default PreparationGuideline;