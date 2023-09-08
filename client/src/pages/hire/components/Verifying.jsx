import { TiTick } from "react-icons/ti";
import { Bounce, JackInTheBox, Reveal } from "react-awesome-reveal";

const Verifying = () => {
  return (
    <div className="w-full my-8 px-5 lg:px-16">
      <div className="mt-10 flex flex-col-reverse md:flex-row gap-6">
        <div className="w-full my-auto md:w-1/2">
          <Reveal triggerOnce>
            <JackInTheBox>
              <img
                className="w-full transition duration-300 ease-in-out hover:scale-110 rounded-md md:px-10"
                src="https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg?w=740&t=st=1690631421~exp=1690632021~hmac=9ebcb70d2d9a09f4cc0ee857c3d643fc6da43c82c313fa8e04255b2b7cb08561"
                alt=""
              />
            </JackInTheBox>
          </Reveal>
        </div>
        <div className="my-auto w-full md:w-1/2">
          <Reveal triggerOnce>
            <Bounce>
              <h1 className="text-2xl lg:text-[45px] leading-snug font-bold">
                Verifying Candidates' Skills Through{" "}
                <span className=" text-[#ee4962]">Proof-of-Work</span>
              </h1>
            </Bounce>
          </Reveal>
          {/* <Reveal triggerOnce>
            <Bounce>
              <p className="py-6 text-base md:text-xl text-justify">
                Eradicate dilemmas in your hiring process by verifying
                candidates' abilities before interviews.
              </p>
            </Bounce>
          </Reveal> */}
          <div className="space-y-4 mt-6">
            <Reveal triggerOnce>
              <Bounce>
                <div className=" flex gap-4">
                  <div>
                    <TiTick className="text-2xl md:text-3xl rounded-full shadow-inner shadow-[#007E70] text-[#fa2424]" />
                  </div>
                  <p className="text-base md:text-lg font-semibold">
                    See their approach and solutions in the case studies
                    provided by Eduweb.
                  </p>
                </div>
              </Bounce>
            </Reveal>
            <Reveal triggerOnce>
              <Bounce>
                <div className=" flex gap-4">
                  <div>
                    <TiTick className="text-2xl md:text-3xl rounded-full shadow-inner shadow-[#007E70] text-[#fa2424]" />
                  </div>
                  <p className="text-base md:text-lg font-semibold">
                    Gauge their product sense through observations of the
                    products they use.
                  </p>
                </div>
              </Bounce>
            </Reveal>
            <Reveal triggerOnce>
              <Bounce>
                <div className=" flex gap-4">
                  <div>
                    <TiTick className="text-2xl md:text-3xl rounded-full shadow-inner shadow-[#007E70] text-[#fa2424]" />
                  </div>
                  <p className="text-base md:text-lg font-semibold">
                    Assess their technical proficiency through the examination
                    of wireframes and specifications.
                  </p>
                </div>
              </Bounce>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verifying;
