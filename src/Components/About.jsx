import React from 'react'
import '../Styles/About.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// const About = () => {
//   return (
//     <div id='about' className='about bg-gray-100 display: flex flex-col justify-center items-center pr-3 pl-3 sm:pr-4 sm:pl-4 md:pr-6 md:pl-6 lg:pr-8 lg:pl-8 pt-10'>
//         <div className="about-title">
//             <h1 className='text-green-700 italic text-4xl font-bold'>About Us</h1>

//         </div>
//         <div className="text-center about-sections grid grid-cols-1 sm:grid-cols-2 lg:flex gap-5 mt-20 pb-40">
//             <div className="about-right">
//                 <div className="about-para text-left">
//                     <h2 className='text-center'>Our Mission</h2><br />
//                     <h5>Our mission is to provide the highest quality poultry and livestock while maintaining sustainable farming practices. We are dedicated to offering fresh, healthy products to our customers while caring for the well-being of our animals and the environment.</h5>
//                     <h5>At Tizmine Farm, we strive to:</h5>
//                     <li>Promote animal welfare and sustainable farming methods.</li>
//                     <li>Deliver fresh, nutritious products to our community.</li>
//                     <li>Innovate for the future of farming, creating long-lasting positive impacts on our industry.</li>
//                 </div>
//             </div>
//             <div className="about-right">
//                 <div className="about-para text-left">
//                     <h2 className='text-center'>Our Services</h2><br />
//                     <h5>At Tizmine Farm, we specialize in providing high-quality poultry and livestock, raised with care and a commitment to sustainability. We focus on excellence in every aspect of farming.</h5>
//                     <h5>At Tizmine Farm, we strive to:</h5>
//                     <li>Sustainable Agriculture: By combining traditional methods with innovative techniques.</li>
//                     <li>Quality Poultry and Livestock: We rear healthy poultry and livestock using ethical and sustainable farming practices to deliver premium-quality products.</li>
//                 </div>
//             </div>
//             <div className="about-right">
//                 <div className="about-para text-left">
//                     <h2 className='text-center'>Our Values</h2> <br />
//                     <h5>At Tizmine Farm, we are guided by core values that drive our day-to-day operations, interactions with customers, and commitment to the environment.</h5>
//                     <h5>At Tizmine Farm, we strive to:</h5>
//                     <li>Sustainability:We are committed to sustainable practices that preserve the environment for future generations.</li>
//                     <li>Quality:We take pride in producing high-quality poultry and livestock that meet rigorous standards.</li>
//                     <li>Integrity:We believe in doing what’s right, even when no one is watching.</li>
                    
//                 </div>
//             </div>
//         </div>
    
//     </div>
//   )
// }
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
                      <h5>Tizmine Farms is an agricultural parastatal which takes live stock farming as it's main focus with the aim of meeting demands of food consumption, Improvement to food supplement and nutritious food commercially .</h5><br />
                      <h5>At Tizmine Farm, we strive to:</h5>
                      <li>Sustainability:We are committed to sustainable practices that preserve the environment for future generations.</li>
                      <li>Quality:We take pride in producing high-quality poultry and livestock that meet rigorous standards.</li>
                      <li>Integrity:We believe in doing what’s right, even when no one is watching.</li>
                      
                  </div>
              </div>
              <div className="about-right">
                  <div className="about-para text-left">
                      <h2 className='text-center'>Location/History</h2><br />
                      <h5>Tizmine farms is located at Oyedeji village off iwo road Oyo state ibadan Nigeria. Tizmine Farms starteed it operation operation April 2018 as a household farm before it solely expands to due their consistency and diligence on the field and farm has been contributing so well to econimic growth of the local community it's situated at.</h5><br />
                      <h5>Amenities in Tizmine Farms:</h5>
                      <li>Brooding section</li>
                      <li>Farm house.</li>
                      <li>Layers section.</li>
                      <li>Broilers section</li>
                      <li>Fish pond</li>
                      <li>Milling house</li>
                      <li>Field farm</li>
                  </div>
              </div>
              <div className="about-right">
                  <div className="about-para text-left">
                      <h2 className='text-center'>Our Services</h2><br />
                      <h5>At Tizmine Farm, we specialize in providing high-quality poultry and livestock, raised with care and a commitment to sustainability. We focus on excellence in every aspect of farming.</h5><br />
                      <h5>At Tizmine Farm, we strive to:</h5>
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