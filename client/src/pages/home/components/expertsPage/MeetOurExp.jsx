import React, { useLayoutEffect } from 'react'
import './MeetOurExp.css'
import twitter from '../../../../assets/home/twitter.png'
import linkedin from '../../../../assets/home/linkedin.png'
import instagram from '../../../../assets/home/instagram.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);

function MeetOurExp() {

    const data = [
        {
            id: 1,
            name: "Abhinay Chaturvedi",
            profile: "Deloite",
            img: 'https://img.freepik.com/premium-photo/smiling-indian-software-developer_274689-36939.jpg'
        },
        {
            id: 2,
            name: "Amit Pandey",
            profile: "Microsoft",
            img: 'https://st2.depositphotos.com/1643295/7439/i/600/depositphotos_74390343-stock-photo-smiling-software-developer.jpg',
        },
        {
            id: 3,
            name: "Ashok Chaudhary",
            profile: "Amazon",
            img: 'https://st4.depositphotos.com/13187390/20643/i/600/depositphotos_206437620-stock-photo-young-indian-male-using-laptop.jpg',
        },
        {
            id: 4,
            name: "Anubhav",
            profile: "Byjus",
            img: 'https://st3.depositphotos.com/1017986/18714/i/450/depositphotos_187143178-stock-photo-close-up-of-creative-man.jpg',
        }
    ];


    useLayoutEffect(() => {
        let tl = gsap.timeline();
        tl.fromTo(".expert_card",
            { yPercent: 100, opacity: 0 },
            { yPercent: 0, duration: 1, opacity: 1, stagger: 0.25, ease: "power1.inOut" }
        )
    })
    return (
        <div className='moe_page xl:px-36'>
            <div className='expert_heading' >
                <h1 className='lg:w-6/12 text-4xl font-bold pt-4'>Meet Our Experts</h1>
                <p className='lg:w-6/12 text-base mx-4 md:mx-0 mt-4 md:mt-0 lg:px-14 expert_heading-text'>WRITO students get mentored by the industry experts who have achieved mastery in their respective domains & are passionate about helping
                    students achieve their dreams.</p>
            </div>
            <div className='experts_container my-[4px] md:my-10 w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth'>
                {data.map((item, id) => (
                    <div key={id} className='expert_card inline-block ml-8 md:mx-10 '>
                        <img className='expert_image' src={item.img} alt=''></img>
                        <h1 className='text-[15px] lg:text-xl mt-3 font-bold text-center expert_name py-0.5'>{item.name}</h1>
                        <p className='lg:text-lg text-center expert_profile'>{item.profile}</p>
                        <div className='social_links py-4'>
                            <img src={linkedin} alt=''></img>
                            <img src={twitter} alt=''></img>
                            <img src={instagram} alt=''></img>
                        </div>
                        <p>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MeetOurExp