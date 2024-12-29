import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-700 to-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Logo & Description */}
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Event Masters</h1>
            <p className="text-sm font-light">
              Your trusted partner in organizing unforgettable events, from planning to execution, we make every event a success.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2">
            <h2 className="font-semibold text-lg">Quick Links</h2>
            <ul className="space-y-1">
              <li><Link to="/EventServices" className="hover:underline font-light">Our Services</Link></li>
              <li><Link to="/Portfolio" className="hover:underline font-light">Portfolio</Link></li>
              <li><Link to="/About" className="hover:underline font-light">About Us</Link></li>
              <li><Link to="/Contact" className="hover:underline font-light">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <h2 className="font-semibold text-lg">Contact Us</h2>
            <ul className="space-y-1">
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-yellow-400" />
                <span>+92 308 5440364</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-yellow-400" />
                <span>contact@eventmasters.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-2">
            <h2 className="font-semibold text-lg">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-300">
                <FaFacebook className="text-2xl text-blue-500" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-300">
                <FaTwitter className="text-2xl text-blue-400" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-300">
                <FaInstagram className="text-2xl text-pink-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-600 pt-4 text-center text-sm">
          © 2024 Event Masters. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
