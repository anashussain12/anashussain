"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed  top-0 left-0 w-full  text-white shadow-md shadow-black z-50">
      <div className="bg-black md:bg-[#161513] container mx-auto px-6 lg:px-32 xl:px-32 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className=" text-2xl font-bold hover:text-red-600 transition duration-300">
          <Link className=" outline-none border-none" href="/">
            Anas Hussain
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            className="hover:text-gray-400 transition duration-300"
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-gray-400 transition duration-300"
            href="/about"
          >
            About
          </Link>
          <Link
            className="hover:text-gray-400 transition duration-300"
            href="/contact"
          >
            Contact
          </Link>
          <Link
            className="hover:text-gray-400 transition duration-300"
            href="/projects"
          >
            Projects
          </Link>

          {/* Social Links */}
          <div className="flex space-x-4">
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition duration-300"
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition duration-300"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition duration-300"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="outline-none mobile-menu-button"
          >
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
      {isOpen && (
        <div className="bg-black container mx-auto px-6 lg:px-32 xl:px-32 py-4 ">
          {/* Navigation Links */}
          <div className="bg-black grid md:hidden items-center">
            <Link
              className="hover:text-gray-400 transition duration-300 py-2"
              href="/"
            >
              Home
            </Link>
            <Link
              className="hover:text-gray-400 transition duration-300 py-2"
              href="/"
            >
              About
            </Link>
            <Link
              className="hover:text-gray-400 transition duration-300 py-2"
              href="/"
            >
              Contacts
            </Link>
            <Link
              className="hover:text-gray-400 transition duration-300 py-2"
              href="/"
            >
              Projects
            </Link>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" py-2 hover:text-gray-400 transition duration-300"
              >
                <FaTwitter size={20} />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" py-2 hover:text-gray-400 transition duration-300"
              >
                <FaFacebook size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" py-2 hover:text-gray-400 transition duration-300"
              >
                <FaInstagram size={20} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
