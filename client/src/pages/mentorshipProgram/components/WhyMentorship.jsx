import React from 'react';
import '../../common.css'
import thinking from '../../../assets/mentorship/Yes or no.png'

const WhyMentorship = () => {
        return (
                <div>
                        <div className='flex flex-col px-2 md:flex-row-reverse'>
                                <div className='md:w-1/2 flex justify-center'>
                                        <img className='w-[70%] h-[80%]' src={thinking} alt="" />
                                </div>
                                <div className='md:w-1/2'>
                                        <div>
                                                <h1 className='text-xl font-bold md:text-5xl text-blue'>WHY <span className='text-pink'>MENTORSHIP</span> ?</h1>
                                                <p className='text-[16px] md:text-2xl text-gray mt-4'>MENTORSHIP program promotes skill-sharing, knowledge transfer, and a sense of community among interns.</p>
                                        </div>
                                        <div className='mt-8'>
                                                <div className='flex gap-x-4'>
                                                        <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="bg-[#ee4962] shadow-lg text-white p-4 rounded-full w-[50px] h-[65px]">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                                                </svg>
                                                        </div>
                                                        <div>
                                                                <h1 className='text-xl md:text-2xl text-blue font-semibold'>Empowering Interns</h1>
                                                                <p className='text lg md:text-xl text-gray'>Recognizes that interns possess unique talents and allowing interns to become teachers.</p>
                                                        </div>
                                                </div>
                                                <div className='flex gap-x-4 my-6'>
                                                        <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="bg-[#ee4962] shadow-lg text-white p-4 rounded-full w-[50px] h-[65px]">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                                                </svg>
                                                        </div>
                                                        <div>
                                                                <h1 className='text-xl md:text-2xl text-blue font-semibold'>Practical Learning Experience</h1>
                                                                <p className='text lg md:text-xl text-gray'>By teaching their peers, interns develop a deeper understanding of their subject matter. Explaining concepts, answering questions, and guiding others in their learning journey reinforces their own knowledge</p>
                                                        </div>
                                                </div>
                                                <div className='flex gap-x-4'>
                                                        <div>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="bg-[#ee4962] shadow-lg text-white p-4 rounded-full w-[50px] h-[65px]">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                                                </svg>
                                                        </div>
                                                        <div>
                                                                <h1 className='text-xl md:text-2xl text-blue font-semibold'>Dual Benefit of Learning and Earning</h1>
                                                                <p className='text lg md:text-xl text-gray'>Creates a win-win situation for both teaching and learning interns. Learning interns gain access to affordable and personalized learning experiences directly from their peers, who possess practical insights and experiences in the subject matter</p>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default WhyMentorship;