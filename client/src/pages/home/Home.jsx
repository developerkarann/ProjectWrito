import React, { useRef } from 'react';
import MeetOurExp from './components/expertsPage/MeetOurExp';
import Platform from './components/platformPage/Platform';
import Section from './components/Section/Section';
import CardBase from './components/card/CardBase'
import Banner from './components/banner/Banner';
import Card from './components/card/Card';
import Work from './components/Work/Work';

const Home = () => {

    const courses = useRef(null)
    return (
        <div>
            <div>
                <Banner courses={courses}></Banner>
                <div className='my-12'>
                    <Section></Section>
                </div>
            </div>
            <div className='max-w-7xl mx-auto'>
                <Platform></Platform>
                <Card title={''} ref={courses}></Card>
                <CardBase></CardBase>
            </div>
            <div>
                <MeetOurExp></MeetOurExp>
                <Work></Work>
            </div>
        </div>
    );
};

export default Home;