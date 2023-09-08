import React, { useEffect, useRef, useState } from 'react';
import '../../common.css'
import { FaMinus, FaPlus } from "react-icons/fa";

const FAQS = () => {

        const [toggle1, setToggle1] = useState(false);
        const [toggle2, setToggle2] = useState(false);
        const [toggle3, setToggle3] = useState(false);
        const [toggle4, setToggle4] = useState(false);
        const [toggle5, setToggle5] = useState(false);
        const contentRef1 = useRef(null);
        const contentRef2 = useRef(null);
        const contentRef3 = useRef(null);
        const contentRef4 = useRef(null);
        const contentRef5 = useRef(null);

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
                if (contentRef4.current) {
                        contentRef4.current.style.maxHeight = toggle4 ? `${contentRef4.current.scrollHeight}px` : '0';
                }
                if (contentRef5.current) {
                        contentRef5.current.style.maxHeight = toggle5 ? `${contentRef5.current.scrollHeight}px` : '0';
                }
        }, [toggle2, toggle1, toggle3, toggle4, toggle5]);

        const toggleHandle1 = () => {
                setToggle1(!toggle1);
        }
        const toggleHandle2 = () => {
                setToggle2(!toggle2);
        }
        const toggleHandle3 = () => {
                setToggle3(!toggle3);
        }
        const toggleHandle4 = () => {
                setToggle4(!toggle4);
        }
        const toggleHandle5 = () => {
                setToggle5(!toggle5);
        }

        const plus = <>
                <FaPlus></FaPlus></>

        const minus = <>
                <FaMinus></FaMinus></>
        return (
                <div>
                        <div>
                                <h1 className='text-xl md:text-5xl text-blue font-bold flex justify-center mb-6'>Frequently Asked <span className='text-pink ml-2'>Questions</span></h1>
                        </div>
                        <div className='mx-5 md:mx-24'>
                                <div className='collapseContainer'>
                                        <h1
                                                className='flex p-6 items-center justify-between cursor-pointer'
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
                                                className='flex p-6 items-center justify-between cursor-pointer'
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
                                                className='flex p-6 items-center justify-between cursor-pointer'
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
                                <div className='collapseContainer my-3 md:my-5'>
                                        <h1
                                                className='flex p-6 items-center justify-between cursor-pointer'
                                                onClick={toggleHandle4}>
                                                Q4. Who all can participate?
                                                {toggle4 ? minus : plus}
                                        </h1>
                                        <div className={`animation ${toggle4 ? 'openCollapse' : ''} collapseContent`} ref={contentRef4}>
                                                <article>
                                                        <div className="hr-line"></div>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita blanditiis dolorum consectetur dolores neque incidunt dolore perspiciatis officiis id quod.</p>
                                                </article>
                                        </div>
                                </div>
                                <div className='collapseContainer'>
                                        <h1
                                                className='flex p-6 items-center justify-between cursor-pointer'
                                                onClick={toggleHandle5}>
                                                Q5. Who all can participate?
                                                {toggle5 ? minus : plus}
                                        </h1>
                                        <div className={`animation ${toggle5 ? 'openCollapse' : ''} collapseContent`} ref={contentRef5}>
                                                <article>
                                                        <div className="hr-line"></div>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita blanditiis dolorum consectetur dolores neque incidunt dolore perspiciatis officiis id quod.</p>
                                                </article>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default FAQS;