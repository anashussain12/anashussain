import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav  className=" text-[#a7a7a7] shadow-md">
      <div className="container  mx-auto px-6 lg:px-32 xl:px-32 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold ">
          <Link href="/">
            Anas Hussain
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link className=" hover:text-blue-500" href="/">
            Home
          </Link>
          <Link className=" hover:text-blue-500" href="/about">
           About
          </Link>
          <Link className=" hover:text-blue-500" href="/contact">
            Contact
          </Link>
          <Link className=" hover:text-blue-500" href="/projects">
            Projects
          </Link>
          {/* Social Links */}
          <div className="flex space-x-4">
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#a7a7a7]  hover:text-blue-500">
              <FaTwitter />
            </Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#a7a7a7] hover:text-blue-500">
              <FaFacebook />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#a7a7a7] hover:text-blue-500">
              <FaInstagram />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="outline-none mobile-menu-button">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="hidden mobile-menu">
        <ul className="space-y-2">
          <li>
            <Link className="block text-sm px-2 py-4 text-gray-600 hover:text-blue-500" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="block text-sm px-2 py-4 text-gray-600 hover:text-blue-500" href="/about">
            About
            </Link>
          </li>
          <li>
            <Link className="block text-sm px-2 py-4 text-gray-600 hover:text-blue-500" href="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="block text-sm px-2 py-4 text-gray-600 hover:text-blue-500" href="/projects">
              Projects
            </Link>
          </li>
          <li>
            <div className="flex space-x-4 px-2 py-4">
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
                <FaTwitter />
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
                <FaFacebook />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
                <FaInstagram />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
