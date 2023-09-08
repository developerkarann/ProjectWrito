import { CgSearchLoading } from "react-icons/cg";
import { AiOutlineClockCircle } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { BiSolidLike } from "react-icons/bi";
import { BsBagFill } from "react-icons/bs";
const Marketing = () => {
  return (
    <div className="px-3 lg:px-24 pb-11">
      <h2 className=" text-center hidden lg:block  text-2xl lg:text-5xl  font-bold py-10">
        Why hire from India's <br /> premier <br /> marketing training platform?
      </h2>
      <h2 className=" text-center lg:hidden block  text-2xl lg:text-5xl  font-bold py-10">
        Why hire from India's premier marketing training platform?
      </h2>
      <div>
        <div className=" grid grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center space-y-3">
            <CgSearchLoading className="bg-[#ee4962] text-5xl mx-auto text-white p-2 rounded-full" />

            <h3 className="text-[#ee4962] font-bold lg:text-3xl text-lg">
              Curated Pool
            </h3>
            <p>Less than 1 in 5 test-takers are offered admission</p>
          </div>
          <div className="text-center space-y-3">
            <AiOutlineClockCircle className="bg-[#ee4962] text-5xl mx-auto text-white p-2 rounded-full" />

            <h3 className="text-[#ee4962] font-bold lg:text-3xl text-lg">
              600+ Hours of Immersive Training
            </h3>
            <p>In Performance Marketing/ SEO/ Content/ Social Media/ E-Com</p>
          </div>
          <div className="text-center space-y-3">
            <RiTeamFill className="bg-[#ee4962] text-5xl mx-auto text-white p-2 rounded-full" />

            <h3 className="text-[#ee4962] font-bold lg:text-3xl text-lg">
              Team Collaboration Skills
            </h3>
            <p>Trained in communication, teamwork, and client handling</p>
          </div>
          <div className="text-center space-y-3">
            <HiOutlineSpeakerphone className="bg-[#ee4962] text-5xl mx-auto text-white p-2 rounded-full" />

            <h3 className="text-[#ee4962] font-bold lg:text-3xl text-lg">
              Industry-Driven Marketing Frameworks
            </h3>
            <p>
              Built by Industry Experts to help students get hands-on practical
              experience
            </p>
          </div>
          <div className="text-center space-y-3">
            <BiSolidLike className="bg-[#ee4962] text-5xl mx-auto text-white p-2 rounded-full" />

            <h3 className="text-[#ee4962] font-bold lg:text-3xl text-lg">
              Available in Every State, Immediately
            </h3>
            <p>Candidates available to join in your location immediately</p>
          </div>
          <div className="text-center space-y-3">
            <BsBagFill className="bg-[#ee4962] text-5xl mx-auto text-white p-2 rounded-full" />

            <h3 className="text-[#ee4962] font-bold lg:text-3xl text-lg">
              Free, Convenient and Suitable
            </h3>
            <p>
              Get a curated pool matched to your specific requirements for free
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
