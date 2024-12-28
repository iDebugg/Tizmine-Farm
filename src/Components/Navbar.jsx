import React, { useState } from "react";
import "../Styles/Navbar.css";
import underlineImg from "../assets/Wheelbarrow.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import TizmineLogo from "../assets/8b34977f-554b-4e4d-9b62-f74f6310965e_2-removebg-preview.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState("home");

  return (
    <nav className="bg-green-700 text-white px-5 py-3 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img src={TizmineLogo} alt="" className="tizminelogo" />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-white hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Links */}
        <div className="hidden sm:flex space-x-6">
          <a href="#" className="hover:text-green-500">
            <AnchorLink className="anchor-link" href="#home">
              <p onClick={() => setMenu("home")}>Home</p>
            </AnchorLink>
            {menu === "home" ? (
              <img src={underlineImg} alt="" className="hugg" />
            ) : (
              <></>
            )}
          </a>
          <a href="#" className="hover:text-green-500">
            <AnchorLink className="anchor-link" offset={50} href="#about">
              <p onClick={() => setMenu("about")}>About Us</p>
            </AnchorLink>
            {menu === "about" ? (
              <img src={underlineImg} alt="" className="hugg" />
            ) : (
              <></>
            )}
          </a>
          <a href="#" className="hover:text-green-500">
            <AnchorLink className="anchor-link" offset={50} href="#Services">
              <p onClick={() => setMenu("Services")}>Services</p>
            </AnchorLink>
            {menu === "Services" ? (
              <img src={underlineImg} alt="" className="hugg" />
            ) : (
              <></>
            )}
          </a>
          <a href="#" className="hover:text-green-500">
            <AnchorLink className="anchor-link" offset={50} href="#Portfolio">
              <p onClick={() => setMenu("Portfolio")}>Gallery</p>
            </AnchorLink>
            {menu === "Portfolio" ? (
              <img src={underlineImg} alt="" className="hugg" />
            ) : (
              <></>
            )}
          </a>
          <a href="#" className="hover:text-green-500">
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              <p onClick={() => setMenu("Contact")}>Contact</p>
            </AnchorLink>
            {menu === "Contact" ? (
              <img src={underlineImg} alt="" className="hugg" />
            ) : (
              <></>
            )}
          </a>
        </div>

        {/* Connect Button */}
        <a
          href="#"
          className="hidden sm:inline-block bg-pink-500 hover:bg-green-600 hover:text-white text-white px-4 py-2 rounded-full shadow-lg connectwithMe"
        >
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Contact Us{" "}
          </AnchorLink>
        </a>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden">
          <a href="#" className="block text-left pb-3 pt-3 hover:bg-gray-400">
            <AnchorLink className="anchor-link" href="#home">
              <p onClick={() => setMenu("home")}>Home</p>
            </AnchorLink>
            {menu === "home"}
          </a>
          <a href="#" className="block text-left pb-3 hover:bg-gray-900">
            <AnchorLink className="anchor-link" offset={50} href="#about">
              <p onClick={() => setMenu("about")}>About Us</p>
            </AnchorLink>
            {menu === "about"}
          </a>
          <a href="#" className="block text-left pb-3 hover:bg-gray-900">
            <AnchorLink className="anchor-link" offset={50} href="#Services">
              <p onClick={() => setMenu("Services")}>Services</p>
            </AnchorLink>
            {menu === "Services"}
          </a>
          <a href="#" className="block text-left pb-3 hover:bg-gray-900">
            <AnchorLink className="anchor-link" offset={50} href="#Portfolio">
              <p onClick={() => setMenu("Portfolio")}>Gallery</p>
            </AnchorLink>
            {menu === "Portfolio"}
          </a>
          <a href="#" className="block text-left pb-3 hover:bg-gray-900">
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              <p onClick={() => setMenu("Contact")}>Contact</p>
            </AnchorLink>
            {menu === "contact"}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
