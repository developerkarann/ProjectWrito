import React, { useEffect } from 'react';
import Home from './components/Home';
import CourseHighlight from './components/CourseHighlight';
import YouWillBuild from './components/YouWillBuild';
import WhyAndWhat from './components/WhyAndWhat';
import TrainingWorks from './components/TrainingWorks';
import Questions from './components/Questions';
import CoursesSwiper from '../shared/CoursesSwiper';
import { useLocation } from 'react-router-dom';


const Android = () => {

        let location = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [location]);

        return (
                <div>
                        <div>
                                <Home></Home>
                        </div>
                        <div className='max-w-[1240px] mx-auto md:my-10'>
                                <YouWillBuild></YouWillBuild>
                        </div>
                        <div className='max-w-[1400px] mx-auto mt-12'>
                                <CourseHighlight></CourseHighlight>
                        </div>

                        <div className='max-w-[1400px] mx-auto mt-12'>
                                <WhyAndWhat></WhyAndWhat>
                        </div>

                        <div className='max-w-[1400px] mx-auto mt-12'>
                                <TrainingWorks></TrainingWorks>
                        </div>

                        <div className='max-w-[1400px] mx-auto mt-12'>
                                <Questions></Questions>
                        </div>

                        <div className='max-w-[1400px] mx-auto mt-12'>
                                <CoursesSwiper></CoursesSwiper>
                        </div>
                </div>
        );
};

export default Android;