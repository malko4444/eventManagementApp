import React from 'react';
import { FaCalendarAlt, FaInfoCircle } from 'react-icons/fa';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar/Navbar';

export const PreviousEvents = () => {
  const events = [
    {
      id: 1,
      title: "Annual Gala 2024",
      description: "Join us for a night of celebration with industry leaders, amazing entertainment, and a stunning dinner.",
      date: "March 15, 2024",
      image: "assets/preEvent/1.jpg"
    },
    {
      id: 2,
      title: "Tech Conference 2023",
      description: "A two-day event where innovators in the tech world share their groundbreaking ideas.",
      date: "September 10, 2023",
      image: "assets/preEvent/2.jpg"
    },
    {
      id: 3,
      title: "Charity Run 2023",
      description: "Run for a cause! Help us raise funds for underprivileged children in our annual charity run.",
      date: "June 20, 2023",
      image: "assets/preEvent/3.jpg"
    },
    {
      id: 4,
      title: "Music Festival 2023",
      description: "Experience the best local and international music acts in our open-air music festival.",
      date: "July 5, 2023",
      image: "assets/preEvent/4.jpg"
    },
    {
      id: 5,
      title: "Business Networking Mixer",
      description: "Meet top professionals, network, and exchange ideas at our exclusive business mixer.",
      date: "April 22, 2023",
      image: "assets/preEvent/5.webp"
    },
    {
      id: 6,
      title: "Summer Workshop 2024",
      description: "A hands-on workshop for all ages, focusing on creativity and learning new skills.",
      date: "August 10, 2024",
      image: "assets/preEvent/1.jpg"
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-800 to-black">
      <div className='mb-12'><Navbar /></div>
      <h2 className="text-4xl font-bold text-center text-white mb-12">Events We Done Recently</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10">
        {events.map((event) => (
          <div
            key={event.id}
            className="relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-64 object-cover opacity-80 hover:opacity-100 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
            <div className="p-6 relative z-10">
              <h3 className="text-2xl font-semibold text-white">{event.title}</h3>
              <p className="text-gray-300 mt-2 text-sm">{event.description}</p>
              <div className="mt-4 flex items-center text-white">
                <FaCalendarAlt className="mr-2 text-lg" />
                <p className="text-sm">{event.date}</p>
              </div>
              <div className="mt-2 flex items-center text-white cursor-pointer hover:underline">
                <FaInfoCircle className="mr-2 text-lg" />
                <p className="text-sm">Learn More</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-12'>
        <Footer />
      </div>
    </div>
  );
};
