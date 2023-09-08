import React from 'react';
import OtherCourse from '../../../othersCourse/OtherCourse'

const CardBase = () => {
  return (
    <div className='mt-16  md:mt-20 md:mb-20'>
      <h1 className='my-6 mx-5 md:text-center text-2xl md:text-5xl font-bold'>Other <span className='text-pink'>Courses</span></h1>
      <OtherCourse></OtherCourse>
    </div>
  );
};

export default CardBase;