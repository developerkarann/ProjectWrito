import React from "react";
import mentorshipPathImg from "../../images/mentorship-path.png";
import HowItWorks from "./HowItWorks";

export default function RoadMap() {
  return (
    <div>
      <div className="xxs:mt-[5rem] xxs:text-center mt-20 lg:ml-9">
        <h1 className="text-3xl md:text-5xl font-bold text-center">How it <span className="text-pink">Works</span>?</h1>
      </div>

      <div className=" lg:mt-[5rem] overflow-hidden  items-center ">
        <HowItWorks mentorshipPathImg={mentorshipPathImg} />
      </div>
    </div>
  );
}
