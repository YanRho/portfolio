"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Image from "next/image";

const NavigationSidebar = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      className="sidebar fixed top-0 left-0 h-full w-64 text-white flex flex-col items-center py-8 space-y-4"
      style={{
        background: "linear-gradient(to bottom, #09203f, #537895)", // Creates the Gradient Color
      }}
    >
      {/* Profile Image */}
      <div className="profile flex flex-col items-center mt-6">
        <div className=" rounded-full border-2 border-white hover:border-8 transition-all duration-300 transform hover:scale-105">
          <Image
            src="/imgs/dp.jpeg" // Replace with your image path
            alt="Your Name"
            width={150}
            height={150}
            quality={100}
            className="rounded-full "
          />
        </div>
      </div>

      {/* Name */}
      <h2 className="text-lg font-semibold mt-4">Bryan Rhoelle Bergenholtz</h2>

      <div className="social-icons flex space-x-4 mt-6 ">
        {isClient && (
          <>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="hover:text-blue-500"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="hover:text-pink-500"
              />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="hover:text-gray-800"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="hover:text-blue-700"
              />
            </a>
          </>
        )}
      </div>

      {/* Navigation Links */}
      <nav className="nav-links flex flex-col space-y-4 mt-8 text-lg">
        <a href="#home" className="hover:text-blue-400">
          Home
        </a>
        <a href="#about" className="hover:text-blue-400">
          About
        </a>
        <a href="#resume" className="hover:text-blue-400">
          Resume
        </a>
        <a href="#portfolio" className="hover:text-blue-400">
          Portfolio
        </a>
        <a href="#contact" className="hover:text-blue-400">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default NavigationSidebar;
