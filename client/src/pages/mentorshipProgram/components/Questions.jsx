import React, { useEffect, useRef, useState } from 'react';
import '../../common.css'
import faq from '../../../assets/mentorship/FAQ.png'
import { FaMinus, FaPlus } from "react-icons/fa";

const Questions = () => {

        const [toggle1, setToggle1] = useState(false);
        const [toggle2, setToggle2] = useState(false);
        const [toggle3, setToggle3] = useState(false);
        const contentRef1 = useRef(null);
        const contentRef2 = useRef(null);
        const contentRef3 = useRef(null);

        useEffect(() => {
                if (contentRef1.current) {
                        contentRef1.current.style.maxHeight = toggle1 ? `${contentRef1.current.scrollHeight}px` : '0';
                }
                if (contentRef2.current) {
                        contentRef2.current.style.maxHeight = toggle2 ? `${contentRef2.current.scrollHeight}px` : '0';
                }
                if (contentRef3.current) {
                        contentRef3.current.style.maxHeight = toggle3 ? `${contentRef3.current.scrollHeight}px` : '0';
                }
        }, [toggle2, toggle1, toggle3]);

        const toggleHandle1 = () => {
                setToggle1(!toggle1);
        }
        const toggleHandle2 = () => {
                setToggle2(!toggle2);
        }
        const toggleHandle3 = () => {
                setToggle3(!toggle3);
        }

        const plus = <>
                <FaPlus></FaPlus></>

        const minus = <>
                <FaMinus></FaMinus></>

        return (
                <div className='md:flex'>
                        <div className='md:w-1/2 hidden md:block'>
                                <img className='w-[80%]' src={faq} alt="" />
                        </div>
                        <div className='md:w-1/2'>
                                <div>
                                        <h1 className='text-xl md:text-5xl text-blue font-bold flex justify-center mb-6'>Frequently Asked <span className='text-pink ml-2'>Questions</span></h1>
                                </div>
                                <div className='mx-5 md:mx-auto'>
                                        <div className='collapseContainer'>
                                                <h1
                                                        className='flex p-2 items-center justify-between cursor-pointer'
                                                        onClick={toggleHandle1}>
                                                        Q1. I am not a student of BAOIAM. Can I still participate?
                                                        {toggle1 ? minus : plus}
                                                </h1>
                                                <div className={`animation ${toggle1 ? 'openCollapse' : ''} collapseContent`} ref={contentRef1}>
                                                        <article className='article'>
                                                                <div className="hr-line"></div>
                                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita blanditiis dolorum consectetur dolores neque incidunt dolore perspiciatis officiis id quod.</p>
                                                        </article>
                                                </div>
                                        </div>
                                        <div className='collapseContainer my-3 md:my-5'>
                                                <h1
                                                        className='flex p-2 items-center justify-between cursor-pointer'
                                                        onClick={toggleHandle2}>
                                                        Q2. How can I track the status of my earning?
                                                        {toggle2 ? minus : plus}
                                                </h1>
                                                <div className={`animation ${toggle2 ? 'openCollapse' : ''} collapseContent`} ref={contentRef2}>
                                                        <article>
                                                                <div className="hr-line"></div>
                                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita blanditiis dolorum consectetur dolores neque incidunt dolore perspiciatis officiis id quod.</p>
                                                        </article>
                                                </div>
                                        </div>
                                        <div className='collapseContainer'>
                                                <h1
                                                        className='flex p-2 items-center justify-between cursor-pointer'
                                                        onClick={toggleHandle3}>
                                                        Q3. Who all can participate?
                                                        {toggle3 ? minus : plus}
                                                </h1>
                                                <div className={`animation ${toggle3 ? 'openCollapse' : ''} collapseContent`} ref={contentRef3}>
                                                        <article>
                                                                <div className="hr-line"></div>
                                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita blanditiis dolorum consectetur dolores neque incidunt dolore perspiciatis officiis id quod.</p>
                                                        </article>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Questions;