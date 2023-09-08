import React from 'react';
import { FaAward, FaBrain, FaChalkboardTeacher, FaCheckDouble, FaHandsWash, FaPen } from "react-icons/fa";

const TrainingWorks = () => {
        return (
                <div className='md:px-24 px-4'>
                        <h1 className='text-center text-2xl md:text-5xl font-bold my-8'>How will your <span className='text-pink'>training</span> work?</h1>
                        <div className='grid grid-cols-2 gap-y-8'>
                                <div data-aos="fade-up" className='md:flex items-center md:w-[400px] gap-x-2 mx-auto'>
                                        <div className='flex justify-center'>
                                                <FaChalkboardTeacher className='bg-[#ee4962] p-4 h-12 w-12 md:h-16 md:w-16 rounded-3xl text-white' size={30}></FaChalkboardTeacher>
                                        </div>
                                        <div className='text-center md:text-left'>
                                                <h1 className='text-lg font-bold'>Learn concepts</h1>
                                                <p className='text-gray'>Go through training videos to learn concepts</p>
                                        </div>
                                </div>
                                <div data-aos="fade-up" className='md:flex items-center md:w-[400px] gap-x-2 mx-auto'>
                                        <div className='flex justify-center'>
                                                <FaCheckDouble className='bg-[#ee4962] p-4 h-12 w-12 md:h-16 md:w-16 rounded-3xl text-white' size={30}></FaCheckDouble>
                                        </div>
                                        <div className='text-center md:text-left'>
                                                <h1 className='text-lg font-bold'>1:1 doubt solving</h1>
                                                <p className='text-gray'>Get your doubts solved by experts through Q&A forum within 24 hours</p>
                                        </div>
                                </div>
                                <div data-aos="fade-up" className='md:flex items-center md:w-[400px] gap-x-2 mx-auto'>
                                        <div className='flex justify-center'>
                                                <FaBrain className='bg-[#ee4962] p-4 h-12 w-12 md:h-16 md:w-16 rounded-3xl text-white' size={30}></FaBrain>
                                        </div>
                                        <div className='text-center md:text-left'>
                                                <h1 className='text-lg font-bold'>Test yourself</h1>
                                                <p className='text-gray'>Test your knowledge through quizzes & module tests at regular intervals</p>
                                        </div>
                                </div>
                                <div data-aos="fade-up" className='md:flex items-center md:w-[400px] gap-x-2 mx-auto'>
                                        <div className='flex justify-center'>
                                                <FaPen className='bg-[#ee4962] p-4 h-12 w-12 md:h-16 md:w-16 rounded-3xl text-white' size={30}></FaPen>
                                        </div>
                                        <div className='text-center md:text-left'>
                                                <h1 className='text-lg font-bold'>Take final exam</h1>
                                                <p className='text-gray'>Complete your training by taking the final exam</p>
                                        </div>
                                </div>
                                <div data-aos="fade-up" className='md:flex items-center md:w-[400px] gap-x-2 mx-auto'>
                                        <div className='flex justify-center'>
                                                <FaHandsWash className='bg-[#ee4962] p-4 h-12 w-12 md:h-16 md:w-16 rounded-3xl text-white' size={30}></FaHandsWash>
                                        </div>
                                        <div className='text-center md:text-left'>
                                                <h1 className='text-lg font-bold'>Hands-on practice</h1>
                                                <p className='text-gray'>Work on assignments and projects. Use our in-browser IDE for coding practice</p>
                                        </div>
                                </div>
                                <div data-aos="fade-up" className='md:flex items-center md:w-[400px] gap-x-2 mx-auto'>
                                        <div className='flex justify-center'>
                                                <FaAward className='bg-[#ee4962] p-4 h-12 w-12 md:h-16 md:w-16 rounded-3xl text-white' size={30}></FaAward>
                                        </div>
                                        <div className='text-center md:text-left'>
                                                <h1 className='text-lg font-bold'>Get certified</h1>
                                                <p className='text-gray'>Get certified in Web Development upon successful completion of training</p>
                                        </div>
                                </div>
                        </div>

                </div>
        );
};

export default TrainingWorks;