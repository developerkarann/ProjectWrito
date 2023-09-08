import React, { useEffect, useRef, useState } from 'react';
import '../../../common.css'
import { FaMinus, FaPlus } from "react-icons/fa";

const Questions = () => {

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
                                                Q1. Who is eligible to participate in the program?
                                                {toggle1 ? minus : plus}
                                        </h1>
                                        <div className={`animation ${toggle1 ? 'openCollapse' : ''} collapseContent`} ref={contentRef1}>
                                                <article className='article'>
                                                        <div className="hr-line"></div>
                                                        <p>The program is open to all college students who are eager to enhance their skills, gain practical work experience, and develop leadership abilities. We welcome students from various fields and backgrounds to join our transformative journey.</p>
                                                </article>
                                        </div>
                                </div>
                                <div className='collapseContainer my-3 md:my-5'>
                                        <h1
                                                className='flex p-6 items-center justify-between cursor-pointer'
                                                onClick={toggleHandle2}>
                                                Q2. How will participating in the program benefit my future career?
                                                {toggle2 ? minus : plus}
                                        </h1>
                                        <div className={`animation ${toggle2 ? 'openCollapse' : ''} collapseContent`} ref={contentRef2}>
                                                <article>
                                                        <div className="hr-line"></div>
                                                        <p>The program offers a unique blend of hands-on experiences, leadership opportunities, and expert mentorship that are designed to supercharge your skillset and accelerate your career growth. By engaging in real-world projects and honing essential skills, you'll gain a competitive edge and be well-prepared to excel in your chosen field.</p>
                                                </article>
                                        </div>
                                </div>
                                <div className='collapseContainer'>
                                        <h1
                                                className='flex p-6 items-center justify-between cursor-pointer'
                                                onClick={toggleHandle3}>
                                                Q3. What type of mentorship and support will I receive throughout the program?
                                                {toggle3 ? minus : plus}
                                        </h1>
                                        <div className={`animation ${toggle3 ? 'openCollapse' : ''} collapseContent`} ref={contentRef3}>
                                                <article>
                                                        <div className="hr-line"></div>
                                                        <p>The program is committed to providing personalized mentorship and support. You'll be guided by a team of industry experts and professionals who will offer insights, advice, and guidance as you navigate your projects and leadership roles. Regular check-ins, workshops, and resources are in place to ensure you have the support you need.</p>
                                                </article>
                                        </div>
                                </div>
                                <div className='collapseContainer my-3 md:my-5'>
                                        <h1
                                                className='flex p-6 items-center justify-between cursor-pointer'
                                                onClick={toggleHandle4}>
                                                Q4. How does the leadership aspect of the program work?
                                                {toggle4 ? minus : plus}
                                        </h1>
                                        <div className={`animation ${toggle4 ? 'openCollapse' : ''} collapseContent`} ref={contentRef4}>
                                                <article>
                                                        <div className="hr-line"></div>
                                                        <p>In the program, you'll have the opportunity to lead junior interns as part of your experiential learning. As you progress, you'll take on increasing leadership responsibilities, enhancing your communication, management, and decision-making skills. The program is structured to provide a gradual and supportive transition into leadership roles.</p>
                                                </article>
                                        </div>
                                </div>
                                <div className='collapseContainer'>
                                        <h1
                                                className='flex p-6 items-center justify-between cursor-pointer'
                                                onClick={toggleHandle5}>
                                                Q5. What types of projects and practical experiences can I expect to work on?
                                                {toggle5 ? minus : plus}
                                        </h1>
                                        <div className={`animation ${toggle5 ? 'openCollapse' : ''} collapseContent`} ref={contentRef5}>
                                                <article>
                                                        <div className="hr-line"></div>
                                                        <p>The program offers a diverse range of projects spanning various industries and challenges. From web development and data analytics to machine learning and more, you'll engage in real-world tasks that blend theory with practical application. These projects are designed to empower you with skills that are directly transferable to your future career.</p>
                                                </article>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Questions;