import { Bounce, Reveal, Roll } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div className="w-full px-5 lg:px-16">
      <div className="flex flex-col-reverse lg:flex-row w-full">
        <div className="w-full lg:w-1/2 my-auto">
          <Reveal triggerOnce>
            <Roll>
              <img
                className="w-full transition duration-300 ease-in-out hover:scale-110 rounded-md md:px-10"
                src="https://i.ibb.co/vHfGzpS/22635325-6666301.jpg"
                alt=""
              />
            </Roll>
          </Reveal>
        </div>
        <div className="w-full lg:w-1/2 my-auto">
          <Reveal triggerOnce>
            <Bounce>
              <h1 className="text-2xl lg:text-[45px] leading-snug font-bold">
                Looking to hire{" "}
                <span className=" text-[#ee4962]">top-notch</span> product
                managers?
              </h1>
            </Bounce>
          </Reveal>
          <Reveal triggerOnce>
            <Bounce>
              <p className="pt-5 text-justify text-base lg:text-lg">
                Get top-notch product managers with industry experience,
                strategic vision, and a customer-centric approach. Agile leaders
                skilled in cross-functional collaboration, data-driven insights,
                and excellent communication. Contact us now!
              </p>
            </Bounce>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Banner;
