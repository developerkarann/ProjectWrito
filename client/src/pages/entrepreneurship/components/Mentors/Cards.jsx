import React from 'react';



export default function cards(props) {
  return (
    <div className='all '>
      <div className="card mcard">
	 <div className="card-borders">
		<div className="border-top"></div>
		<div className="border-right"></div>
		<div className="border-bottom "></div>
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
				<i className="fa-brands fa-linkedin"></i>
			</a>
			
			<a className="social-icon" href="/" target="_blank">
				<i className="fa-brands fa-youtube"></i>
			</a>
			
			<a className="social-icon" href="/" target="_blank">
				<i className="fa-brands fa-twitter"></i>
			</a>
	    </div>
	  </div>
     </div>
    </div>
  )
}
