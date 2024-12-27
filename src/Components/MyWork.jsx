import React from 'react'
import "../Styles/MyWork.css";
import image1 from '../assets/Screenshot 2024-10-30 at 5.06.45 PM.png'
import image2 from '../assets/Hero.svg'
import image3 from '../assets/Home Page.svg'
import image4 from '../assets/Home Page1.svg'
import image5 from '../assets/Screenshot 2024-10-29 at 7.05.12 PM.png'
import image6 from '../assets/Screenshot 2024-10-30 at 5.04.24 PM.png'


const MyWork = () => {
  return (
    <div id='Portfolio' className='mywork display: flex flex-col justify-center items-center pr-3 pl-3 sm:pr-4 sm:pl-4 md:pr-6 md:pl-6 lg:pr-8 lg:pl-8 mt-20'>
        <div className="mywork-title">
            <h1 className='text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl'>My latest work </h1>
        </div>
        <div className="services-container text-center about-sections grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4 mt-20">
            <div className="mywork-format">
                <img src={image1} alt=""/>
              </div>
            <div className="mywork-format">
            <img src={image2} alt=""/>
               </div>
            <div className="mywork-format">
            <img src={image3} alt=""/>
            </div>
            
            
        </div>
        <div className="services-container text-center about-sections grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4 mt-5">
          <a href="https://cemperium-web.vercel.app/">
          <div className="mywork-format">
                <img src={image4} alt=""/>
              </div>
          </a>
            
            <div className="mywork-format">
            <img src={image5} alt=""/>
               </div>
            <div className="mywork-format">
            <img src={image6} alt=""/>
            </div>
            
            
        </div>

    </div>
  )
}

export default MyWork