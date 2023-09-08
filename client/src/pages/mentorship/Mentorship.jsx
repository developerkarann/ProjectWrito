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
import Mentors from "./components/Mentors/Mentors";
import RoadMap from "./components/roadmap/RoadMap";
import StudentReview from "./components/studentReview/StudentReview";
import Steps from "./components/Msteps/Steps";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Section from '../home/components/Section/Section'
import FAQS from "./components/FAQ/FAQS";
import LandingImg from "./images/landing_img.svg";
import "./style.css";
import StudentReviews from "./components/StudentReviews/StudentReviews";
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
        heading1="Your Success,"
        heading2="Our Focus:"
        heading3=" 1:1 "
        heading4="Mentorship Awaits!"
        para1='"Discover a personalized mentorship program designed to guide you towards your goals with expert support and customized strategies."'
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

      {/*       
      <div className=" md:inline-grid md:gap-2 md:grid-row-2 md:grid-flow-col-5 lg:inline-grid mb-8 lg:gap-4 lg:grid-cols-2 lg:grid-rows-2  xxs:flex xxs:flex-col"> */}
      {/* <Carousel
        responsive={responsive}
        arrows={false}
        showDots={true}
        autoPlay={true}
        autoPlaySpeed={2500}
        infinite={true}
        className="craw"
      >
        <StudentReview
          img={MmentorImg}
          name="Sujit Kumar"
          companyname=""
          para='"Harsh used to continuously keep a check on me. If I am doing well mentally. If I am executing my tasks. If I am on the right track"'
          video="https://www.youtube-nocookie.com/embed/J-vJMlJHpGU?rel=0&controls=1&autoplay=1&mute=1&start=0"
        />

        <StudentReview
          img={MmentorImg}
          name="Kaushik Mukherjee"
          companyname=""
          para='"Thank you Sushrut for supporting me like a big brother, and helping me improve constantly"'
          video="https://www.youtube-nocookie.com/embed/BOvo-VwQ4y8?rel=0&controls=1&autoplay=1&mute=1&start=0"
        />

        <StudentReview
          img={MmentorImg}
          name="Aditya Vardhan"
          companyname=""
          para="The Long Term Mentorship program was great. I am very pleased to have Sandeep as my mentor. His advice is very to the point."
          video="https://www.youtube-nocookie.com/embed/-Otv_sYGlak?rel=0&controls=1&autoplay=1&mute=1&start=0"
        />

        <StudentReview
          img={MmentorImg}
          name="Lokesh"
          companyname=""
          para="Mentors at writo are amazing. They keep track of your progress through each round. Nimesh constantly advises new methods and adds to your knowledge. During the mock interview, he is quite professional and takes notes of my performance. I'm highly satisfied with Nimesh's technique of interviewing and his detailed feedback."
          video=""
        />
      </Carousel> */}
      <StudentReviews></StudentReviews>

      <Steps />
      <Mentors />
      <FAQS />
    </div>
  );
}

export default Mentorship;
