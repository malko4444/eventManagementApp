import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Poster = () => {
  return (
    <div className="relative w-screen h-screen bg-slate-300 overflow-hidden">
      {/* Background video */}
      <video
        src="video1.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      ></video>

      {/* Navbar */}
      <Navbar />

      {/* Gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

      {/* Main content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">
          Welcome to Event Masters
        </h1>
        <p className="text-lg md:text-2xl mt-4 animate-slide-up">
          Your gateway to memorable events and experiences.
        </p>

        {/* Call to action button */}
        
      </div>
    </div>
  );
};

export default Poster;
