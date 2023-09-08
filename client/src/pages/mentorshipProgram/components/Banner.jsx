import React from 'react';
import '../../common.css'
import { BsArrowRight } from "react-icons/bs";
import learn from '../../../assets/mentorship/Refer a friend-amico.png'

const Banner = () => {
        return (
                <div className='pt-24 px-4'>
                        <h1 className='text-3xl md:text-[70px] text-blue font-bold'>Learn,<span className='text-pink'>Teach</span>,Earn</h1>
                        <div className='flex flex-col md:flex-row-reverse mt-8'>
                                <div className='md:w-1/2 relative md:-top-24 flex justify-center'>
                                        <img className='w-[80%]' src={learn} alt="" />
                                </div>
                                <div className='md:w-1/2'>
                                        <h1 className='text-blue md:text-3xl mt-8 font-bold'>MENTORSHIP Program revolutionizes internships.</h1>
                                        <h1 className='text-gray md:text-2xl mt-3'>We aim to empower learners to share their expertise and earn simultaneously.</h1>
                                        <form className='mt-12'>
                                                <div className="shadow-xl p-2 rounded-lg md:inline-flex items-center text-center">
                                                        <div>
                                                                <input className='px-[20px] py-[10px] rounded-xl outline-none text-xl text-center md:text-left' type="email" name="" placeholder='Enter Email' />
                                                        </div>
                                                        <div className="email-btn flex justify-center">
                                                                <button className='form-btn p-[12px] rounded-[10px]'>Become a trainer
                                                                        <BsArrowRight></BsArrowRight>
                                                                </button>
                                                        </div>
                                                </div>
                                        </form>
                                </div>
                        </div>
                </div>
        );
};

export default Banner;