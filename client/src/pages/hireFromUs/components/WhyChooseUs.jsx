import React from 'react';
import { FaUsers, FaTasks, FaRegCommentDots } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../HireFromUs.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import one from '../../../assets/nodeJS.png'
import two from '../../../assets/JS.png'
import three from '../../../assets/reactJS.png'

const WhyChooseUs = () => {
        return (
                <div className='max-w-7xl mx-auto'>
                        <div>
                                <div className='text-center'>
                                        <h1 className='text-2xl md:text-5xl font-bold'>Why Choose Us</h1>
                                        <p className='text-xl mt-3'>Clients love our excellency & professionalism</p>
                                </div>
                                <div className='md:flex mt-8 md:mx-12'>
                                        <div className='card-shadow md:w-96 md:mx-0 mx-8 p-10'>
                                                <div className='flex justify-between items-center mb-4'>
                                                        <FaUsers className='text-yellow-400 border-2 rounded-lg p-2 border-yellow-400' size={50}></FaUsers>
                                                        <h1 className='text-lg text-gray font-bold'>Team Approach</h1>
                                                </div>
                                                <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam fugit ullam quia nulla a earum quae eaque architecto expedita aperiam?
                                                </p>
                                        </div>
                                        <div className='card-shadow md:w-96 md:mx-auto mx-8 p-10'>
                                                <div className='flex justify-between items-center mb-4'>
                                                        <FaTasks className='text-blue-400 border-2 rounded-lg p-2 border-blue-400' size={50}></FaTasks>
                                                        <h1 className='text-lg text-gray font-bold'>Proven Process</h1>
                                                </div>
                                                <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam fugit ullam quia nulla a earum quae eaque architecto expedita aperiam?
                                                </p>
                                        </div>
                                        <div className='card-shadow md:w-96 md:mx-0 mx-8 p-10'>
                                                <div className='flex justify-between items-center mb-4'>
                                                        <FaRegCommentDots className='text-green-400 border-2 rounded-lg p-2 border-green-400' size={50}></FaRegCommentDots>
                                                        <h1 className='text-lg text-gray font-bold'>Daily Reporting</h1>
                                                </div>
                                                <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam fugit ullam quia nulla a earum quae eaque architecto expedita aperiam?
                                                </p>
                                        </div>
                                </div>
                        </div>

                        <div className='my-12'>
                                <Swiper
                                        spaceBetween={30}
                                        centeredSlides={true}
                                        autoplay={{
                                                delay: 2500,
                                                disableOnInteraction: false,
                                        }}
                                        pagination={{
                                                clickable: true,
                                        }}
                                        navigation={true}
                                        modules={[Autoplay, Pagination, Navigation]}
                                        className="mySwiper card-shadow"
                                >
                                        <SwiperSlide>
                                                <div className='md:flex md-p-8 items-center justify-center'>
                                                        <div className='md:w-[20%] flex justify-center'>
                                                                <div className='flex flex-col items-center justify-center'>
                                                                        <img src={one} alt="" />
                                                                        <p className='text-gray'>Senior Node.JS developer</p>
                                                                </div>
                                                        </div>
                                                        <div className='md:w-[80%] mt-8 md:mt-0'>
                                                                <p className='md:text-2xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, eum.</p>
                                                        </div>
                                                </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                                <div className='md:flex md-p-8 items-center justify-center'>
                                                        <div className='md:w-[20%] flex justify-center'>
                                                                <div className='flex flex-col items-center justify-center'>
                                                                        <img src={two} alt="" />
                                                                        <p className='text-gray'>Senior JavaScript developer</p>
                                                                </div>
                                                        </div>
                                                        <div className='md:w-[80%] mt-8 md:mt-0'>
                                                                <p className='md:text-2xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, eum.</p>
                                                        </div>
                                                </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                                <div className='md:flex md-p-8 items-center justify-center'>
                                                        <div className='md:w-[20%] flex justify-center'>
                                                                <div className='flex flex-col items-center justify-center'>
                                                                        <img src={three} alt="" />
                                                                        <p className='text-gray'>Senior React.JS developer</p>
                                                                </div>
                                                        </div>
                                                        <div className='md:w-[80%] mt-8 md:mt-0'>
                                                                <p className='md:text-2xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, eum.</p>
                                                        </div>
                                                </div>
                                        </SwiperSlide>
                                </Swiper>
                        </div>

                </div>
        );
};

export default WhyChooseUs;