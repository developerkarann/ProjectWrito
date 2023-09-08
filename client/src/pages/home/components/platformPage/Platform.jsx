import React, { useState, useLayoutEffect } from 'react'
import "./Platform.css"
import img from '../../../../assets/home/mock-interview-9666.png'
import img1 from '../../../../assets/home/1.png'
import img2 from '../../../../assets/home/2.png'
import img3 from '../../../../assets/home/3.png'
import img4 from '../../../../assets/home/4.png'
import img5 from '../../../../assets/home/5.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);


const Platform = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggle = (index) => {
    setToggleState(index)
  }
  useLayoutEffect(() => {
    let tl = gsap.timeline();
    tl.fromTo(".content_heading", {
      x: -100, opacity: 0,
    }, {
      x: 0, duration: 0.5, ease: "power1.in", opacity: 1
    })
    tl.fromTo(".content_heading2", {
      x: -100, opacity: 0,
    }, {
      x: 0, duration: 0.5, ease: "power1.in", opacity: 1
    })
    tl.fromTo(".content_text", {
      x: -100, opacity: 0,
    }, {
      x: 0, duration: 0.5, ease: "power1.in", opacity: 1,
    })
    tl.fromTo(".content_last", {
      x: -100, opacity: 0,
    }, {
      x: 0, duration: 0.5, ease: "power1.in", opacity: 1,
    })
    gsap.fromTo(".content-image_container", {
      scale: 1.5, opacity: 0
    }, {
      scale: 1, duration: 0.5, ease: "expo.in", opacity: 1,
    })
  })

  return (
    <div className='platform_page shadow-2xl'>
      <h2 className='text-center text-lg md:text-5xl text-pink font-bold'>A One stop Platform</h2>
      <p className='text-center lg:text-lg lg:m-4 text-gray-500'>Practice and learn till you are perfect</p>

      <ul className='header grid lg:grid-cols-6 grid-cols-3 gap-y-2 text-center lg:text-base font-semibold m-3 p-5'>
        <li className={toggleState === 1 ? "header_content active" : "header_content"} onClick={() => { toggle(1) }}>Guided Program</li>
        <li className={toggleState === 2 ? "header_content active" : "header_content"} onClick={() => { toggle(2) }}>Doubt Resolution</li>
        <li className={toggleState === 3 ? "header_content active" : "header_content"} onClick={() => { toggle(3) }}>EduWeb</li>
        <li className={toggleState === 4 ? "header_content active" : "header_content"} onClick={() => { toggle(4) }}>Mock Interview</li>
        <li className={toggleState === 5 ? "header_content active" : "header_content"} onClick={() => { toggle(5) }}>Placement Cell</li>
        <li className={toggleState === 6 ? "header_content active" : "header_content"} onClick={() => { toggle(6) }}>Free Resources</li>
      </ul>

      <div className={toggleState === 1 ? "content_container grid xl:grid-cols-2 gap-x-40" : "hide"}>
        <div className='content'>
          <h3 className='text-2xl font-bold content_heading'>Well Guided Program</h3>
          <h1 className='text-xl font-medium py-4 text-gray'>We have invented and perfected the best system to learn coding</h1>
          <p className='text-sm my-2 text-gray'>
            Your Journey will follow a tried & Tested method that delivers the best results. Each concept that you learn will follow the following structure.
            <br />
            <br />
            Very short learning videos: 10-15 minutes 2-3 Guided Problems & 5-10 practice problems to understand: 45 minutes Doubts resolved instantly by our Teaching Assitants and Notes for Revision
          </p>
          <div className='flex flex-row text-sm content_last'>
            <div className='py-5 w-40'>
              <h1 className='text-3xl text-pink font-bold'>100+</h1>
              <p className='text-gray'>average hours of learning per course</p>
            </div>
            <div className='p-5 w-40'>
              <h1 className='text-3xl text-pink font-bold'>30+</h1>
              <p className='text-gray'>apractice problems in each course</p>
            </div>
          </div>
        </div>
        <div className='grid-cols-4 content-image_container'>
          <img src={img1} alt=''></img>
        </div>
      </div>

      <div className={toggleState === 2 ? "content_container grid xl:grid-cols-2 gap-x-40" : "hide"}>
        <div className='content'>
          <h3 className='text-2xl font-bold content_heading'>Doubt Resolution</h3>
          <h1 className='text-xl font-medium py-4 text-gray'>Get your doubts resolved instantly with live 1:1 mentor support.</h1>
          <p className='text-sm my-2 text-gray'>
            In case you have any doubt at any time while you are watching a video, with an MCQ, a coding assignment or a test - We have you covered!
            <br />
            <br />
            We have a network of dedicated teaching assistants to make sure your doubts get resolved quickly and you dont miss on deadlines.
          </p>
          <div className='flex flex-row text-sm content_last'>
            <div className='py-5 w-40'>
              <h1 className='text-3xl text-pink font-bold'>100+</h1>
              <p className='text-gray'>average hours of learning per course</p>
            </div>
            <div className='p-5 w-40'>
              <h1 className='text-3xl text-pink font-bold'>30+</h1>
              <p className='text-gray'>apractice problems in each course</p>
            </div>
          </div>
        </div>
        <div className='grid-cols-4 content-image_container'>
          <img src={img2} alt=''></img>
        </div>
      </div>

      <div className={toggleState === 3 ? "content_container grid xl:grid-cols-2 gap-x-40" : "hide"}>
        <div className='content'>
          <h3 className='text-2xl font-bold content_heading'>Free Resources</h3>
          <h1 className='text-xl font-medium py-4 text-gray'>A platform to help you practice, compete & get ready for interviews.</h1>
          <p className='text-sm my-2 text-gray'>
            A place for aspiring and experienced programmers to prepare for tech interviews, practice problems, compete in challenges, discuss and stay up to date with the latest developments in the tech world.
            <br />
            <br />
            Our expert designed curated guided paths will help you save time and energy to figure out which coding questions to be solved and give you a perfect sequence to maximise your learning experience.
          </p>
          <div className='flex flex-row text-sm content_last'>
            <div className='py-5 w-40'>
              <h1 className='text-3xl text-pink font-bold'>100+</h1>
              <p className='text-gray'>average hours of learning per course</p>
            </div>
            <div className='p-5 w-40'>
              <h1 className='text-3xl text-pink font-bold'>30+</h1>
              <p className='text-gray'>apractice problems in each course</p>
            </div>
          </div>
        </div>
        <div className='grid-cols-4 content-image_container'>
          <img src={img3} alt=''></img>
        </div>
      </div>

      <div className={toggleState === 4 ? "content_container grid xl:grid-cols-2 gap-x-40" : "hide"}>
        <div className='content'>
          <h3 className='text-2xl font-bold content_heading'>Mock Interviews</h3>
          <h1 className='text-xl font-medium py-4 text-gray'>Mock Interviews to help you get prepared for your real interview</h1>
          <p className='text-sm my-2 text-gray'>
            Industry experts from top product companies like Amazon, Facebook, Google and working in the US will take your mock interviews.
            <br />
            <br />
            The focus will be on both technical and interpersonal skills. Get instant feedback at the end of the interview.
          </p>
          <div className='flex flex-row text-sm content_last'>
            <div className='py-5 w-40'>
              <h1 className='text-3xl text-pink font-bold'>100+</h1>
              <p className='text-gray'>average hours of learning per course</p>
            </div>
            <div className='p-5 w-40'>
              <h1 className='text-3xl text-pink font-bold'>30+</h1>
              <p className='text-gray'>apractice problems in each course</p>
            </div>
          </div>
        </div>
        <div className='grid-cols-4 content-image_container'>
          <img src={img4} alt=''></img>
        </div>
      </div>

      <div className={toggleState === 5 ? "content_container grid xl:grid-cols-2 gap-x-40" : "hide"}>
        <div className='content'>
          <h3 className='text-2xl font-bold content_heading'>Free Resources</h3>
          <h1 className='text-xl font-medium py-4 text-gray'>Placement Cell - A dedicated team to help you land the best opportunities.</h1>
          <p className='text-sm my-2 text-gray'>
            Curated openings and industry referrals to ensure you have access to the best opportunities out there.
            <br />
            <br />
            Our placement cell works closely with you to help you reach closer to your professional goals.
          </p>
          <div className='flex flex-row text-sm content_last'>
            <div className='py-5 w-40'>
              <h1 className='text-3xl text-pink font-bold'>100+</h1>
              <p className='text-gray'>average hours of learning per course</p>
            </div>
            <div className='p-5 w-40'>
              <h1 className='text-3xl text-pink font-bold'>30+</h1>
              <p className='text-gray'>apractice problems in each course</p>
            </div>
          </div>
        </div>
        <div className='grid-cols-4 content-image_container'>
          <img src={img5} alt=''></img>
        </div>
      </div>

      <div className={toggleState === 6 ? "content_container grid xl:grid-cols-2 gap-x-40" : "hide"}>
        <div className='content'>
          <h3 className='text-2xl font-bold content_heading'>Free Resources</h3>
          <h1 className='text-xl font-medium py-4 text-gray'>Tons of resources to enable you to learn for free & stay up to date</h1>
          <p className='text-sm my-2 text-gray'>
            We regularly conduct webinars & coding events on various topics to answer your burning questions & to keep you up to date with the latest happenings in the tech world.
            <br />
            <br />
            A blog with the latest articles to ensure you are reading & constantly in touch with your interest areas.
          </p>
          <div className='flex flex-row text-sm content_last'>
            <div className='py-5 w-40'>
              <h1 className='text-3xl text-pink font-bold'>100+</h1>
              <p className='text-gray'>average hours of learning per course</p>
            </div>
            <div className='p-5 w-40'>
              <h1 className='text-3xl text-pink font-bold'>30+</h1>
              <p className='text-gray'>apractice problems in each course</p>
            </div>
          </div>
        </div>
        <div className='grid-cols-4 content-image_container'>
          <img src={img} alt=''></img>
        </div>
      </div>
    </div>
  )
}

export default Platform