import React from "react";
import "./loans.css";
import { FaCalendarCheck, FaUsers, FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";

function EventsIntro() {
  return (
    <div className="relative mt-10 animate-fadeIn flex flex-col lg:flex-row lg:gap-4">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src="img1.jpg"
          alt="Event Management"
          className="rounded-lg w-[400px] h-[477px] lg:w-[600px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
      <div className="text-center mt-6">
        <h2 className="text-4xl font-poppinsSemibold text-green-700 mb-4 lg:mb-8">
          Previous Events
        </h2>

        <ul className="space-y-4 lg:space-y-8 text-gray-700 text-lg animate-fadeIn">
          <li className="flex items-center text-start gap-2 space-x-3 group">
            <FaCalendarCheck className="text-green-600 text-2xl max-sm:text-[2.5rem] group-hover:scale-125 transition-transform duration-300" />
            <span className="group-hover:text-green-700 transition-colors duration-300 font-poppinsMedium">
              At{" "}
              <span className="text-green-600 font-poppinsSemibold">
                Event Masters
              </span>
              , we bring people together to create unforgettable events.
            </span>
          </li>
          <li className="flex items-center text-start gap-2 space-x-3 group">
            <FaUsers className="text-green-600 text-xl group-hover:scale-125 transition-transform duration-300" />
            <span className="group-hover:text-green-700 transition-colors duration-300 font-poppinsMedium">
              Join our community to learn more about past events and upcoming opportunities.
            </span>
          </li>
          <li className="flex items-center text-start gap-2 space-x-3 group">
            <FaClipboardList className="text-green-600 text-xl group-hover:scale-125 transition-transform duration-300" />
            <span className="group-hover:text-green-700 transition-colors duration-300 font-poppinsMedium">
              Check out the highlights from our previous events to stay inspired.
            </span>
          </li>
        </ul>
        <div className="mt-6 lg:mt-15 flex w-full justify-center space-x-4">
          <Link
            to="/PreviousEvent"
            className="bg-green-600 font-poppinsMedium text-white py-2 px-4 rounded-lg w-full lg:w-[400px] shadow-md hover:bg-green-700 transition-colors duration-300"
          >
            View Past Events
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventsIntro;
