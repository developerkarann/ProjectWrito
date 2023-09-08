import React, { useEffect, useRef, useState } from 'react';
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
                <div className='mt-20 md:pb-20'>
                        <div>
                                <h1 className='text-xl md:text-5xl xs:text-2xl  text-blue font-bold flex justify-center mb-6 mt-8'>Frequently Asked <span className='text-pink ml-2 xs:ml-1'>Questions</span></h1>
                        </div>
                        <div className='mx-5 my-7 md:mx-24 xs:mx-3'>
                                <div className='collapseContainer'style={{background:'#fff'}}>
                                        <h1
                                                className='flex p-4 items-center justify-between cursor-pointer'
                                                onClick={toggleHandle1}>
                                                Q1. I have an upcoming interview. Can I take this long-term mentorship package?
                                                {toggle1 ? minus : plus}
                                        </h1>
                                        <div className={`animation ${toggle1 ? 'openCollapse' : ''} collapseContent`} ref={contentRef1}>
                                                <article className='article'>
                                                        <div className="hr-line"></div>
                                                        <p>Yes, absolutely. This program is highly suitable for you if you have an interview coming up. As this mentorship is 1:1 and completely personalised, there are no restrictions on the timeline. Be it 15 days or 1 month, your mentor will plan the timeline and preparation based on your upcoming interview schedule and help you crack it in the best possible manner. If you want to enrol right away to prepare for an upcoming interview, you may select your mentor, make the payment and get started in an instant. For any doubts related to enrolment, please get in touch with us at contactus@writo.live. We’d be happy to help you.</p>
                                                </article>
                                        </div>
                                </div>
                                <div className='collapseContainer my-3 md:my-5'style={{background:'#fff'}}>
                                        <h1
                                                className='flex p-4 items-center justify-between cursor-pointer'
                                                onClick={toggleHandle2}>
                                                Q2. Who are writo mentors?
                                                {toggle2 ? minus : plus}
                                        </h1>
                                        <div className={`animation ${toggle2 ? 'openCollapse' : ''} collapseContent`} ref={contentRef2}>
                                                <article>
                                                        <div className="hr-line"></div>
                                                        <p>Our mentors are top industry experts who are associated with global brands and companies across tiers. They are selected to work as mentors after a thorough screening process. We, at writo, ensure that you always get the best-qualified mentors to guide you.</p>
                                                </article>
                                        </div>
                                </div>
                                <div className='collapseContainer' style={{background:'#fff'}}>
                                        <h1
                                                className='flex p-4 items-center justify-between cursor-pointer'
                                                onClick={toggleHandle3}>
                                                Q3. What are the advantages of interview preparation through mentorship?
                                                {toggle3 ? minus : plus}
                                        </h1>
                                        <div className={`animation ${toggle3 ? 'openCollapse' : ''} collapseContent`} ref={contentRef3}>
                                                <article>
                                                        <div className="hr-line"></div>
                                                        <p>Your mentors can accurately pinpoint your skill gaps and correct them. They encourage and empower you to do better in your career. You can define your career goals clearly with their astute guidance. Moreover, you can build your network, learn the industry nitty-gritty, and also win referrals and recommendations from your mentors who will be truly rooting for your success.</p>
                                                </article>
                                        </div>
                                </div>
                                <div className='collapseContainer my-3 md:my-5' style={{background:'#fff'}}>
                                        <h1
                                                className='flex p-4 items-center justify-between cursor-pointer'
                                                onClick={toggleHandle4}>
                                                Q4.What does mentorship till you get your dream job mean?
                                                {toggle4 ? minus : plus}
                                        </h1>
                                        <div className={`animation ${toggle4 ? 'openCollapse' : ''} collapseContent`} ref={contentRef4}>
                                                <article>
                                                        <div className="hr-line"></div>
                                                        <p>It means your mentor will handhold you till you achieve your goal of getting into your dream job. That is what makes your mentor happy. Your mentor will take complete responsibility to prepare you in every aspect. Not leaving your hand till you achieve your goal.</p>
                                                </article>
                                        </div>
                                </div>
                                <div className='collapseContainer' style={{background:'#fff'}}>
                                        <h1
                                                className='flex p-4 items-center justify-between cursor-pointer'
                                                onClick={toggleHandle5}>
                                                Q5. For whom is the long-term 1:1 interview preparation suitable?
                                                {toggle5 ? minus : plus}
                                        </h1>
                                        <div className={`animation ${toggle5 ? 'openCollapse' : ''} collapseContent`} ref={contentRef5}>
                                                <article>
                                                        <div className="hr-line"></div>
                                                        <p>This long-term interview preparation mentorship is suitable for people who want to upgrade their careers and get into their dream job in a strategic manner. Whether you’re a fresher or someone with 10 years of experience, we have the suitable mentors and resources to pave the path for your interview success. writo is India’s first platform that focuses on practising through personalised and customisable mentorship programs that aim at complete and all-rounded interview preparation.</p>
                                                </article>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default FAQS;