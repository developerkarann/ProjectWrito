import { TiTick } from "react-icons/ti";
import { Bounce, JackInTheBox, Reveal } from "react-awesome-reveal";

const Mindset = () => {
  return (
    <div className="w-full my-8 px-5 lg:px-16">
      <Reveal triggerOnce>
        <Bounce>
          <h1 className="text-3xl md:text-5xl leading-snug font-bold">
            Only candidates with a{" "}
            <span className=" text-[#ee4962]">strong mindset</span> make it to
            you.
          </h1>
        </Bounce>
      </Reveal>
      {/* <Reveal triggerOnce>
        <Bounce>
          <p className="py-6 text-base md:text-xl text-justify">
            Our meticulous selection process seeks individuals with grit and a
            growth mindset. Candidates commit to 20 hours per week for 16 weeks,
            while we assess their problem-solving, communication, adaptability,
            and technical competence. We prioritize collaboration, leadership
            potential, continuous learning, initiative, and resilience to form a
            talented and motivated team.
          </p>
        </Bounce>
      </Reveal> */}
      <div className=" flex flex-col md:flex-row gap-6">
        <div className="my-auto  space-y-6 w-full md:w-1/2">
          <Reveal triggerOnce>
            <Bounce>
              <div className="flex gap-4">
                <TiTick className="text-2xl md:text-3xl rounded-full shadow-inner shadow-[#007E70] text-[#fa2424]" />
                <p className="text-base md:text-lg font-semibold">
                  Clearly define goals and objectives.
                </p>
              </div>
            </Bounce>
          </Reveal>
          <Reveal triggerOnce>
            <Bounce>
              <div className="flex gap-4">
                <TiTick className="text-2xl md:text-3xl rounded-full shadow-inner shadow-[#007E70] text-[#fa2424]" />
                <p className="text-base md:text-lg font-semibold">
                  Empathize with users and their challenges.
                </p>
              </div>
            </Bounce>
          </Reveal>
          <Reveal triggerOnce>
            <Bounce>
              <div className="flex gap-4">
                <TiTick className="text-2xl md:text-3xl rounded-full shadow-inner shadow-[#007E70] text-[#fa2424]" />
                <p className="text-base md:text-lg font-semibold">
                  Prioritize problems and determine the most effective
                  solutions.
                </p>
              </div>
            </Bounce>
          </Reveal>

          <Reveal triggerOnce>
            <Bounce>
              <div className="flex gap-4">
                <TiTick className="text-2xl md:text-3xl rounded-full shadow-inner shadow-[#007E70] text-[#fa2424]" />
                <p className="text-base md:text-lg font-semibold">
                  Brainstorm innovative ideas.
                </p>
              </div>
            </Bounce>
          </Reveal>
          <Reveal triggerOnce>
            <Bounce>
              <div className="flex gap-4">
                <TiTick className="text-2xl md:text-3xl rounded-full shadow-inner shadow-[#007E70] text-[#fa2424]" />
                <p className="text-base md:text-lg font-semibold">
                  Analyze data to produce actionable insights.
                </p>
              </div>
            </Bounce>
          </Reveal>
        </div>
        <div className="w-full md:w-1/2">
          <Reveal triggerOnce>
            <JackInTheBox>
              <img
                className="w-full transition duration-300 ease-in-out hover:scale-110 rounded-md md:px-10"
                src="https://img.freepik.com/free-vector/mind-map-concept-illustration_114360-2880.jpg?w=740&t=st=1690629855~exp=1690630455~hmac=7c4ba39cca40ac73ea986e4f1a5915240ea02f57641c4dd4c287ed033e4f7474"
                alt=""
              />
            </JackInTheBox>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Mindset;
