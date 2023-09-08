import React from "react";
import "./Landing.css";

const Landing = (props) => {
  
  return (
    <>
      <div className="bg-[#eef6f5]">
        <div className="max-w-[1400px] mx-4 md:mx-auto md:flex items-center md:px-10 py-24">

          <div className="md:w-1-2">
            <h1 className="text-3xl md:text-5xl font-bold">
              {props.heading1}
              <span className="text-pink">
                {props.heading2}
              </span>
              <span>{props.heading3}</span>
              <br />
              <span>
                {props.heading4}
              </span>
            </h1>
            <p className="my-10">
              {props.para1}
            </p>
            <button className="allBtn mt-10">
              {props.button}
            </button>
          </div>


          <div className="md:w-1/2 md:mt-0 mt-5">
            <img
              src={props.LandingImg}
              alt="mentorship img"
              className=" lg:h-[500px] mix-blend-multiply lg:w-[1100px] lg:pt-0 md:mx-auto"
            />
          </div>

        </div>
      </div>

      <div className="mt-16 overflow-hidden">
        <div className="pt-5 lg:flex-row">
          <p className="text-3xl md:text-5xl font-bold text-center mb-10">
            {props.para3}
          </p>

          <div className="flex items-center justify-center gap-x-7 leftToRight gap-1 mb-7 ">
            <img
              src={props.googleImg}
              alt="google img"
              className="w-6 h-6 md:w-[75px] md:h-[75px] rounded-2xl border-solid shadow-4xl md:p-3 "
            />
            <img
              src={props.appleImg}
              alt="apple img"
              className="w-6 h-6 md:w-[75px] md:h-[75px] rounded-2xl border-solid shadow-4xl md:p-3"
            />
            <img
              src={props.microsoftImg}
              alt="microsoft img"
              className="w-6 h-6 md:w-[75px] md:h-[75px] rounded-2x border-solid shadow-4xl md:p-3"
            />
            <img
              src={props.amazonImg}
              alt="amazon img"
              className="w-6 h-6 md:w-[75px] md:h-[75px] rounded-2xl border-solid shadow-4xl md:p-3  "
            />
            <img
              src={props.airbnbImg}
              alt="airbnb img"
              className="w-6 h-6 md:w-[75px] md:h-[75px] rounded-2xl border-solid shadow-4xl md:p-3 "
            />
            <img
              src={props.youtubeImg}
              alt="youtube img"
              className="w-6 h-6 md:w-[75px] md:h-[75px] rounded-2xl border-solid shadow-4xl md:p-3 "
            />
          </div>


          <div className="flex items-center justify-center gap-x-7 rightToLeft gap-1 mb-7 ">
            <img
              src={props.googleImg}
              alt="google img"
              className="w-6 h-6 md:w-[75px] md:h-[75px] rounded-2xl border-solid shadow-4xl md:p-3 "
            />
            <img
              src={props.appleImg}
              alt="apple img"
              className="w-6 h-6 md:w-[75px] md:h-[75px] rounded-2xl border-solid shadow-4xl md:p-3"
            />
            <img
              src={props.microsoftImg}
              alt="microsoft img"
              className="w-6 h-6 md:w-[75px] md:h-[75px] rounded-2x border-solid shadow-4xl md:p-3"
            />
            <img
              src={props.amazonImg}
              alt="amazon img"
              className="w-6 h-6 md:w-[75px] md:h-[75px] rounded-2xl border-solid shadow-4xl md:p-3  "
            />
            <img
              src={props.airbnbImg}
              alt="airbnb img"
              className="w-6 h-6 md:w-[75px] md:h-[75px] rounded-2xl border-solid shadow-4xl md:p-3 "
            />
            <img
              src={props.youtubeImg}
              alt="youtube img"
              className="w-6 h-6 md:w-[75px] md:h-[75px] rounded-2xl border-solid shadow-4xl md:p-3 "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
