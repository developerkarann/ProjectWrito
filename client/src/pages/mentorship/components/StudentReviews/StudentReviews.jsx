import { Swiper, SwiperSlide } from 'swiper/react';
import './StudentReview.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


const StudentReviews = () => {
  return (
    <div className='max-w-[1400px] mx-auto my-12'>
      <h1 className='text-center font-bold text-3xl md:text-5xl mb-12'>You too can <span className='text-red-500'>get</span> into your <span className='text-red-500'>dream company!</span></h1>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="studentReviewSwiper"
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            }
          }}
        >
          <SwiperSlide>
            <div className="card h-full news-blogs-card-shadow">

              <div className='flex items-center mt-6'>
                <img className='h-8 w-8 ms-8' src="https://i.ibb.co/H2RFxjb/Mmentor-Img-removebg-preview.png" />
                <h3 className='ms-8 text-2xl'>Sujit Kumar</h3>
              </div>
              <p className='mx-7 mt-4 text-left'>Harsh used to continuously keep a check on me. If I am doing well mentally. If I am executing my tasks. If I am on the right track</p>

              <div className="card-body">
                <iframe
                  className="w-full h-[200px] rounded-3xl border-solid border-[#1ab79d]"
                  src='https://www.youtube-nocookie.com/embed/J-vJMlJHpGU?rel=0&controls=1&autoplay=1&mute=1&start=0'
                  title="YouTube Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card news-blogs-card-shadow">

              <div className='flex items-center mt-6'>
                <img className='h-8 w-8 ms-8' src="https://i.ibb.co/H2RFxjb/Mmentor-Img-removebg-preview.png" />
                <h3 className='ms-8 text-2xl'>Kaushik Mukherjee</h3>
              </div>
              <p className='mx-7 mt-4 text-left'>Thank you Sushrut for supporting me like a big brother, and helping me improve constantly. If I am on the right track</p>

              <div className="card-body">
                <iframe
                  className="w-full h-[200px] rounded-3xl border-solid border-[#1ab79d]"
                  src='https://www.youtube-nocookie.com/embed/BOvo-VwQ4y8?rel=0&controls=1&autoplay=1&mute=1&start=0'
                  title="YouTube Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card news-blogs-card-shadow">

              <div className='flex items-center mt-6'>
                <img className='h-8 w-8 ms-8' src="https://i.ibb.co/H2RFxjb/Mmentor-Img-removebg-preview.png" />
                <h3 className='ms-8 text-2xl'>Aditya Vardhan</h3>
              </div>
              <p className='mx-7 mt-4 text-left'>The Long Term Mentorship program was great. I am very pleased to have Sandeep as my mentor. His advice is very to the point.</p>

              <div className="card-body">
                <iframe
                  className="w-full h-[200px] rounded-3xl border-solid border-[#1ab79d]"
                  src='https://www.youtube-nocookie.com/embed/-Otv_sYGlak?rel=0&controls=1&autoplay=1&mute=1&start=0'
                  title="YouTube Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card news-blogs-card-shadow">

              <div className='flex items-center mt-6'>
                <img className='h-8 w-8 ms-8' src="https://i.ibb.co/H2RFxjb/Mmentor-Img-removebg-preview.png" />
                <h3 className='ms-8 text-2xl'>Lokesh</h3>
              </div>
              <p className='mx-7 mt-4 text-left'>Mentors at writo are amazing. They keep track of your progress through each round. Nimesh constantly advises new methods</p>

              <div className="card-body">
                <iframe
                  className="w-full h-[200px] rounded-3xl border-solid border-[#1ab79d]"
                  src='https://www.youtube-nocookie.com/embed/J-vJMlJHpGU?rel=0&controls=1&autoplay=1&mute=1&start=0'
                  title="YouTube Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
};

export default StudentReviews;

