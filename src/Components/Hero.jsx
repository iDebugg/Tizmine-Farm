import React from "react";
import "../Styles/Hero.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Farmvideo from '../assets/video/farmVideo.MP4'

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center text-white">
    {/* Background Video */}
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      src={Farmvideo}
      autoPlay
      loop
      muted
      playsInline
    />

    {/* Overlay */}
    <div className="absolute top-0 left-0 w-full h-full  bg-opacity-50"></div>

    {/* Content */}
    <div className="relative z-10 text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Welcome to <span className="text-green-500">Tizmine Farm</span>
      </h1>
      <p className="mt-4 text-lg md:text-xl">
        Quality Poultry & Livestock, Sustainably Raised.
      </p>
      <div className="mt-6">
        <button className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-md text-lg font-semibold">
          Learn More
        </button>
        <button className="ml-4 px-6 py-3 bg-transparent border-2 border-green-600 hover:bg-green-700 hover:text-white rounded-md text-lg font-semibold">
          Contact Us
        </button>
      </div>
    </div>
  </section>
  );
};

export default Hero;
