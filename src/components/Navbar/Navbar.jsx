import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute inset-0 z-10 pt-8 px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white h-[100px] w-[100px] font-bold text-xl">
          <img src="eventLogo.webp" alt="Kissan Dost" className="h-[40px] w-[40px] rounded" />
        </div>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="font-poppinsMedium text-white hover:text-gray-600">
            Home
          </Link>
          <Link to="/addThoughts" className="font-poppinsMedium text-white hover:text-gray-600">
            Add your's
          </Link>
          <Link to="/FarmerCommunity" className="font-poppinsMedium text-white hover:text-gray-600">
            Upcoming Project
          </Link>
          <Link to="/previousEvent" className="font-poppinsMedium text-white hover:text-gray-600">
            Recent pro
          </Link>
          <Link to="/About" className="font-poppinsMedium text-white hover:text-gray-600">
            About Us
          </Link>
          <Link to="/Contact" className="font-poppinsMedium text-white hover:text-gray-600">
            Contact Us
          </Link>
          <Link to="/login" className="font-poppinsMedium text-white hover:text-gray-600">
            Login
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navbar Links */}
      <div
        className={`md:hidden flex flex-col items-center justify-start absolute top-16 left-0 w-full bg-black bg-opacity-30 p-6 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
      >
        <Link
          to="/"
          className="block text-white py-3 px-6 mb-4 rounded-lg hover:bg-green-500 hover:bg-opacity-30 w-[60%] font-poppinsMedium text-center hover:text-gray-600 transition-all duration-300 ease-in-out"
        >
          Home
        </Link>
        <Link
          to="/addThouhts"
          className="block text-white py-3 px-6 mb-4 rounded-lg hover:bg-green-500 hover:bg-opacity-30 w-[60%] font-poppinsMedium text-center hover:text-gray-600 transition-all duration-300 ease-in-out"
        >
          Add Your's
        </Link>
        <Link
          to="/FarmerCommunity"
          className="block text-white py-3 px-6 mb-4 rounded-lg hover:bg-green-500 hover:bg-opacity-30 w-[60%] font-poppinsMedium text-center hover:text-gray-600 transition-all duration-300 ease-in-out"
        >
          Up comming Project
        </Link>
        <Link
          to="/previousEvent"
          className="block text-white py-3 px-6 mb-4 rounded-lg hover:bg-green-500 hover:bg-opacity-30 w-[60%] font-poppinsMedium text-center hover:text-gray-600 transition-all duration-300 ease-in-out"
        >
          Recent Project
        </Link>
        <Link
          to="/Contact"
          className="block text-white py-3 px-6 mb-4 rounded-lg hover:bg-green-500 hover:bg-opacity-30 w-[60%] font-poppinsMedium text-center hover:text-gray-600 transition-all duration-300 ease-in-out"
        >
          Contact Us
        </Link>
        <Link
          to="/About"
          className="block text-white py-3 px-6 mb-4 rounded-lg hover:bg-green-500 hover:bg-opacity-30 w-[60%] font-poppinsMedium text-center hover:text-gray-600 transition-all duration-300 ease-in-out"
        >
          About us
        </Link>
        <Link
          to="/login"
          className="block text-white py-3 px-6 mb-4 rounded-lg hover:bg-green-500 hover:bg-opacity-30 w-[60%] font-poppinsMedium text-center hover:text-gray-600 transition-all duration-300 ease-in-out"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
