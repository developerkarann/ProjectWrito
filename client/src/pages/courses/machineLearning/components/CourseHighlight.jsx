import React from 'react';
import '../../Courses.css'
import { FaBusinessTime, FaCalendar, FaCertificate, FaGraduationCap, FaHandsHelping, FaLightbulb, FaPhoneAlt, FaProjectDiagram, FaUsers } from "react-icons/fa";

const CourseHighlight = () => {
        return (
                <div className='md:p-12 px-2'>
                        <h1 className='text-center text-2xl md:text-5xl font-bold mb-8'>Course <span className='text-pink'>Highlights</span></h1>
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-y-8'>
                                <div data-aos="fade-up" className='md:flex items-center gap-x-2 mx-auto md:w-[300px]'>
                                        <div className='flex justify-center'>
                                                <FaGraduationCap className='bg-[#ee4962] p-4 h-12 w-12 md:h-16 md:w-16 rounded-3xl text-white' size={30}></FaGraduationCap>
                                        </div>
                                        <div className='text-center md:text-left'>
                                                <h1 className='text-lg font-bold'>Learn Online</h1>
                                                <p className='text-gray'>At your own schedule</p>
                                        </div>
                                </div>
                                <div data-aos="fade-up" className='md:flex items-center gap-x-2 mx-auto md:w-[300px]'>
                                        <div className='flex justify-center'>
                                                <FaCertificate className='bg-[#ee4962] p-4 h-12 w-12 md:h-16 md:w-16 rounded-3xl text-white' size={30}></FaCertificate>
                                        </div>
                                        <div className='text-center md:text-left'>
                                                <h1 className='text-lg font-bold'>Certificate Of Training</h1>
                                                <p className='text-gray'>From Internshala Trainings</p>
                                        </div>
                                </div>
                                <div data-aos="fade-up" className='md:flex items-center gap-x-2 mx-auto md:w-[300px]'>
                                        <div className='flex justify-center'>
                                                <FaUsers className='bg-[#ee4962] p-4 h-12 w-12 md:h-16 md:w-16 rounded-3xl text-white' size={30}></FaUsers>
                                        </div>
                                        <div className='text-center md:text-left'>
                                                <h1 className='text-lg font-bold'>Beginner friendly</h1>
                                                <p className='text-gray'>No prior knowledge required</p>
                                        </div>
                                </div>
                                <div data-aos="fade-up" className='md:flex items-center gap-x-2 mx-auto md:w-[300px]'>
                                        <div className='flex justify-center'>
                                                <FaPhoneAlt className='bg-[#ee4962] p-4 h-12 w-12 md:h-16 md:w-16 rounded-3xl text-white' size={30}></FaPhoneAlt>
                                        </div>
                                        <div className='text-center md:text-left'>
                                                <h1 className='text-lg font-bold'>Mobile friendly</h1>
                                                <p className='text-gray'>No laptop? No problem</p>
                                        </div>
                                </div>
                                <div data-aos="fade-up" className='md:flex items-center gap-x-2 mx-auto md:w-[300px]'>
                                        <div className='flex justify-center'>
                                                <FaProjectDiagram className='bg-[#ee4962] p-4 h-12 w-12 md:h-16 md:w-16 rounded-3xl text-white' size={30}></FaProjectDiagram>
                                        </div>
                                        <div className='text-center md:text-left'>
                                                <h1 className='text-lg font-bold'>Projects</h1>
                                                <p className='text-gray'>For hands-on practice</p>
                                        </div>
                                </div>
                                <div data-aos="fade-up" className='md:flex items-center gap-x-2 mx-auto md:w-[300px]'>
                                        <div className='flex justify-center'>
                                                <FaCalendar className='bg-[#ee4962] p-4 h-12 w-12 md:h-16 md:w-16 rounded-3xl text-white' size={30}></FaCalendar>
                                        </div>
                                        <div className='text-center md:text-left'>
                                                <h1 className='text-lg font-bold'>8 weeks duration</h1>
                                                <p className='text-gray'>1 hr/day (flexible schedule)</p>
                                        </div>
                                </div>
                                <div data-aos="fade-up" className='md:flex items-center gap-x-2 mx-auto md:w-[300px]'>
                                        <div className='flex justify-center'>
                                                <FaHandsHelping className='bg-[#ee4962] p-4 h-12 w-12 md:h-16 md:w-16 rounded-3xl text-white' size={30}></FaHandsHelping>
                                        </div>
                                        <div className='text-center md:text-left'>
                                                <h1 className='text-lg font-bold'>Placement assistance</h1>
                                                <p className='text-gray'>To build your career</p>
                                        </div>
                                </div>
                                <div data-aos="fade-up" className='md:flex items-center gap-x-2 mx-auto md:w-[300px]'>
                                        <div className='flex justify-center'>
                                                <FaLightbulb className='bg-[#ee4962] p-4 h-12 w-12 md:h-16 md:w-16 rounded-3xl text-white' size={30}></FaLightbulb>
                                        </div>
                                        <div className='text-center md:text-left'>
                                                <h1 className='text-lg font-bold'>Doubt clearing</h1>
                                                <p className='text-gray'>Through Q&A forum</p>
                                        </div>
                                </div>
                                <div data-aos="fade-up" className='md:flex items-center gap-x-2 mx-auto md:w-[300px]'>
                                        <div className='flex justify-center'>
                                                <FaBusinessTime className='bg-[#ee4962] p-4 h-12 w-12 md:h-16 md:w-16 rounded-3xl text-white' size={30}></FaBusinessTime>
                                        </div>
                                        <div className='text-center md:text-left'>
                                                <h1 className='text-lg font-bold'>Downloadable content</h1>
                                                <p className='text-gray'>With lifetime access</p>
                                        </div>
                                </div>
                        </div>

                </div>
        );
};

export default CourseHighlight;