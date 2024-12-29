import React from "react";
// import { motion } from 'framer-motion';

import { FaUsers, FaChalkboardTeacher, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const CommunityIntro = () => {
  return (
    <div className="relative pt-8 border-gray-600 border-t animate-fadeIn flex flex-col lg:flex-row-reverse lg:gap-4">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src="img2.jpg"
          alt="Event Management"
          className="rounded-lg w-[400px] h-[477px] lg:w-[600px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
      <div className="text-center mt-6">
        <h2 className="text-4xl font-poppinsSemibold text-green-700 mb-4 lg:mb-8">
          Event Management Community
        </h2>
        <ul className="space-y-4 lg:space-y-8 text-gray-700 text-lg animate-fadeIn">
          <li className="flex items-center text-start gap-2 space-x-3 group">
            <FaUsers className="text-green-600 text-2xl group-hover:scale-125 transition-transform duration-300" />
            <span className="group-hover:text-green-700 font-poppinsMedium transition-colors duration-300">
              At{" "}
              <span className="text-green-600 font-poppinsSemibold">
                Event Masters
              </span>
              , we believe in the power of bringing people together through events.
            </span>
          </li>
          <li className="flex items-center text-start gap-2 space-x-3 group">
            <FaChalkboardTeacher className="text-green-600 text-xl group-hover:scale-125 transition-transform duration-300" />
            <span className="group-hover:text-green-700 font-poppinsMedium transition-colors duration-300">
              Join our community to learn about event planning, tips, and strategies.
            </span>
          </li>
          <li className="flex items-center text-start font-poppinsMedium gap-2 space-x-3 group">
            <FaCalendarAlt className="text-green-600 text-xl group-hover:scale-125 transition-transform duration-300" />
            <span className="group-hover:text-green-700 transition-colors duration-300">
              Stay updated on upcoming events and exciting opportunities.
            </span>
          </li>
        </ul>
        <div className="mt-6 flex w-full justify-center space-x-4">
          <Link
            to="/FarmerCommunity"
            className="bg-gray-600 w-full lg:w-[400px] font-poppinsMedium text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-700 transition-transform transform hover:scale-105"
          >
            Check Upcoming Events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommunityIntro;
