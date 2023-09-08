import React from 'react'
import '../HireFromUs.css'

export default function Skilled() {
  return (
    <div>
        <div className="container">
            <div className="col-left">
                <div className="cir">
                <div className="cir2"></div>
                <div className="circle">
                    <h1 className="h1">100+</h1>
                    <p className="cir-disc p">Deliverd</p><p className="cir-disc p">Projects</p>
                </div>
                <div className="circle">
                    <h1 className="h1">Half</h1>
                    <p className="cir-disc p">Bilion </p><p className="cir-disc p"> Usages</p>
                </div>
                <div className="circle">
                    <h1 className="h1">40+</h1>
                    <p className="cir-disc p">Expert </p><p className="cir-disc p"> Developer</p>
                </div>
                <div className="circle">
                    <h1 className="h1">2M+</h1>
                    <p className="cir-disc p">Users of </p> <p className="cir-disc p">the Code</p>
                </div>
                </div>
            </div>
            <div className="col-right">
                <h1 className="text-lg md:text-5xl font-bold">Hire our <span className='text-pink'>experienced</span> & <span className='text-pink'>skilled</span> developers</h1>
                <br />
                <p className="content p">We are one of the leading UI/UX design, front-end development & backend development consultancy companies and are available for hire.</p>
                <br />
                <p className="content p">Save at least <strong>40%</strong> of your cost than US & Europe.</p>
                <button className="allBtn">Get a quote</button>
            </div>
        </div>
    </div>
  )
}
