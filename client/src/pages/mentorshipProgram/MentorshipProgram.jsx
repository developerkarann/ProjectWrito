import React from 'react';
import '../common.css'
import Questions from './components/Questions';
import WhyMentorship from './components/WhyMentorship';
import HowWorks from './components/HowWorks';
import Banner from './components/Banner';
import LearnCode from './components/LearnCode';

const MentorshipProgram = () => {
        return (
                <div>
                        <div className='max-w-[1400px] mx-auto'>
                                <Banner></Banner>
                                <HowWorks></HowWorks>

                                <div className='mt-16'>
                                        <LearnCode></LearnCode>
                                </div>

                                <div className='my-20'>
                                        <WhyMentorship></WhyMentorship>
                                </div>
                                <Questions></Questions>
                        </div>
                </div>
        );
};

export default MentorshipProgram;