import React from 'react';
import { FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function cards(props) {
  return (
    <div className='all'>
      <div className="card mcard">
	<div className="card-borders">
		<div className="border-top"></div>
		<div className="border-right"></div>
		<div className="border-bottom"></div>
		<div className="border-left"></div>
	</div>
	<div className="card-content ">
		<img src={props.img} className="avatar" alt=''/>
		<p className="username">{props.name}</p>
		<p className='company'>{props.company}</p>
		<p className="designation">{props.designaton}</p>
		<p className="bio">{props.bio}</p>
		
		<div className="social-icons">
			<a className="social-icon" href="/" target="_blank">
				<i class="fa-brands fa-linkedin"></i>
				<FaLinkedinIn className='z-10 text-white'></FaLinkedinIn>
			</a>
			
			<a className="social-icon" href="/" target="_blank">
				<i class="fa-brands fa-youtube"></i>
				<FaYoutube className='z-10 text-white'></FaYoutube>
			</a>
			
			<a className="social-icon" href="/" target="_blank">
				<i class="fa-brands fa-twitter"></i>
				<FaTwitter className='z-10 text-white'></FaTwitter>
			</a>
		</div>
	</div>
</div>
    </div>
  )
}
