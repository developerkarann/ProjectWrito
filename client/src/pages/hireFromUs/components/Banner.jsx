import React from 'react';
import '../HireFromUs.css'

const Banner = () => {
    return (
        <div className='max-w-[1800px] mx-auto bg-[#f7ede1] relative z-0'>
            <div className='hire-circle md:top-[10%] md:left-[10%]'></div>
            <div className='hire-half-circle bottom-[50%] md:bottom-10'></div>

            <div className='md:px-[180px] md:pt-10 md:pb-20'>
                <div className='flex items-center justify-around'>
                    <div className='flex items-center gap-x-4 md:-ml-28'>
                        <p className='hire-blur-text'>ksdfl</p>
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                    <button className='hire-banner-btn'>More</button>
                </div>
                <div className='md:flex items-center px-4 md:px-0'>
                    <div className='md:w-1/2 md:p-8 z-20 relative'>
                        <h1 className='text-2xl md:text-5xl font-bold'>Hire remote <br />Software Engineers <br />across CEE now.</h1>
                        <p className='my-1 md:my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi temporibus consequuntur quaerat sapiente ad ab. Alias quae ducimus ipsam voluptate!</p>
                        <div className='mt-16 flex items-center gap-x-3'>
                            <p>Lorem, ipsum dolor sit amet</p>
                            <button className='allBtn hire-banner-btn'>Subscribe Now</button>
                        </div>
                    </div>


                    <div className='md:w-1/2 flex flex-col gap-y-10 pt-6 md:pt-0'>
                        <div className='hire-imgOne sameOne relative md:left-32 hire-img-shape'></div>
                        <div className='flex justify-center'>
                            <div className='flex gap-x-4'>
                                <div className='flex flex-col items-end'>
                                    <div className='hire-imgFive sameOne'></div>
                                    <div className='hire-imgThree sameTwo mt-2 hire-img-shape'></div>
                                    <div className='hire-imgSeven sameOne'></div>
                                </div>
                                <div className='relative -mt-10'>
                                    <div className='hire-imgFour sameTwo hire-img-shape'></div>
                                    <div className='hire-imgSix sameOne'></div>
                                    <div className='hire-imgTwo sameTwo hire-img-shape'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Banner;