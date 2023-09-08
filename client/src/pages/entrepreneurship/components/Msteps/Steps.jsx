import React from "react";
// import { FaLongArrowAltRight } from "react-icons/fa";

const Steps = () => {
  return (
    <div className="pb-9 bg-[#263a66]">
      <div className="max-w-[1400px] mx-auto">
        <div>
          <div className="mt-7">
            <div className="pt-7 px-3 pb-7  text-center">
              <h1
                className="text-xl md:text-5xl xs:text-3xl font-bold"
                style={{ color: "#fff" }}
              >
                Start<span style={{ color: "#ee4962" }}> Mentorship </span> today
              </h1>
              <h1
                className="mt-3 text-xl md:text-5xl xs:text-3xl font-bold"
                style={{ color: "#fff" }}
              >
                <span style={{ color: "#ee4962" }}>You'll</span> never{" "}
                <span style={{ color: "#ee4962" }}>look</span> back.
              </h1>
            </div>


            <div className='mt-4 grid justify-center lg:grid-cols-3 md:grid-cols-2 gap-y-5 
             md:gap-y-24 lg:px-24 lg:pb-12 xxs:pb-12 pb-12 px-7'>
              <div data-aos="fade-up" className="card card-compact w-9/12 md:h-64 mx-8 mx-auto course-card-shadow">
                <div className="pl-4 pt-2">
                  <p className="mentorship-card-circle">1</p>
                </div>
                <div className='card-body'>
                  <h2 className="card-title my-2 text-2xl">Internship Phase</h2>
                  <p className="text-base">Begin as an intern, working on practical projects and building
                  foundational skills.</p>
                  
                </div>
              </div>
              <div data-aos="fade-up" className="card card-compact w-9/12 md:h-64 mx-8 mx-auto course-card-shadow">
                <div className="pl-4 pt-2">
                  <p className="mentorship-card-circle">2</p>
                </div>
                <div className='card-body'>
                  <h2 className="card-title my-2 text-2xl">Junior Team Leader</h2>
                  <p className="text-base">Progress to leading a small team, refining leadership
                  capabilities and project management skills.</p>
                  
                </div>
              </div>
              <div data-aos="fade-up" className="card card-compact w-9/12 md:h-64 mx-8 mx-auto course-card-shadow">
                <div className="pl-4 pt-2">
                  <p className="mentorship-card-circle">3</p>
                </div>
                <div className='card-body'>
                  <h2 className="card-title my-2 text-2xl">Team Leader</h2>
                  <p className="text-base">Oversee larger teams, collaborate on diverse projects, and
                  enhance your decision-making prowess.</p>
                  
                </div>
              </div>
              <div data-aos="fade-up" className="card card-compact w-9/12 md:h-64 mx-8 mx-auto course-card-shadow">
                <div className="pl-4 pt-2">
                  <p className="mentorship-card-circle">4</p>
                </div>
                <div className='card-body'>
                  <h2 className="card-title my-2 text-2xl">Project Manager</h2>
                  <p className="text-base">Manage multiple teams and projects, honing strategic thinking
                  and execution skills.</p>
                  
                </div>
              </div>
              <div data-aos="fade-up" className="card card-compact w-9/12 md:h-64 mx-8 mx-auto course-card-shadow">
                <div className="pl-4 pt-2">
                  <p className="mentorship-card-circle">5</p>
                </div>
                <div className='card-body'>
                  <h2 className="card-title my-2 text-2xl">Senior Project Manager</h2>
                  <p className="text-base">Lead high-profile projects, mentor fellow managers, and
                  contribute to program development.</p>
                  
                </div>
              </div>
              <div data-aos="fade-up" className="card card-compact w-9/12 md:h-64 mx-8 mx-auto course-card-shadow">
                <div className="pl-4 pt-2">
                  <p className="mentorship-card-circle">6</p>
                </div>
                <div className='card-body'>
                  <h2 className="card-title my-2 text-2xl"> Program Coordinator</h2>
                  <p className="text-base">Collaborate with organizers, ensuring program excellence and
                  growth, and serving as a link between participants and
                  stakeholders..</p>
                  
                </div>
              </div>
              <div data-aos="fade-up" className="card card-compact w-9/12 md:h-64 mx-8 mx-auto course-card-shadow">
                <div className="pl-4 pt-2">
                  <p className="mentorship-card-circle">7</p>
                </div>
                <div className='card-body'>
                  <h2 className="card-title my-2 text-2xl">Program Director</h2>
                  <p className="text-base">Reach the pinnacle, guiding the program's direction and
                  mentoring all participants.</p>
                  
                </div>
              </div>
              
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
