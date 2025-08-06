"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div className="sticky top-0 z-50  bg-white/70 border-b border-gray-200 w-full">
        <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-4xl md:text-4xl font-extrabold tracking-wide transition-transform duration-300 hover:scale-105">
            <Link href="#">Anas Hussain</Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-8 text-2xl font-medium">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className="relative group transition-all duration-300"
                >
                  <a href={link.href} className="hover:text-blue-600">
                    {link.name}
                  </a>

                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 text-gray-700 text-2xl">
              <a
                href="https://github.com/anashussain12"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/anas-hussain-812395240/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div
            className="md:hidden z-50 transition-transform duration-200 hover:scale-110"
            onClick={toggleMenu}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </div>
        </nav>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-xl transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center px-6 py-4 border-b">
            <div className="text-xl font-bold">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Anas Hussain
              </Link>
            </div>
            <FiX
              size={24}
              onClick={toggleMenu}
              className="cursor-pointer transition-transform duration-200 hover:rotate-90"
            />
          </div>

          <ul className="flex bg-white flex-col mt-8 space-y-6 px-6 text-lg font-medium">
            {navLinks.map((link, index) => (
              <li
                key={link.name}
                className={`transform transition-all duration-300 ease-in-out delay-${
                  index * 100
                }`}
              >
                <a href={link.href} className="hover:text-blue-600">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Social Icons */}
          <div className="flex space-x-4 px-6 mt-10 text-2xl bg-white text-gray-700">
            <a
              href="https://github.com/anashussain12"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/anas-hussain-812395240/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {menuOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300"
    onClick={toggleMenu}
  />
)}
      </div>
    </>
  );
};

export default Navbar;
