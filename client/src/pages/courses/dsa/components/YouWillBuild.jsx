import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import '../../Courses.css'


const YouWillBuild = () => {
        return (
                <div className='project-section-bg mt-2'>
                        <div>
                                <div>
                                        <div className='pt-8 px-3 text-center'>
                                                <h1 className='text-xl md:text-5xl font-bold'><span className='text-pink'>DATA STRUCTURE AND ALGORITHM</span> C/C++</h1>
                                                <h1 className='mt-3 text-xl md:text-5xl font-bold'>Projects that you <span className='text-pink'>will build</span></h1>
                                        </div>
                                        <div className='mt-4 grid md:grid-cols-3 gap-y-5 md:gap-y-8'>
                                                <div data-aos="fade-up" className="card card-compact md:w-96 mx-8 md:mx-auto course-card-shadow">
                                                        <div className="pl-8 pt-4">
                                                                <img src="https://files.codingninjas.in/phone-26004.svg" alt="Shoes" className="rounded-xl w-[100px] h-[100px]" />
                                                        </div>
                                                        <div className='card-body'>
                                                                <h2 className="card-title my-2">Snakes Game (Arrays)</h2>
                                                                <p>This game is very similar to singly-linked lists, assuming that the snake head is the linked list tail and the snake tail is the linked list head.</p>
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
                                                                <h2 className="card-title my-2">Cash Flow Minimiser</h2>
                                                                <p>Cash flow is the net balance of cash moving into or out of business at a specific time.</p>
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
                                                                <h2 className="card-title my-2">Sudoku Solver (Backtracking)</h2>
                                                                <p>Sudoku is a popular and interesting puzzle solver game often found in the newspaper.</p>
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
                                                                <h2 className="card-title my-2">File Zipper</h2>
                                                                <p>There was a game like vice city where we used to compress and write into CDs and DVDs.</p>
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
                                                                <h2 className="card-title my-2">Map Navigator</h2>
                                                                <p>Everyone is well-known for Google Maps. Google map is an efficient application showing the shortest path from source to destination.</p>
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
                                                                <h2 className="card-title my-2">Knight’s travails</h2>
                                                                <p> A knight’s basic move in chess is two forward steps and one sidestep. </p>
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