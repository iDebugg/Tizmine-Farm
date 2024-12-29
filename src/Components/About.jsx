import React from 'react'
import '../Styles/About.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";



const About = () => {
    return (
      <div id='about' className='about bg-gray-100 display: flex flex-col justify-center items-center pr-3 pl-3 sm:pr-4 sm:pl-4 md:pr-6 md:pl-6 lg:pr-8 lg:pl-8 pt-10'>
          <div className="about-title">
              <h1 className='text-green-700 italic text-4xl font-bold'>About Us</h1>
  
          </div>
          <div className="text-center about-sections grid grid-cols-1 sm:grid-cols-2 lg:flex gap-5 mt-20 pb-40">
          <div className="about-right">
                  <div className="about-para text-left">
                      <h2 className='text-center'>About Us</h2> <br />
                      <h5>Tizmine Farms is an agricultural parastatal which takes live stock farming as its main focus with the aim of meeting demands of food consumption, Improvement to food supplement and nutritious food commercially .</h5><br />
                      <h5>Organization structure:</h5>
                      <li>Founder - Abioye Olatunde Olusoji.</li>
                      <li>Manager - Abioye Funmilayo.</li>
                      <li>Farm Consultant - Abioye Oluwatimilehin.</li>
                      <li>Farm Keeper - James Emmanuel.</li>
                      <li>Veterinary Doctor - Akindele Toba.</li>
                      <li>Miller/Workers - Olaji Farm Services.</li>
                      <h4>TIZMINE FARMS. </h4>
                      
                  </div>
              </div>
              <div className="about-right">
                  <div className="about-para text-left">
                      <h2 className='text-center'>Location/History</h2><br />
                      <h5>Tizmine farms is located at Oyedeji village off iwo road, Oyo state ibadan Nigeria. Tizmine Farms started it operation April 2018 as a household farm before it solely expands due to their consistency and diligence on the field. The farm has been contributing so well to the economic growth of the local community it's situated at and the nation at large.</h5><br />
                      <h5>Amenities in Tizmine Farms:</h5>
                      <li>Brooding section.</li>
                      <li>Farm house.</li>
                      <li>Layers section.</li>
                      <li>Broilers section.</li>
                      <li>Fish pond.</li>
                      <li>Milling house.</li>
                      <li>Field farm.</li>
                  </div>
              </div>
              <div className="about-right">
                  <div className="about-para text-left">
                      <h2 className='text-center'>Our Services</h2><br />
                      <h5>At Tizmine Farms, we specialize in providing high-quality poultry and livestock, raised with care and a commitment to sustainability. We focus on excellence in every aspect of farming.</h5><br />
                      <h5>At Tizmine Farms, we strive to:</h5>
                      <li>Sustainable Agriculture: By combining traditional methods with innovative techniques.</li>
                      <li>Quality Poultry and Livestock: We rear healthy poultry and livestock using ethical and sustainable farming practices to deliver premium-quality products.</li>
                      <li>Farm-to-Table Freshness: We ensure that our products are fresh, nutritious, and sourced directly from our farm to your table.</li>
                  </div>
              </div>
             
          </div>
      
      </div>
    )
  }

export default About