import React from "react";
import { useSwipeable } from "react-swipeable";
// import "./index.css";

const HowItWorks = (props) => {
  const [offsetX, setOffsetX] = React.useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe(-100),
    onSwipedRight: () => handleSwipe(100),
  });

  const handleSwipe = (deltaX) => {
    // Adjust the deltaX value to control the swipe sensitivity
    setOffsetX((prevOffsetX) => prevOffsetX + deltaX);
  };

  return (
    <div
      className="xxs:w-[150%] md:w-[100%] flex items-center justify-center overflow-hidden "
      {...handlers}
    >
      <img
        src={props.mentorshipPathImg}
        alt="mentorship path"
        style={{
          transform: `translateX(${offsetX}px)`,
          transition: "transform 0.3s ease",
          maxWidth: "100%",
          display: "block",
          overflow: "hidden",
        }}
      />
    </div>
    // <div className=" lg:mx-7  xxs:w-[200%] ">
    //   <img
    //     src={props.mentorshipPathImg}
    //     alt="mentorship path"
    //     className="xxs:w-[100%]"
    //   />
    // </div>
  );
};

export default HowItWorks;