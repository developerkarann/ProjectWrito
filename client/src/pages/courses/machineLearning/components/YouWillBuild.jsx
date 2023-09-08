import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import '../../Courses.css'


const YouWillBuild = () => {
        return (
                <div className='project-section-bg mt-2'>
                        <div>
                                <div>
                                        <div className='pt-8 px-3 text-center'>
                                                <h1 className='text-xl md:text-5xl font-bold'><span className='text-pink'>Mastery </span> Machine Learning</h1>
                                                <h1 className='mt-3 text-xl md:text-5xl font-bold'>Projects that you <span className='text-pink'>will build</span></h1>
                                        </div>
                                        <div className='mt-4 grid md:grid-cols-3 gap-y-5 md:gap-y-8'>
                                                <div data-aos="fade-up" className="card card-compact md:w-96 mx-8 md:mx-auto course-card-shadow">
                                                        <div className="pl-8 pt-4">
                                                                <img src="https://files.codingninjas.in/phone-26004.svg" alt="Shoes" className="rounded-xl w-[100px] h-[100px]" />
                                                        </div>
                                                        <div className='card-body'>
                                                                <h2 className="card-title my-2">Build Portfolio Optimization ML</h2>
                                                                <p>Build a machine learning model in R to develop a strategy for building a portfolio for maximized returns.</p>
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
                                                                <h2 className="card-title my-2">BigMart Sales Prediction ML </h2>
                                                                <p>This model helps BigMart understand the properties of products and stores that play an important role in increasing their overall sales.</p>
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
                                                                <h2 className="card-title my-2">Music Recommendation System ML</h2>
                                                                <p>On Netflix or Spotify, based on the movies you've liked, it will show similar movies or songs that you may like.</p>
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
                                                                <h2 className="card-title my-2">Coupon Purchase Prediction</h2>
                                                                <p>This helps generate a better recommendation system so that coupons can be generated more specifically to various customers.</p>
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
                                                                <h2 className="card-title my-2">Fake News Classification</h2>
                                                                <p>A technique to determine fake news by applying methods based on Natural Language Processing are proposed to identify fake news in real-time and prevent the spread of misinformation.</p>
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
                                                                <h2 className="card-title my-2">Speech Emotion Recognition</h2>
                                                                <p>The Speech Emotion Recognition(SER) system was defined, which is a combination of different frameworks and works on the basis of analyzing audio signals to identify emotions.</p>
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