import React from "react";
import '../../style.css'

const StudentReview = (props) => {
  const { video } = props;
  return (
      <div className="card mentorship-card-shadow">
        <div className="flex items-center">
          <img src={props.img} alt="mentor img" className="w-6 h-6 mt-5" />
          <div className=" md:ml-5 xxs:ml-2">
            <p className="pt-5  sm:text-2xl xxs:text-xl">{props.name}</p>
            <p className=" m text-webRed sm:text-2xl xxs:text-lg font-semibold text-left">
              {props.companyname}
            </p>
          </div>
        </div>

        <p className="text-base text-justify tracking-wide md:mx-5 lg:mx-3 pt-5">
          {props.para}
        </p>
        <div className="card-body flex justify-center min-h-[50%] min-w-[30%] items-center">
          {video ? (
            <iframe
              className="xxs:w-[220px] xxs:pt-2 xs:w-[280px] sm:w-[300px] sm:h-[350px] min-w-[200px] min-h-[30%]  md:w-[250px] lg:w-[280px] lg:h-[200px] rounded-3xl border-solid border-[#1ab79d]"
              src={video}
              title="YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <p></p>
          )}
        </div>
      </div>
  );
};

export default StudentReview;
