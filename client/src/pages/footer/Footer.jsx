import {
  FaFacebookF,
  FaHome,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitter,
  FaRegEnvelope,
  FaYoutube,
  FaPhoneAlt,
  FaAngleRight,
} from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <div className="text-white bg-[#000] relative mt-[250px] md:mt-24">
      <div className="max-w-7xl mx-auto">

        <div className="w-full px-8 absolute top-0 -translate-y-1/2 left-0">
          <div className="bg-gradient rounded-2xl">
              <div className="flex flex-col md:flex-row justify-evenly p-3 lg:p-8">
                <div className="text-white p-4 md:w-[70%]">
                  <h1 className="text-3xl lg:text-4xl font-bold mb-2">
                    Subscribe us for the latest newsletter
                  </h1>

                  <p>
                    Expand your knowledge and skills by choosing the right mentor!
                  </p>

                </div>
                <div className="input-field p-1 md:w-[30%]">
                  <input type="text" placeholder="Enter Email" className="input w-full" />
                  <br />
                  <button className="allBtn w-full flex justify-center">
                    Subscribe
                  </button>
                </div>
              </div>
          </div>
        </div>
        
        <footer className="footer px-8 md:px-0 footer-padding flex flex-col justify-center text-lg">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-white">
              <span className="font-bold text-2xl">Quick Links</span>
              <hr className="w-1/2 h-[3px] bg-[#1ab79d] my-3" />
              <div className="flex items-center">
                <FaAngleRight />
                <a className="link link-hover">Home</a>
              </div>
              <div className="flex items-center">
                <FaAngleRight />
                <a className="link link-hover">Career</a>
              </div>
              <div className="flex items-center">
                <FaAngleRight />
                <a className="link link-hover">Hire From Us</a>
              </div>
              <div className="flex items-center">
                <FaAngleRight />
                <a className="link link-hover">BTH - Talent Hunt Exam</a>
              </div>
              <div className="flex items-center">
                <FaAngleRight />
                <a className="link link-hover">Refer and Earn</a>
              </div>
            </div>

            <div className="text-white">
              <span className="font-bold text-2xl">Other Links</span>
              <hr className="w-1/2 h-[3px] bg-[#1ab79d] my-3" />
              <div className="flex items-center">
                <FaAngleRight />
                <a className="link link-hover">Blog</a>
              </div>
              <div className="flex items-center">
                <FaAngleRight />
                <a className="link link-hover">Events and Contest</a>
              </div>
              <div className="flex items-center">
                <FaAngleRight />
                <a className="link link-hover">Contact Us</a>
              </div>
            </div>

            <div className="text-white">
              <span className="font-bold text-2xl">Courses</span>
              <hr className="w-1/2 h-[3px] bg-[#1ab79d] my-3" />
              <div className="flex items-center">
                <FaAngleRight />
                <a className="link link-hover">Entrepreneurship</a>
              </div>
              <div className="flex items-center">
                <FaAngleRight />
                <a className="link link-hover">Product Management</a>
              </div>
              <div className="flex items-center">
                <FaAngleRight />
                <a className="link link-hover">SAP FICO</a>
              </div>
            </div>

            <div className="text-white">
              <span className="font-bold text-2xl">Contact Us</span>
              <hr className="w-1/2 h-[3px] bg-[#1ab79d] my-3" />
              <div className="flex items-center gap-x-2">
                <FaHome className="text-4xl p-2 bg-[#1ab79d] rounded-xl text-white"></FaHome>
                <a className="link link-hover text-[15px]">
                  Janata College Road, Anantpur, Madhya Pradesh - India
                </a>
              </div>
              <div className="flex items-center gap-x-2 my-2">
                <FaRegEnvelope className="text-4xl p-2 bg-[#1ab79d] rounded-xl text-white"></FaRegEnvelope>
                <a href="mailto:ravinder@writo.in" className="link link-hover">ravinder@writo.in</a>
              </div>
              <div className="flex items-center gap-x-2">
                <FaPhoneAlt className="text-4xl p-2 bg-[#1ab79d] rounded-xl text-white"></FaPhoneAlt>
                <a href="tel:9518889372" className="link link-hover">+91 9518889372</a>
              </div>
              <div className="flex text-4xl gap-x-4 relative mt-4">
                <FaFacebookF className="bg-[#1ab79d] cursor-pointer p-2 rounded-xl text-white hover:bg-white hover:duration-700"></FaFacebookF>
                <FaInstagramSquare className="bg-[#1ab79d] cursor-pointer p-2 rounded-xl text-white hover:bg-white hover:duration-700"></FaInstagramSquare>
                <FaTwitter className="bg-[#1ab79d] cursor-pointer p-2 rounded-xl text-white hover:bg-white hover:duration-700"></FaTwitter>
                <FaYoutube className="bg-[#1ab79d] cursor-pointer p-2 rounded-xl text-white hover:bg-white hover:duration-700"></FaYoutube>
                <FaLinkedinIn className="bg-[#1ab79d] cursor-pointer p-2 rounded-xl text-white hover:bg-white hover:duration-700"></FaLinkedinIn>
              </div>
            </div>
          </div>
        </footer>

      </div>

      <div className="p-8 bg-gradient text-base-content">
        <p className="text-center text-white">Copyright © 2023 WRITO. All Rights Reserved</p>
      </div>

    </div>
  );
};

export default Footer;