import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import { HiOutlineX } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import mern from '../../assets/navbar/mern-stack.svg'
import cProgram from '../../assets/navbar/c-language.svg'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/navbar/logo.svg'

const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const [largeToggle, setLargeToggle] = useState(false)

    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label onClick={() => setToggle(!toggle)} tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className={`${toggle ? 'block' : 'hidden'} menu dropdown-content mt-3 z-[5] shadow bg-base-100 rounded-box`}>
                            <div>
                                {/* <p className='text-right'>XX</p> */}
                                <div className='text-right p-3'>
                                    <button onClick={() => setToggle(!toggle)}>
                                        <HiOutlineX size={25} className='text-pink'></HiOutlineX>
                                    </button>
                                </div>
                                <div>
                                    <li><a>Community</a></li>
                                    <li>
                                        <a>Courses</a>
                                        <ul className="p-2">
                                            <li onClick={() => setToggle(!toggle)}><NavLink to="/android" className={({ isActive }) => (isActive ? 'bg-[#1ab79d]' : '')}>Android Development</NavLink></li>
                                            <li onClick={() => setToggle(!toggle)}><NavLink to="/python" className={({ isActive }) => (isActive ? 'bg-[#1ab79d]' : '')}>Python Development</NavLink></li>
                                            <li onClick={() => setToggle(!toggle)}><NavLink to="/analytics" className={({ isActive }) => (isActive ? 'bg-[#1ab79d]' : '')}>Analytics and data science</NavLink></li>
                                            <li onClick={() => setToggle(!toggle)}><NavLink to="/mern" className={({ isActive }) => (isActive ? 'bg-[#1ab79d]' : '')}>MERN stack Development</NavLink></li>
                                            <li onClick={() => setToggle(!toggle)}><NavLink to="/dsa" className={({ isActive }) => (isActive ? 'bg-[#1ab79d]' : '')}>Data structures and algorithms</NavLink></li>
                                            <li onClick={() => setToggle(!toggle)}><NavLink to="/machineLearning" className={({ isActive }) => (isActive ? 'bg-[#1ab79d]' : '')}>Machine Learning</NavLink></li>
                                        </ul></li>
                                    <li onClick={() => setToggle(!toggle)}><NavLink to="/mentorship" className={({ isActive }) => (isActive ? 'bg-[#1ab79d]' : '')}>Mentorship</NavLink></li>
                                    <li onClick={() => setToggle(!toggle)}><NavLink to="/entrepreneurship" className={({ isActive }) => (isActive ? 'bg-[#1ab79d]' : '')}>Entrepreneurship</NavLink></li>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <Link to="/">
                        <img className='w-16 relative ml-10' src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className="menu-horizontal px-1">
                        <ul className='flex gap-x-10 items-center'>


                            <li onMouseOut={() => setLargeToggle(false)} onMouseOver={() => setLargeToggle(true)}>
                                <div className="courseDropdown">
                                    <a href="#courses" className="font-semibold flex my-5 items-center gap-x-1 hover:text-[#0bb09f]">
                                        Courses
                                        <RiArrowDownDoubleFill></RiArrowDownDoubleFill>
                                    </a>
                                    <div className={`${largeToggle ? 'block' : 'hidden'} courseDropdown-content p-5 pr-0`}>
                                        <div className="md:flex md:w-[650px] w-full">
                                            <div className="md:w-[50%] md:pr-16">
                                                <h4 className="font-semibold text-black text-[20px]">Recommended courses</h4>
                                                <p>The most in demand courses at the <br /> moment</p>
                                                <Link to="/mern">
                                                    <div
                                                        onClick={() => setLargeToggle(false)}
                                                        className="w-full h-[60px] border-[1px] rounded-lg hover:border-orange-500 mt-4 flex items-center justify-between">
                                                        <p className="pl-2">MERN stack</p>
                                                        <img className="h-[60%] w-[60%] -mr-12" src={mern} alt="" srcSet=""></img>
                                                    </div>
                                                </Link>
                                                <Link to="/dsa">
                                                    <div
                                                        onClick={() => setLargeToggle(false)}
                                                        className="w-full h-[60px] border-[1px] rounded-lg hover:border-orange-500 mt-6 flex items-center justify-between">
                                                        <p className="pl-2">Basics of C++ with Data Structures and Algorithms</p>
                                                        <img className="h-[60%] w-[60%]" src={cProgram} alt="" srcSet=""></img>
                                                    </div>
                                                </Link>
                                            </div>

                                            {/* <!-- child dropdown --> */}
                                            <div className="md:w-[50%]">
                                                <h4 className="font-semibold text-black text-[20px]">All courses</h4>
                                                <p>Explore our wide range of courses</p>
                                                <div>
                                                    <div className="mt-8">
                                                        <div className="childdropdown">
                                                            <button onClick={() => setLargeToggle(false)} className="flex items-center gap-x-3">
                                                                <img src="https://files.codingninjas.com/Group-2.svg" alt=""></img>
                                                                <Link to="/dsa"><p className="childdropbtn">Data structures and algorithms</p></Link>
                                                                {/* <p className="childdropbtn pl-4">Data structures and algorithms</p> */}
                                                                {/* <img src="https://www.codingninjas.com/assets-landing/icons/open-dropdown-icon.svg" alt=""></img> */}
                                                            </button>
                                                            <div className="childdropdown-content p-4">
                                                                <p className="sub-heading">Data structures and algorithms</p>
                                                                <a href="#">
                                                                    <div className="flex items-center justify-between">
                                                                        <p>Basics of Python with Data Structures and Algorithms</p>
                                                                        <img src="https://files.codingninjas.com/python-11712.svg" alt=""></img>
                                                                    </div>
                                                                </a>
                                                                <a href="#">
                                                                    <div className="flex items-center justify-between">
                                                                        <p>Basics of Java with Data Structures and Algorithms</p>
                                                                        <img src="https://files.codingninjas.com/java-11713.svg" alt=""></img>
                                                                    </div>
                                                                </a>
                                                                <a href="#">
                                                                    <div className="flex items-center justify-between">
                                                                        <p>Basics of C++ with Data Structures and Algorithms</p>
                                                                        <img src="https://files.codingninjas.com/c-11714.svg" alt=""></img>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className="childdropdown">
                                                            <button onClick={() => setLargeToggle(false)} className="flex items-center gap-x-3">
                                                                <img src="https://files.codingninjas.com/Group%203738.svg" alt=""></img>
                                                                <Link to="/android"><p className="childdropbtn">Android Development</p></Link>
                                                                {/* <p className="childdropbtn pl-4">Competitive Programming</p> */}
                                                                {/* <img src="https://www.codingninjas.com/assets-landing/icons/open-dropdown-icon.svg" alt=""></img> */}
                                                            </button>
                                                            <div className="childdropdown-content p-4">
                                                                <p className="sub-heading">Competitive Programming</p>
                                                                <a href="#">
                                                                    <div className="flex items-center justify-between">
                                                                        <p>Competitive Programming</p>
                                                                        <img src="https://files.codingninjas.com/competitive-programming-11703.svg" alt=""></img>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className="childdropdown">
                                                            <button onClick={() => setLargeToggle(false)} className="flex items-center gap-x-3">
                                                                <img src="https://files.codingninjas.com/interview-prep-old-11731.svg" alt=""></img>
                                                                {/* <p className="childdropbtn pl-5">Interview Preparation</p> */}
                                                                <Link to="/python"><p className="childdropbtn">Python Development</p></Link>
                                                                {/* <img src="https://www.codingninjas.com/assets-landing/icons/open-dropdown-icon.svg" alt=""></img> */}
                                                            </button>
                                                            <div className="childdropdown-content p-4">
                                                                <p className="sub-heading">Goal Based</p>
                                                                <a href="#">
                                                                    <div className="flex items-center justify-between">
                                                                        <p>Product Companies Interview Prep</p>
                                                                        <img src="https://files.codingninjas.in/service-based-companies-14528.svg" alt=""></img>
                                                                    </div>
                                                                </a>
                                                                <p className="sub-heading">Skill Based</p>
                                                                <a href="#">
                                                                    <div className="flex items-center justify-between">
                                                                        <p>System Design</p>
                                                                        <img src="https://files.codingninjas.com/system-design-12695.svg" alt=""></img>
                                                                    </div>
                                                                </a>
                                                                <a href="#">
                                                                    <div className="flex items-center justify-between">
                                                                        <p>Database Management System (DBMS) course</p>
                                                                        <img src="https://files.codingninjas.com/os-dbms-12694.svg" alt=""></img>
                                                                    </div>
                                                                </a>
                                                                <a href="#">
                                                                    <div className="flex items-center justify-between">
                                                                        <p>Operating System</p>
                                                                        <img src="https://files.codingninjas.com/operating-system-12696.svg" alt=""></img>
                                                                    </div>
                                                                </a>
                                                                <a href="#">
                                                                    <div className="flex items-center justify-between">
                                                                        <p>Aptitude Preparation</p>
                                                                        <img src="https://files.codingninjas.com/aptitude-12693.svg" alt=""></img>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className="childdropdown">
                                                            <button onClick={() => setLargeToggle(false)} className="flex items-center gap-x-3">
                                                                <img src="https://files.codingninjas.com/Group.svg" alt=""></img>
                                                                {/* <p className="childdropbtn pl-5">Analytics & Data Science</p> */}
                                                                <Link to="/analytics"><p className="childdropbtn">Analytics & Data Science</p></Link>
                                                                {/* <img src="https://www.codingninjas.com/assets-landing/icons/open-dropdown-icon.svg" alt=""></img> */}
                                                            </button>
                                                            <div className="childdropdown-content p-4">
                                                                <p className="sub-heading">Analytics
                                                                </p>
                                                                <a href="#">
                                                                    <div className="flex items-center justify-between">
                                                                        <p>Data Analytics Course</p>
                                                                        <img className="h-12 w-12" src="https://files.codingninjas.in/group-7241-15644.png" alt=""></img>
                                                                    </div>
                                                                </a>
                                                                <p className="sub-heading">Data Science & Machine Learning
                                                                </p>
                                                                <a href="#">
                                                                    <div className="flex items-center justify-between">
                                                                        <p>Machine Learning</p>
                                                                        <img src="https://files.codingninjas.com/ml-11707.svg" alt=""></img>
                                                                    </div>
                                                                </a>
                                                                <a href="#">
                                                                    <div className="flex items-center justify-between">
                                                                        <p>Data Science & Machine Learning</p>
                                                                        <img src="https://files.codingninjas.com/data-science-11708.svg" alt=""></img>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className="childdropdown">
                                                            <button onClick={() => setLargeToggle(false)} className="flex items-center gap-x-3">
                                                                <img src="https://files.codingninjas.com/Group-3.svg" alt=""></img>
                                                                {/* <p className="childdropbtn pl-5">Web Development</p> */}
                                                                {/* <p className="childdropbtn pl-5">Web Development</p> */}
                                                                <Link to="/mern"><p className="childdropbtn">MERN stack Development</p></Link>
                                                                {/* <img src="https://www.codingninjas.com/assets-landing/icons/open-dropdown-icon.svg" alt=""></img> */}
                                                            </button>
                                                            <div className="childdropdown-content p-4">
                                                                <p className="sub-heading">Full Stack</p>
                                                                <a href="#">
                                                                    <div className="flex items-center justify-between">
                                                                        <p>MERN stack</p>
                                                                        <img src="https://files.codingninjas.com/mern-11710.svg" alt=""></img>
                                                                    </div>
                                                                </a>
                                                                <p className="sub-heading">Front-End</p>
                                                                <a href="#">
                                                                    <div className="flex items-center justify-between">
                                                                        <p>Frontend web dev - React</p>
                                                                        <img src="https://files.codingninjas.com/react-11709.svg" alt=""></img>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className="childdropdown">
                                                            <button onClick={() => setLargeToggle(false)} className="flex items-center justify-between">
                                                                <img src="https://www.codingninjas.com/assets-landing/icons/cc-header-course-icon.svg"
                                                                    alt=""></img>
                                                                <p className="childdropbtn pl-5">Career Camp <br /> <span className="text-gray-500 text-[14px]">An
                                                                    extensive job assistance bootcamp</span> </p>
                                                                {/* <img src="https://www.codingninjas.com/assets-landing/icons/open-dropdown-icon.svg" alt=""></img> */}
                                                            </button>
                                                            <div className="childdropdown-content p-4">
                                                                <div>
                                                                    <div className="flex items-center gap-x-4">
                                                                        <img src="https://www.codingninjas.com/assets-landing/icons/header-cc-rupee.svg" alt=""></img>
                                                                        <h3 className="font-semibold text-lg">Average CTC of 9 LPA</h3>
                                                                    </div>
                                                                </div>
                                                                <div className="my-3">
                                                                    <div className="flex items-center gap-x-4">
                                                                        <img src="https://www.codingninjas.com/assets-landing/icons/header-cc-placement.svg"
                                                                            alt="">
                                                                        </img>
                                                                        <h3 className="font-semibold text-lg">Dedicated placement cell</h3>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="flex items-center gap-x-4">
                                                                        <img src="https://www.codingninjas.com/assets-landing/icons/header-cc-partner.svg"
                                                                            alt="">
                                                                        </img>
                                                                        <h3 className="font-semibold text-lg">170+ hiring partners</h3>
                                                                    </div>
                                                                </div>
                                                                <p className="sub-heading mt-4 mb-3">3 steps to start the Career Camp
                                                                    Freshers</p>
                                                                <div className="text-gray-500">
                                                                    <p>1. Register and pay</p>
                                                                    <p>2. Professional document verification</p>
                                                                    <p>3. Dream career journey begins</p>
                                                                </div>
                                                                <button className="btn mt-8 bg-gradient-to-r from-orange-500 to-orange-400">
                                                                    Know more
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>


                            <li className="">
                                <Link to="/entrepreneurship">
                                    <div className="flex items-center hover:text-[#0bb09f]">
                                        <p className='font-semibold'>Entrepreneurship</p>
                                    </div>
                                </Link>
                            </li>


                            <li className="">
                                <div className="dropdown1">
                                    <a href="#courses" className="font-semibold inline-flex py-5 gap-x-1 gap-y-10 items-center hover:text-[#0bb09f]">
                                        Community
                                        <RiArrowDownDoubleFill></RiArrowDownDoubleFill>
                                    </a>
                                    <div>
                                        <div className="dropdown-content1 bg-[#f1f1f1] rounded-xl">
                                            <div className="p-4">
                                                <div className="md:flex gap-x-8 justify-between">
                                                    <div className='w-[250px]'>
                                                        <div className="flex justify-between cursor-pointer items-center">
                                                            <a href="#events">Events</a>
                                                            <FaArrowRight></FaArrowRight>
                                                        </div>
                                                        <p className='my-4'><a href="#">Sponsorship & Collaborations</a></p>
                                                        <p><a href="#">Campus Ambassador Program</a></p>
                                                    </div>
                                                    <div className='w-[400px]'>
                                                        <h2 className="text-black ps-3 py-6">UPCOMING EVENTS</h2>
                                                        <div className="grid grid-cols-2 gap-4 font-medium">
                                                            <div>
                                                                <img className="w-[180px] h-[80px]" src="https://astrologyfutureeye.com/image/content/career-related-dreams.jpg" alt="" />
                                                                <h3>
                                                                    Master Your Career: The Ultima...
                                                                </h3>
                                                            </div>
                                                            <div>
                                                                <img className="w-[180px] h-[80px]" src="https://bpb-us-w2.wpmucdn.com/sites.udel.edu/dist/7/4534/files/2018/05/how-to-create-a-website-feature-image-e1496943224192-1yzdyp6.jpg"
                                                                    alt="" />
                                                                <h3>
                                                                    Hands-on keys | Sikkim Manipa...
                                                                </h3>
                                                            </div>
                                                            <div>
                                                                <img className="w-[180px] h-[80px]" src="https://media.designrush.com/articles/231707/conversions/information-technology-details.jpg"
                                                                    alt="" />
                                                                <h3>
                                                                    CodeQuest30 -Final Day || IE...
                                                                </h3>
                                                            </div>
                                                            <div>
                                                                <img className="w-[180px] h-[80px]" src="https://blog.vantagecircle.com/content/images/2020/08/technology-in-the-workplace.png" alt="" />
                                                                <h3>
                                                                    Placement Assessment Test -
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <button className="allBtn py-1 px-2">
                                                            View all
                                                        </button>
                                                    </div>
                                                    <div className="space-y-5 w-[400px]">
                                                        <h2 className="text-black font-medium">PAST EVENTS</h2>

                                                        <p>General Aptitude Test || MSIT</p>
                                                        <p>Freshman</p>
                                                        <p>
                                                            Freshman Coding Concepts Series-A x SASI Institute of Technology and Engineering
                                                        </p>
                                                        <p>
                                                            C- Wars Coding Contest || SRM Institute of Science & Technology (ROUND 2) A
                                                        </p>
                                                        <button className="allBtn py-1 px-2">
                                                            View all
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>


                            <li className="">
                                <div className="practice">
                                    <div className='py-5 hover:text-[#0bb09f]'>
                                        <a className='font-semibold' href="#blog">Practice</a>
                                    </div>
                                    <div className="practice-content rounded-lg">
                                        <p className='py-2'>Writo</p>
                                        <a href="#">Contacts</a>
                                        <a href="#">Guided Pats</a>
                                        <a href="#">Code Problems</a>
                                        <a href="#">Interview Experiences</a>
                                        <a href="#">Mock Tests</a>
                                    </div>
                                </div>
                            </li>


                            <li className="">
                                <div>
                                    <div className="flex items-center gap-x-2 hover:text-[#0bb09f]">
                                        <img src="https://www.codingninjas.com/assets-landing/icons/header-cc-partner.svg" alt=""></img>
                                        {/* <p>Mentorship Program</p> */}
                                        <Link to="mentorship"><p className='font-semibold'>Mentorship Program</p></Link>
                                        <button className="mentorshipBtn">new</button>
                                    </div>
                                </div>
                            </li>


                        </ul>
                    </div>
                </div>
                <div className="navbar-end flex gap-x-10">
                    <button className="allBtn py-2 px-4 flex items-center gap-x-1">
                        Login
                        <BsArrowRight></BsArrowRight>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;