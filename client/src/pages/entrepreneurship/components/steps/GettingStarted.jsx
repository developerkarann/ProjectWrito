import React from "react";
import '../../Entrepreneurship.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import GettingStartedCard from "./GettingStartedCard";

const GettingStarted = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <h1 className="text-center text-3xl md:text-5xl font-bold">Getting <span className="text-pink">Started</span> It's <span className="text-pink">Easy</span></h1>
      
      
      <div className="grid lg:grid-cols-3 xxs:mb-0 xxs:mx-8 md:mx-8 lg:mx-9">
        <GettingStartedCard
        display="flex"
          heading="Getting started is easy!"
          number="1"
          description="Explore available entrepreneurship programs, considering factors like curriculum, duration, reputation, and cost."
          btn="View Entrepreneurship Programs <FaLongArrowAltRight className='arrowr'></FaLongArrowAltRight>>"
          icon={FaLongArrowAltRight }
        />
        

        <GettingStartedCard
          number="2"
           description="Complete application form with personal info, documents, and essays as required."
          btn="Fill Up Application ->"
          icon={FaLongArrowAltRight }
        />

        <GettingStartedCard
          number="3"
          description="Await acceptance notification, confirm enrollment, and begin the program according to schedule."
          btn="Get Started ->"
          icon={FaLongArrowAltRight }
        />
      </div>
    </div>
  );
};

export default GettingStarted;
