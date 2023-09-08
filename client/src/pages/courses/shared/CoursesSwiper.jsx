import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import '../Courses.css'
import { Mousewheel, Pagination } from 'swiper/modules';

const one = 'https://img.freepik.com/premium-photo/indian-programmer-trying-hard-find-solution-when-working-programming-code_274689-19233.jpg'
const two = 'https://media.istockphoto.com/id/1075599562/photo/programmer-working-with-program-code.jpg?s=612x612&w=0&k=20&c=n3Vw5SMbMCWW1YGG6lnTfrwndNQ8B_R4Vw-BN7LkqpA='
const three = 'https://blog.teamtreehouse.com/wp-content/uploads/2014/05/codingconfidence.jpg'


const slideImages = [
        one, two, three
];

const MySwiper = () => {

        const [currentSlide, setCurrentSlide] = useState(0);

        const handleSlideChange = (swiper) => {
                setCurrentSlide(swiper.realIndex);
        };

        return (
                <div className='max-w-7xl md:mx-[25%] mt-[100px] md:mt-24'>
                        <h1 className='text-2xl md:text-5xl font-bold text-center'><span className='text-pink'>Reviews</span> From Students</h1>
                        <h3 className='text-xl md:text-3xl font-bold text-center mb-24 md:mb-12'>Average Rating : 4.5</h3>
                        <div>
                                <div className='swiper-shadow shadow-2xl mx-8 md:mx-0 relative'>
                                        <Swiper
                                                direction={'horizontal'}
                                                slidesPerView={1}
                                                spaceBetween={30}
                                                mousewheel={true}
                                                pagination={{
                                                        clickable: true,
                                                }}
                                                modules={[Mousewheel, Pagination]}
                                                className="coursesSwiper"
                                                onSlideChange={handleSlideChange}
                                                loop={true}
                                                breakpoints={{
                                                        640: {
                                                                direction: 'vertical'
                                                        }
                                                }}
                                        >
                                                <SwiperSlide className='flex flex-col justify-center'>
                                                        <div className='md:pl-36 md:pr-6'>
                                                                <h1 className='text-3xl text-pink font-bold mt-8 md:mt-0'>Emran</h1>
                                                                <h1 className='text-lg text-[#1ab79d] font-semibold'>Deloite</h1>
                                                                <p className='mt-2 text-gray'>My stint with Writo has been great because of my mentors that helped me learn complex and dynamic concepts that were a part of my course. Their Teaching Assistant feature compliments the learning process due to their.</p>
                                                        </div>
                                                </SwiperSlide>
                                                <SwiperSlide className='flex flex-col justify-center'>
                                                        <div className='md:pl-36 md:pr-6'>
                                                                <h1 className='text-3xl text-pink font-bold mt-8 md:mt-0'>Jahangir</h1>
                                                                <h1 className='text-lg text-[#1ab79d] font-semibold'>Microsoft</h1>
                                                                <p className='mt-2 text-gray'>I had signed-up for C++ with Data Structures with Algorithms that featured the basics to the technicalities related to the course. Each topic was very well explained by my faculty a part of my course.</p>
                                                        </div>
                                                </SwiperSlide>
                                                <SwiperSlide className='flex flex-col justify-center'>
                                                        <div className='md:pl-36 md:pr-6'>
                                                                <h1 className='text-3xl text-pink font-bold mt-8 md:mt-0'>Najim</h1>
                                                                <h1 className='text-lg text-[#1ab79d] font-semibold'>Byjus</h1>
                                                                <p className='mt-2 text-gray'> My stint with Coding Ninjas has been great because of my mentors that helped me learn complex and dynamic concepts that were a part of my course. Their Teaching Assistant feature a part of my course.</p>
                                                        </div>
                                                </SwiperSlide>
                                        </Swiper>
                                        <div className='courses-img-shadow absolute top-0 md:top-1/2 left-1/2 md:left-0 transform -translate-x-1/2 -translate-y-1/2 z-10 md:p-8 rounded-[15px] bg-white flex items-center'>
                                                <img
                                                        src={slideImages[currentSlide]}
                                                        alt={`Slide ${currentSlide + 1}`}
                                                        className='w-[500px] h-[120px] rounded-xl md:w-[200px] md:h-[200px]'
                                                />
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default MySwiper;