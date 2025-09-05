import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="hidden md:block text-white px-4 py-0 bg-[rgb(76,51,152)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Navigation Links */}
        <div className="flex items-center">
          <Link
            to="/"
            className={`text-white hover:bg-[rgb(93,62,188)] transition-all duration-200 px-3 py-2 mt-1 rounded-t-md font-sans ${
              location.pathname === "/" ? "bg-[rgb(93,62,188)]" : ""
            }`}
          >
            <span
              className={
                location.pathname === "/" ? "text-yellow-300" : "text-white"
              }
            >
              getir
            </span>
          </Link>
          <Link
            to="/food"
            className={`text-white hover:bg-[rgb(93,62,188)] transition-all duration-200 ml-6 px-3 py-2 mt-1 rounded-t-md font-sans ${
              location.pathname === "/food" ? "bg-[rgb(93,62,188)]" : ""
            }`}
          >
            <span
              className={
                location.pathname === "/food" ? "text-yellow-300" : "text-white"
              }
            >
              getir
            </span>
            <span className="text-white">food</span>
          </Link>
          <Link
            to="/more"
            className={`text-white hover:bg-[rgb(93,62,188)] transition-all duration-200 ml-6 px-3 py-2 mt-1 rounded-t-md font-sans ${
              location.pathname === "/more" ? "bg-[rgb(93,62,188)]" : ""
            }`}
          >
            <span
              className={
                location.pathname === "/more" ? "text-yellow-300" : "text-white"
              }
            >
              getir
            </span>
            <span className="text-white">more</span>
          </Link>
          <Link
            to="/water"
            className={`text-white hover:bg-[rgb(93,62,188)] transition-all duration-200 ml-6 px-3 py-2 mt-1 rounded-t-md font-sans ${
              location.pathname === "/water" ? "bg-[rgb(93,62,188)]" : ""
            }`}
          >
            <span
              className={
                location.pathname === "/water"
                  ? "text-yellow-300"
                  : "text-white"
              }
            >
              getir
            </span>
            <span className="text-white">water</span>
          </Link>
          <Link
            to="/locals"
            className={`text-white hover:bg-[rgb(93,62,188)] transition-all duration-200 ml-6 px-3 py-2 mt-1 rounded-t-md font-sans ${
              location.pathname === "/locals" ? "bg-[rgb(93,62,188)]" : ""
            }`}
          >
            <span
              className={
                location.pathname === "/locals"
                  ? "text-yellow-300"
                  : "text-white"
              }
            >
              getir
            </span>
            <span className="text-white">locals</span>
          </Link>
        </div>

        {/* Right side items */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <div className="flex items-center space-x-1 text-white hover:text-gray-200 cursor-pointer">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 32 32">
              <path d="M16 0c-8.873 0-16 7.127-16 16s7.127 16 16 16c8.873 0 16-7.127 16-16s-7.127-16-16-16zM28.945 14.545h-5.818c-0.291-4.073-1.6-7.855-3.927-11.2 5.236 1.309 9.164 5.818 9.745 11.2zM20.218 14.545h-8.436c0.291-3.927 1.745-7.709 4.218-10.764 2.473 3.055 3.927 6.836 4.218 10.764zM12.655 3.345c-2.182 3.345-3.491 7.127-3.782 11.2h-5.818c0.582-5.382 4.509-9.891 9.6-11.2zM3.055 17.455h5.818c0.291 4.073 1.6 7.855 3.927 11.2-5.236-1.309-9.164-5.818-9.745-11.2zM16 28.218c-2.473-3.2-3.927-6.836-4.218-10.764h8.582c-0.436 3.927-1.891 7.709-4.364 10.764zM19.345 28.655c2.182-3.345 3.636-7.127 3.927-11.2h5.818c-0.727 5.382-4.655 9.891-9.745 11.2z" />
            </svg>
            <span className="text-sm">English (EN)</span>
          </div>

          {/* Login Button */}
          <button className="flex items-center space-x-1 text-white hover:text-gray-200 transition-colors cursor-pointer">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 32 32">
              <path d="M24 8.846c0 4.39-3.582 7.948-8 7.948s-8-3.559-8-7.948c0-4.39 3.582-7.948 8-7.948s8 3.558 8 7.948z M0.027 28.896c-0.207 1.16 0.83 2.206 2.116 2.206h27.713c1.327 0 2.324-1.048 2.116-2.206-1.204-6.696-7.884-10.511-15.974-10.511s-14.77 3.815-15.972 10.511h-0z" />
            </svg>
            <span className="text-sm">Login</span>
          </button>

          {/* Sign Up Button */}
          <Link
            to="/signup"
            className="flex items-center space-x-1 text-white hover:text-gray-200 transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 32 32">
              <path d="M12 14c1.187 0 2.347-0.352 3.333-1.011s1.756-1.596 2.21-2.693c0.454-1.096 0.573-2.303 0.342-3.467s-0.803-2.233-1.642-3.072c-0.839-0.839-1.908-1.411-3.072-1.642s-2.37-0.113-3.467 0.341-2.033 1.223-2.693 2.21c-0.659 0.987-1.011 2.147-1.011 3.333 0 1.591 0.632 3.117 1.757 4.243s2.651 1.757 4.243 1.757zM12 18c3.183 0 6.235 1.264 8.485 3.515s3.515 5.303 3.515 8.485h-24c0-3.183 1.264-6.235 3.515-8.485s5.303-3.515 8.485-3.515v0zM28 10c0-0.53-0.211-1.039-0.586-1.414s-0.884-0.586-1.414-0.586c-0.53 0-1.039 0.211-1.414 0.586s-0.586 0.884-0.586 1.414v2h-2c-0.53 0-1.039 0.211-1.414 0.586s-0.586 0.884-0.586 1.414c0 0.53 0.211 1.039 0.586 1.414s0.884 0.586 1.414 0.586h2v2c0 0.53 0.211 1.039 0.586 1.414s0.884 0.586 1.414 0.586c0.53 0 1.039-0.211 1.414-0.586s0.586-0.884 0.586-1.414v-2h2c0.53 0 1.039-0.211 1.414-0.586s0.586-0.884 0.586-1.414c0-0.53-0.211-1.039-0.586-1.414s-0.884-0.586-1.414-0.586h-2v-2z" />
            </svg>
            <span className="text-sm">Sign Up</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
