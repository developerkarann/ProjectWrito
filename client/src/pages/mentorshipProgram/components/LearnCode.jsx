import React from 'react';
import learnCode from '../../../assets/learnCode.jpg'
import nodeJS from '../../../assets/nodeJS.png'
import reactJS from '../../../assets/reactJS.png'
import JS from '../../../assets/JS.png'
import { BsArrowRight } from "react-icons/bs";
import '../../common.css'

const LearnCode = () => {
        return (
                <div className='md:flex items-center'>
                        <div className='md:w-1/2 flex justify-center learn-bg'>
                                <div className='relative'>
                                        <img className='w-[80%]' src={learnCode} alt="" />
                                        <div className='flex flex-col items-center absolute top-0 left-[30%]'>
                                                <img className='h-12 w-12' src={reactJS} alt="" />
                                                <span className='px-4 py-2 text-pink rounded-md shadow-2xl font-bold'>146+ Class</span>
                                        </div>
                                        <div className='flex flex-col items-center absolute top-[40%]'>
                                                <img className='h-12 w-12' src={JS} alt="" />
                                                <span className='px-4 py-2 text-pink rounded-md shadow-2xl font-bold'>146+ Class</span>
                                        </div>
                                        <div className='flex flex-col items-center absolute top-[40%] right-[20%]'>
                                                <img className='h-12 w-12' src={nodeJS} alt="" />
                                                <span className='px-4 py-2 text-pink rounded-md shadow-2xl font-bold'>146+ Class</span>
                                        </div>
                                </div>

                        </div>
                        <div className='md:w-1/2 md:px-24 px-4'>
                                <h1 className='text-xl md:text-5xl text-blue font-bold'>Grow you skill and get world class <span className='text-pink'>job</span></h1>
                                <p className='text-gray md:text-xl mt-2 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat minus tempora enim reprehenderit ab voluptatem repellendus vel consectetur! Facilis saepe amet, excepturi voluptatem quas earum cumque id. Ratione, placeat iure cupiditate tempora alias natus fugiat minus reiciendis vitae quod sequi doloribus incidunt ut consequatur accusantium animi ex aperiam. Incidunt!</p>
                                <button className='allBtn'>Enroll now
                                        <BsArrowRight></BsArrowRight>
                                </button>
                        </div>
                </div>
        );
};

export default LearnCode;