import React from "react";
import "./roadmap.css"
import renderImg from "../../../entrepreneurship/images/entrepreneur.svg";

const RoadMap = () => {
  return (
    <>
    <div className="mt-[5rem] text-center mt-[10rem] ml-9">
    <h1 className="text-center text-3xl md:text-5xl mb-10 font-bold">How it <span className="text-pink">Works ?</span></h1>
      </div>
    <div className="image-container px-4">
      <img src={renderImg} alt="Process Image" />
    </div>
    </>
  );
};

export default RoadMap;
