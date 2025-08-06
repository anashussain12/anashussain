'use client';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

        {/* Brand / About */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Anas Hussain</h3>
          <p className="text-sm leading-relaxed">
            Next JS Developer specializing in crafting beautiful & functional web experiences 
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-medium text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h4 className="text-lg font-medium text-white mb-3">Connect</h4>
          <div className="flex space-x-4 text-xl">
            
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <FaLinkedin />
            </a>
          </div>
          <p className="mt-4 text-sm">Email: <a href="mailto:your@email.com" className="hover:underline">hussainanas68@gmail.com</a></p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Anas Hussain. All rights reserved.
      </div>
    </footer>
  );
}
