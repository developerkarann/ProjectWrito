import React from "react";
import Landing from "./components/landing/Landing";
import googleImg from "./images/googleImg.png";
import appleImg from "./images/appleimg.png";
import amazonImg from "./images/amazonImg.png";
import airbnbImg from "./images/airbnbImage.png";
import microsoftImg from "./images/microsoftImg.png";
import youtubeImg from "./images/youtubeImg.png";
import GettingStarted from "./components/steps/GettingStarted";
import MmentorImg from "./images/MmentorImg.png";
import Mentors from "../mentorship/components/Mentors/Mentors"
import RoadMap from "./components/roadmap/RoadMap";
import Steps from "./components/Msteps/Steps";
import "react-multi-carousel/lib/styles.css";
import Section from '../home/components/Section/Section'
import FAQS from "./components/FAQ/FAQS";
import LandingImg from "./images/landing-img.svg";
import "./Entrepreneurship.css";
import StudentReviews from "../mentorship/components/StudentReviews/StudentReviews";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function Mentorship() {
  return (
    <div className="w-min-{370px}">
      <Landing
        heading1="Innovate,"
        heading2="Create,"
        heading3="Thrive:"
        heading4="Entrepreneurship Journey"
        para1='"Fostering Innovation and Leadership: Empowering Entrepreneurs to Transform Ideas into Successful Ventures in our Comprehensive Entrepreneurship Program."'
        button="Let's Start Your Journey"
        para3="Our Mentees Placed At"
        googleImg={googleImg}
        appleImg={appleImg}
        amazonImg={amazonImg}
        airbnbImg={airbnbImg}
        microsoftImg={microsoftImg}
        youtubeImg={youtubeImg}
        MmentorImg={MmentorImg}
        LandingImg={LandingImg}
      />
      
      
      <Section></Section>
      <GettingStarted></GettingStarted>
      <RoadMap />
      <StudentReviews></StudentReviews>
      <Steps />
      <Mentors />
      <FAQS />
    </div>
  );
}

export default Mentorship;
