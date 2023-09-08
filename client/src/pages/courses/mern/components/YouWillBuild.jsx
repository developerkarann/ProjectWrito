import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import '../../Courses.css'


const YouWillBuild = () => {
        return (
                <div className='project-section-bg mt-2'>
                        <div>
                                <div>
                                        <div className='pt-8 px-3 text-center'>
                                                <h1 className='text-xl md:text-5xl font-bold'><span className='text-pink'>MERN stack</span> web development</h1>
                                                <h1 className='mt-3 text-xl md:text-5xl font-bold'>Projects that you <span className='text-pink'>will build</span></h1>
                                        </div>
                                        <div className='mt-4 grid md:grid-cols-3 gap-y-5 md:gap-y-8'>
                                                <div data-aos="fade-up" className="card card-compact md:w-96 mx-8 md:mx-auto course-card-shadow">
                                                        <div className="pl-8 pt-4">
                                                                <img src="https://files.codingninjas.in/phone-26004.svg" alt="Shoes" className="rounded-xl w-[100px] h-[100px]" />
                                                        </div>
                                                        <div className='card-body'>
                                                                <h2 className="card-title my-2">PhotoFolio</h2>
                                                                <p>An online photo album app that allows users to upload, organise, and share their digital photos.</p>
                                                                <div>
                                                                        <button className="allBtn bg-transparent text-black">Learn more<FaLongArrowAltRight></FaLongArrowAltRight> </button>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div data-aos="fade-up" className="card card-compact md:w-96 mx-8 md:mx-auto course-card-shadow">
                                                        <div className="pl-8 pt-4">
                                                                <img src="https://files.codingninjas.in/ipod-project-9419.svg" alt="Shoes" className="rounded-xl w-[100px] h-[100px]" />
                                                        </div>
                                                        <div className='card-body'>
                                                                <h2 className="card-title my-2">iPod</h2>
                                                                <p>Build a clone of iPod nano 5th gen</p>
                                                                <div className='card-actions'>
                                                                        <button className="allBtn bg-transparent text-black">Learn more<FaLongArrowAltRight></FaLongArrowAltRight> </button>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div data-aos="fade-up" className="card card-compact md:w-96 mx-8 md:mx-auto course-card-shadow">
                                                        <div className="pl-8 pt-4">
                                                                <img src="https://files.codingninjas.in/music-app-9425.svg" alt="Shoes" className="rounded-xl w-[100px] h-[100px]" />
                                                        </div>
                                                        <div className='card-body'>
                                                                <h2 className="card-title my-2">Music Player</h2>
                                                                <p>Build and style a music player like Spotify/Youtube Music using HTML and CSS Image</p>
                                                                <div>
                                                                        <button className="allBtn bg-transparent text-black">Learn more<FaLongArrowAltRight></FaLongArrowAltRight> </button>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div data-aos="fade-up" className="card card-compact md:w-96 mx-8 md:mx-auto course-card-shadow">
                                                        <div className="pl-8 pt-4">
                                                                <img src="https://files.codingninjas.in/cart2-1-26001.svg" alt="Shoes" className="rounded-xl w-[100px] h-[100px]" />
                                                        </div>
                                                        <div className='card-body'>
                                                                <h2 className="card-title my-2">BusyBuy</h2>
                                                                <p>A web-based application that allows users to browse and purchase products online</p>
                                                                <div>
                                                                        <button className="allBtn bg-transparent text-black">Learn more<FaLongArrowAltRight></FaLongArrowAltRight> </button>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div data-aos="fade-up" className="card card-compact md:w-96 mx-8 md:mx-auto course-card-shadow">
                                                        <div className="pl-8 pt-4">
                                                                <img src="https://files.codingninjas.in/to-do-list-app-9421.svg" alt="Shoes" className="rounded-xl w-[100px] h-[100px]" />
                                                        </div>
                                                        <div className='card-body'>
                                                                <h2 className="card-title my-2">Todo List App</h2>
                                                                <p>Build a todo list app using Node.js and express.js</p>
                                                                <div>
                                                                        <button className="allBtn bg-transparent text-black">Learn more<FaLongArrowAltRight></FaLongArrowAltRight> </button>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div data-aos="fade-up" className="card card-compact md:w-96 mx-8 md:mx-auto course-card-shadow">
                                                        <div className="pl-8 pt-4">
                                                                <img src="https://files.codingninjas.in/ping-pong-game-26003.svg" alt="Shoes" className="rounded-xl w-[100px] h-[100px]" />
                                                        </div>
                                                        <div className='card-body'>
                                                                <h2 className="card-title my-2">Ping Pong Game</h2>
                                                                <p>Build a vintage game, ping pong, using vanilla Javascript</p>
                                                                <div>
                                                                        <button className="allBtn bg-transparent text-black">Learn more<FaLongArrowAltRight></FaLongArrowAltRight> </button>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default YouWillBuild;