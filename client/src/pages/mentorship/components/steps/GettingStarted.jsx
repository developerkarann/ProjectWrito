import React from "react";
import '../../style.css'
import { FaLongArrowAltRight } from "react-icons/fa";

const GettingStarted = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <h1 className="text-center text-3xl md:text-5xl font-bold">Getting <span className="text-pink">Started</span> It's <span className="text-pink">Easy</span></h1>
      
      
      <div data-aos="fade-up" className="grid md:grid-cols-3 gap-x-4 gap-y-8 mt-10">
        
        
        <div className="card card-compact pt-5 pb-10 md:w-96 mx-8 md:mx-auto course-card-shadow">
          <div className="pl-8 pt-4 py-5">
            <p className="rounded-full flex justify-center items-center text-white font-bold bg-[#1ab79d] w-[70px] h-[70px]">01 </p>
          </div>
          <div className='card-body'>
            <p className="text-xl md:text-2xl pb-20 px-4">Shortlist Your Mentor acording to your preferences</p>
          </div>
        </div>

        <div className="card card-compact pt-5 pb-10 md:w-96 mx-8 md:mx-auto course-card-shadow">
          <div className="pl-8 pt-4 py-5">
            <p className="rounded-full flex justify-center items-center text-white font-bold bg-[#1ab79d] w-[70px] h-[70px]">02 </p>
          </div>
          <div className='card-body'>
            <p className="text-xl md:text-2xl pb-20 px-4">Book a free trial session to see how the mentor can help you</p>
          </div>
        </div>

        <div className="card card-compact pt-5 pb-10 md:w-96 mx-8 md:mx-auto course-card-shadow">
          <div className="pl-8 pt-4 py-5">
            <p className="rounded-full flex justify-center items-center text-white font-bold bg-[#1ab79d] w-[70px] h-[70px]">03 </p>
          </div>
          <div className='card-body'>
            <p className="text-xl md:text-2xl pb-20 px-4">Start preparing via 1:1 long term mentorship with your mentor</p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default GettingStarted;
