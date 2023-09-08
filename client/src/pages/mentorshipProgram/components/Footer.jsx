import React from 'react';
import '../../common.css'
import logo from '../../../assets/logo-light.svg'
import { BsArrowRight } from "react-icons/bs";
import { FaArrowUp, FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
        return (
                <div className='bg-[#161616]'>
                        <footer className='md:flex md:py-28 p-4 md:px-10 footer-bg'>
                                <div className='md:w-1/3 px-2 text-gray'>
                                        <div className='flex items-center mb-4'>
                                                <img src={logo} alt="" />
                                        </div>
                                        <p>Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore.</p>
                                        <p><span className='font-semibold'>Add:</span> 70-80 Upper St Norwich NR2</p>
                                        <p><span className='font-semibold'>Call:</span> +01 123 4567 890</p>
                                        <p><span className='font-semibold'>Email:</span> info@eduweb.com</p>
                                </div>

                                <div className='md:flex md:w-1/3 mx-auto'>
                                        <div className='mx-auto px-2 text-gray'>
                                                <h1 className='text-lg md:text-2xl font-bold text-white mb-4'>Online Platform</h1>
                                                <p>About</p>
                                                <p>Courses</p>
                                                <p>Instructor</p>
                                                <p>Events</p>
                                                <p>Instructor Profile</p>
                                                <p>Purchase Guid</p>
                                        </div>

                                        <div className='mx-auto px-2 text-gray'>
                                                <h1 className='text-lg md:text-2xl font-bold text-white mb-4'>Links</h1>
                                                <p>Contact Us</p>
                                                <p>Gallery</p>
                                                <p>News and Articles</p>
                                                <p>FAQ's</p>
                                                <p>Sign in/Register</p>
                                                <p>Coming soon</p>
                                        </div>
                                </div>

                                <div className='md:w-1/3 mx-auto px-2 text-gray'>
                                        <h1 className='text-lg md:text-2xl font-bold text-white mb-4'>Contacts</h1>
                                        <p className='my-2'>Enter your email address to register to our newsletter subscription</p>
                                        <div className='md:flex gap-x-4'>
                                                <input type="email" placeholder="Your email" className="input w-full md:w-[350px]" />
                                                <button className='allBtn px-[30px] bg-transparent py-[11px]'>Subscribe
                                                        <BsArrowRight></BsArrowRight>
                                                </button>
                                        </div>
                                        <div className='flex items-center gap-x-8 mt-8'>
                                                <FaFacebook size={25}></FaFacebook>
                                                <FaTwitter size={25}></FaTwitter>
                                                <FaLinkedin size={25}></FaLinkedin>
                                                <FaInstagramSquare size={25}></FaInstagramSquare>
                                                <FaYoutube size={25}></FaYoutube>
                                        </div>
                                </div>
                        </footer>
                        <div className='relative pb-8'>
                                <hr className='text-slate-300 mb-10' />
                                <h3 className='text-white text-center'>
                                        Copyright 2022 All Rights Reserved by <span className='text-[#1ab79d]'>codewithsadee</span>
                                </h3>
                                <div className='absolute top-1 right-10'>
                                        <FaArrowUp className='text-white p-2 rounded-full bg-color h-12 w-12'></FaArrowUp>
                                </div>
                        </div>
                </div>
        );
};

export default Footer;