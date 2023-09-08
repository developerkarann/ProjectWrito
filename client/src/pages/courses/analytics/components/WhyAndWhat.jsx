import React from 'react';
import why from '../../../../assets/courses/why.jpg'
import what from '../../../../assets/courses/what.jpg'
import { BsShieldCheck } from 'react-icons/bs';

const WhyAndWhat = () => {
        return (
                <div>
                        <div>
                                <div className="md:flex">
                                        <div className="md:w-1/2 px-3 md:pl-16">
                                                <h1 className="text-3xl md:text-5xl font-bold">Why <span className='text-pink'>learn</span> Data Science?</h1>
                                                <br />

                                                <div className='pl-10 md:pl-0'>
                                                        <div className='flex gap-x-3'>
                                                                <div>
                                                                        <BsShieldCheck className="bg-[#ee4962] text-white p-[8px] md:p-[10px] rounded-2xl w-[35px] h-[35px] md:w-[40px] md:h-[40px]"></BsShieldCheck>
                                                                </div>
                                                                <div>
                                                                        <h1 className="text-xl md:text-2xl font-bold">Unleash Data Insights</h1>
                                                                        <p className="mt-1 md:mt-2 text-gray">Learn Data Science to derive valuable insights, make informed decisions, and tell stories from data.</p>
                                                                </div>
                                                        </div>
                                                        <br />

                                                        <div className='flex gap-x-3'>
                                                                <div>
                                                                        <BsShieldCheck className="bg-[#ee4962] text-white p-[8px] md:p-[10px] rounded-2xl w-[35px] h-[35px] md:w-[40px] md:h-[40px]"></BsShieldCheck>
                                                                </div>
                                                                <div>
                                                                        <h1 className="text-xl md:text-2xl font-bold">Thriving Demand in the Job Market</h1>
                                                                        <p className="mt-1 md:mt-2 text-gray">Data Science skills are highly sought after by companies across industries, opening doors to rewarding careers.</p>
                                                                </div>
                                                        </div>
                                                        <br />

                                                        <div className='flex gap-x-3'>
                                                                <div>
                                                                        <BsShieldCheck className="bg-[#ee4962] text-white p-[8px] md:p-[10px] rounded-2xl w-[35px] h-[35px] md:w-[40px] md:h-[40px]"></BsShieldCheck>
                                                                </div>
                                                                <div>
                                                                        <h1 className="text-xl md:text-2xl font-bold">Fuel Your Analytical Creativity</h1>
                                                                        <p className="mt-1 md:mt-2 text-gray">Data Science empowers you to creatively explore data, identify patterns, and make data-driven decisions.</p>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className='hidden md:w-1/2 md:flex justify-center'>
                                                <img src={why} className="w-[70%]" />
                                        </div>
                                </div>
                        </div>

                        <div className="mt-8 md:mt-12">
                                <div className="md:flex">
                                        <div className="md:w-1/2 px-3 md:pl-16">
                                                <h1 className="text-3xl md:text-5xl font-bold">What <span className='text-pink'>placement assistance</span> will you receive?</h1>
                                                <br />
                                                <div className='pl-10 md:pl-0'>
                                                        <div className='flex gap-x-3'>
                                                                <div>
                                                                        <BsShieldCheck className="bg-[#ee4962] text-white p-[8px] md:p-[10px] rounded-2xl w-[35px] h-[35px] md:w-[40px] md:h-[40px]"></BsShieldCheck>
                                                                </div>
                                                                <div>
                                                                        <h1 className="text-xl md:text-2xl font-bold">Free Placement Prep Training</h1>
                                                                        <p className="mt-1 md:mt-2 text-gray">Learn how to build your resume, make great applications, and ace your interviews.</p>
                                                                </div>
                                                        </div>
                                                        <br />

                                                        <div className='flex gap-x-3'>
                                                                <div>
                                                                        <BsShieldCheck className="bg-[#ee4962] text-white p-[8px] md:p-[10px] rounded-2xl w-[35px] h-[35px] md:w-[40px] md:h-[40px]"></BsShieldCheck>
                                                                </div>
                                                                <div>
                                                                        <h1 className="text-xl md:text-2xl font-bold">Curated internships & jobs</h1>
                                                                        <p className="mt-1 md:mt-2 text-gray">Get internships and fresher jobs as per your preference in your inbox.</p>
                                                                </div>
                                                        </div>
                                                        <br />

                                                        <div className='flex gap-x-3'>
                                                                <div>
                                                                        <BsShieldCheck className="bg-[#ee4962] text-white p-[8px] md:p-[10px] rounded-2xl w-[35px] h-[35px] md:w-[40px] md:h-[40px]"></BsShieldCheck>
                                                                </div>
                                                                <div>
                                                                        <h1 className="text-xl md:text-2xl font-bold">Get highlighted on Internshala</h1>
                                                                        <p className="mt-1 md:mt-2 text-gray">Top performers will be highlighted in their internship & job applications on Internshala</p>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className='md:w-1/2 hidden md:flex justify-center'>
                                                <img src={what} className="w-[80%]" />
                                        </div>
                                </div>
                        </div>

                </div>
        );
};

export default WhyAndWhat;