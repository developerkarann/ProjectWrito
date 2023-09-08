import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Steps = () => {
  return (
    <div className="pb-9 bg-[#263a66]">
      <div className="max-w-[1400px] mx-auto">
        <div>
          <div className="mt-7">
            <div className="pt-7 px-3 pb-7  text-center">
              <h1
                className="text-3xl md:text-5xl font-bold"
                style={{ color: "#fff" }}
              >
                Start<span style={{ color: "#ee4962" }}> Mentorship </span> today
              </h1>
              <h1
                className="mt-3 text-3xl md:text-5xl font-bold"
                style={{ color: "#fff" }}
              >
                <span style={{ color: "#ee4962" }}>You'll</span> never{" "}
                <span style={{ color: "#ee4962" }}>look</span> back.
              </h1>
            </div>



            <div className='mt-4 grid md:grid-cols-3 gap-y-5 md:gap-y-8'>
              <div data-aos="fade-up" className="card card-compact md:w-96 mx-8 md:mx-auto course-card-shadow">
                <div className="pl-8 pt-4">
                  <p className="mentorship-card-circle">1</p>
                </div>
                <div className='card-body'>
                  <h2 className="card-title mt-2 px-2">Data Visualization</h2>
                  <p className="text-xl py-6 px-2">Use Python libraries like Matplotlib and Seaborn to create insightful data visualizations for better data understanding and communication.</p>
                </div>
              </div>
              <div data-aos="fade-up" className="card card-compact md:w-96 mx-8 md:mx-auto course-card-shadow">
                <div className="pl-8 pt-4">
                  <p className="mentorship-card-circle">2</p>
                </div>
                <div className='card-body'>
                  <h2 className="card-title mt-2 px-2">Machine Learning Models</h2>
                  <p className="text-xl py-6 px-2">Build predictive models using Machine Learning algorithms, leveraging libraries like Scikit-Learn to solve real-world problems.</p>
                </div>
              </div>
              <div data-aos="fade-up" className="card card-compact md:w-96 mx-8 md:mx-auto course-card-shadow">
                <div className="pl-8 pt-4">
                  <p className="mentorship-card-circle">3</p>
                </div>
                <div className='card-body'>
                  <h2 className="card-title mt-2 px-2">Deep Learning Applications</h2>
                  <p className="text-xl py-6 px-2">Develop advanced neural network models using TensorFlow and Keras for tasks like image recognition, natural language processing, and more.</p>
                </div>
              </div>
              <div data-aos="fade-up" className="card card-compact md:w-96 mx-8 md:mx-auto course-card-shadow">
                <div className="pl-8 pt-4">
                  <p className="mentorship-card-circle">4</p>
                </div>
                <div className='card-body'>
                  <h2 className="card-title mt-2 px-2">Natural Language Processing</h2>
                  <p className="text-xl py-6 px-2">Develop Python applications for processing and analyzing textual data using NLP techniques and libraries like NLTK and spaCy.</p>
                </div>
              </div>
              <div data-aos="fade-up" className="card card-compact md:w-96 mx-8 md:mx-auto course-card-shadow">
                <div className="pl-8 pt-4">
                  <p className="mentorship-card-circle">5</p>
                </div>
                <div className='card-body'>
                  <h2 className="card-title mt-2 px-2">Data Analysis</h2>
                  <p className="text-xl py-6 px-2">Create Python applications to perform data analysis on various datasets. Learn how to clean, process, and visualize data to gain valuable insights for decision-making.</p>
                </div>
              </div>
              <div data-aos="fade-up" className="card card-compact md:w-96 mx-8 md:mx-auto course-card-shadow">
                <div className="pl-8 pt-4">
                  <p className="mentorship-card-circle">6</p>
                </div>
                <div className='card-body'>
                  <h2 className="card-title mt-2 px-2">Data Cleaning</h2>
                  <p className="text-xl py-6 px-2">Build Python applications to preprocess and clean raw data, handling missing values, and outliers, to ensure data quality for analysis and modeling.</p>
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
