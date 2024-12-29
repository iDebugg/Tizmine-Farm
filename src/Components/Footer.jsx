import React from 'react'

const Footer = () => {
  return (
    <div className="footer bg-gray-100 display: flex flex-col gap-8 pr-6 pl-6">
        {/* <div className="footer-top grid grid-cols-1 sm:grid-cols-2 lg:flex justify-between gap-4">
            <div className="footer-top-left">
                <p className='max-w-2xl text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl'>I am a frontend developer from Lagos, Nigeria with over 4 years of experience in multiple personal freelance and companies projects</p>
            </div>
            <div className="footer-top-right display: flex items-center gap-2">
                <div className="footer-email-input display: flex gap-2 p-3 rounded-2xl bg-slate-500 items-center">
                <i class="fa-solid fa-user"></i>
                <input type="email" placeholder='Enter your email' className=' border-none	outline-none  bg-transparent	' />
                </div>
                <div className="footer-subscribe px-4 py-2 rounded-3xl ">Subscribe</div>
            </div>
        </div> */}
        <hr /> 
        <div className="footer-bottom display: GRID justify-between mb-5">
        <p className='footer-bottom-left'>RC NUMBER: 3727483</p>
            <p className='footer-bottom-left'>© 2024 Tizmine Farms. All rights reserved. </p>
            <div className="footer-bottom-right display: flex gap-3">
                {/* <p>Terms of services</p>
                <p>Privacy policy</p> */}
                {/* <p>Connect with me</p> */}
            </div>
        </div>
    </div>
  )
}

export default Footer