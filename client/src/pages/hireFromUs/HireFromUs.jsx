import React from 'react';
import Banner from './components/Banner'
import Partners from './components/Partners'
import Brands from './components/Brands'
import Marketing from './components/Marketing'
import Roles from './components/Roles'
import HiringPartners from './components/HiringPartners'
import NewsLetter from './components/NewsLetter'
import WhyChooseUs from './components/WhyChooseUs'
import Skilled from './components/Skilled'
import FAQS from './components/FAQS'

const HireFromUs = () => {
        return (
                <div>
                        <Banner></Banner>
                        <Partners></Partners>
                        <Brands></Brands>
                        <Marketing></Marketing>
                        <Roles></Roles>
                        <HiringPartners></HiringPartners>
                        <NewsLetter></NewsLetter>
                        <WhyChooseUs></WhyChooseUs>
                        <Skilled></Skilled>
                        <FAQS></FAQS>
                </div>
        );
};

export default HireFromUs;