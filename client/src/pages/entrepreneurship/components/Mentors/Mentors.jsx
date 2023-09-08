import React from 'react';
import Cards from './Cards'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};
export default function Mentors() {
    return (
        <div className='max-w-7xl mx-auto '>
          <div className='pt-7 px-8 pb-3 xs:text-center xs:px-0'>
            <h1 className='text-xl xs:text-3xl md:text-5xl font-bold text-center'>Every<span style={{color:'#ee4962'}} > Experience </span> Every </h1>
            <h1 className='mt-3 pb-8 text-xl xs:text-3xl md:text-5xl font-bold text-center '> <span style={{color:'#ee4962'}} >Domain 
            </span> Covered</h1>
          </div>
            <Carousel responsive={responsive} showDots={false} arrows={false} autoPlay={true} autoPlaySpeed={2500} infinite={true} className='mentor-slide ml-[30px] '
            >
                <Cards name="Abhinay Chaturvedi" img="https://img.freepik.com/premium-photo/smiling-indian-software-developer_274689-36939.jpg" company="Deloite" designaton="Cyber Secuirty Expert" bio="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias voluptates obcaecati deleniti sint aspernatur. Distinctio dicta porro molestiae dolorum. Tempore."/>
                
                <Cards name="Amit Pandey" img="https://st2.depositphotos.com/1643295/7439/i/600/depositphotos_74390343-stock-photo-smiling-software-developer.jpg" company="Microsoft" designaton="Senior Software Developer" bio="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias voluptates obcaecati deleniti sint aspernatur. Distinctio dicta porro molestiae dolorum. Tempore."/>
                
                <Cards name="Ashok Chaudhary" img="https://st4.depositphotos.com/13187390/20643/i/600/depositphotos_206437620-stock-photo-young-indian-male-using-laptop.jpg" company="Amazon" designaton="Software Developer" bio="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias voluptates obcaecati deleniti sint aspernatur. Distinctio dicta porro molestiae dolorum. Tempore."/>
                
                <Cards name="Anubhav" img="https://st3.depositphotos.com/1017986/18714/i/450/depositphotos_187143178-stock-photo-close-up-of-creative-man.jpg" company="Byjus" designaton="Trainer" bio="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias voluptates obcaecati deleniti sint aspernatur. Distinctio dicta porro molestiae dolorum. Tempore."/>
            </Carousel>
        </div>
    )
}
