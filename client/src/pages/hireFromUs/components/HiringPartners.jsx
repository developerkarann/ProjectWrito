import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../HireFromUs.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import img from '../../../assets/react.svg'

const HiringPartners = () => {
    const [setSwiperRef] = useState(null);

    return (
        <div className='max-w-7xl mx-auto px-2 my-12'>
            <div className='text-center'>
                <h1 className='text-lg md:text-5xl font-bold'>Here's what our <br /> <span className='text-pink'>hiring partners have to say</span></h1>
            </div>
            <div>
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{ clickable: true, }}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                    }}
                    loop={true}
                    speed={1000}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="hiringPartners"
                >
                    <SwiperSlide>
                        <div className='border-t-2 border-[#1ab79d] px-4 py-8 card-shadow'>
                            <div className='flex items-center gap-x-6'>
                                <img className='h-[24px] w-[24px] border-[3px] border-[#1ab79d] rounded-full' src={img} alt="" />
                                <div className='flex flex-col items-start'>
                                    <h3 className='text-semibold'>Mohammad Emran</h3>
                                    <h3>Lorem, ipsum dolor.</h3>
                                    <hr className='w-[200px] h-[2px] bg-[#1ab79d]' />
                                </div>
                            </div>
                            <p className='text-gray text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum illum at quisquam praesentium culpa, dolores voluptas natus. Vel provident fugiat inventore numquam temporibus, tempora aliquam enim sint assumenda officiis laborum.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='border-t-2 border-[#1ab79d] px-4 py-8 card-shadow'>
                            <div className='flex items-center gap-x-6'>
                                <img className='h-[24px] w-[24px] border-[3px] border-[#1ab79d] rounded-full' src={img} alt="" />
                                <div className='flex flex-col items-start'>
                                    <h3 className='text-semibold'>Mohammad Emran</h3>
                                    <h3>Lorem, ipsum dolor.</h3>
                                    <hr className='w-[200px] h-[2px] bg-[#1ab79d]' />
                                </div>
                            </div>
                            <p className='text-gray text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum illum at quisquam praesentium culpa, dolores voluptas natus. Vel provident fugiat inventore numquam temporibus, tempora aliquam enim sint assumenda officiis laborum.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='border-t-2 border-[#1ab79d] px-4 py-8 card-shadow'>
                            <div className='flex items-center gap-x-6'>
                                <img className='h-[24px] w-[24px] border-[3px] border-[#1ab79d] rounded-full' src={img} alt="" />
                                <div className='flex flex-col items-start'>
                                    <h3 className='text-semibold'>Mohammad Emran</h3>
                                    <h3>Lorem, ipsum dolor.</h3>
                                    <hr className='w-[200px] h-[2px] bg-[#1ab79d]' />
                                </div>
                            </div>
                            <p className='text-gray text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum illum at quisquam praesentium culpa, dolores voluptas natus. Vel provident fugiat inventore numquam temporibus, tempora aliquam enim sint assumenda officiis laborum.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='border-t-2 border-[#1ab79d] px-4 py-8 card-shadow'>
                            <div className='flex items-center gap-x-6'>
                                <img className='h-[24px] w-[24px] border-[3px] border-[#1ab79d] rounded-full' src={img} alt="" />
                                <div className='flex flex-col items-start'>
                                    <h3 className='text-semibold'>Mohammad Emran</h3>
                                    <h3>Lorem, ipsum dolor.</h3>
                                    <hr className='w-[200px] h-[2px] bg-[#1ab79d]' />
                                </div>
                            </div>
                            <p className='text-gray text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum illum at quisquam praesentium culpa, dolores voluptas natus. Vel provident fugiat inventore numquam temporibus, tempora aliquam enim sint assumenda officiis laborum.</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default HiringPartners;