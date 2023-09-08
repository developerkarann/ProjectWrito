import React from 'react';
import './Banner.css'
import { BsArrowRight } from "react-icons/bs";

import banner1 from '../../../../assets/home/hero-banner-1.jpg'
import banner2 from '../../../../assets/home/hero-banner-2.jpg'
import banner3 from '../../../../assets/home/contact.jpg'

const Banner = ({ courses }) => {

    const handleCourses = () => {
        courses.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className='banner-bg'>
            <div className='md:flex px-4 py-10 md:px-12 md:py-16 max-w-[1400px] md:mx-auto'>
                <div className='md:w-1/2 px-10 relative md:mt-10 md:px-0'>
                    <h1 className='text-5xl font-bold'>Let's gain skills with <span className='text-pink'>leadership</span> opportunities</h1>
                    <p className='text-lg mt-8'>it's a transformative journey that equips college students with essential skills through immersive hands-on work experiences, dynamic leadership opportunities, and personalized mentorship.</p>
                    <a href="#findCourse">
                        <button onClick={handleCourses} className='allBtn mt-4 flex items-center gap-x-1'>
                            Find Courses
                            <BsArrowRight></BsArrowRight>
                        </button>
                    </a>
                </div>
                <div className='md:w-1/2 home-banner-right flex flex-col items-center justify-center'>
                    <div className='flex my-10 md:my-0 md:relative top-10'>
                        <div className='flex justify-center'>
                            <img className='banner1 w-[80%] h-[80%] md:w-full' src={banner1} alt="" />
                        </div>
                        <div className='flex justify-center md:relative top-20 md:left-12'>
                            <img className='banner2 w-[70%] md:w-full' src={banner2} alt="" />
                        </div>
                    </div>
                    <div className='relative hidden md:block md:right-32'>
                        <img className='banner3' src={banner3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;