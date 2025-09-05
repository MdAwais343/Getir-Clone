import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const HeroSection = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+90");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const location = useLocation();

  const countries = [
    { code: "+90", name: "Turkey", flag: "https://flagcdn.com/tr.svg" },
    { code: "+1", name: "United States", flag: "https://flagcdn.com/us.svg" },
    { code: "+44", name: "United Kingdom", flag: "https://flagcdn.com/gb.svg" },
    { code: "+49", name: "Germany", flag: "https://flagcdn.com/de.svg" },
    { code: "+33", name: "France", flag: "https://flagcdn.com/fr.svg" },
  ];

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCountryDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Phone number:", countryCode + phoneNumber);
  };

  return (
    <div>
      {/* Mobile View */}
      <div className="md:hidden">
        {/* Scrollable Navbar for Mobile */}
        <div className="bg-[rgb(76,51,152)] px-2 pt-1">
          <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
            <Link
              to="/"
              className={`bg-[rgb(93,62,188)] px-3 py-1 rounded-t-md flex-shrink-0 ${
                location.pathname === "/" ? "bg-[rgb(93,62,188)]" : ""
              }`}
            >
              <span className="text-yellow-300 text-sm font-semibold">
                getir
              </span>
            </Link>
            <Link
              to="/food"
              className={`px-3 py-1 rounded-t-md flex-shrink-0 ${
                location.pathname === "/food" ? "bg-[rgb(93,62,188)]" : ""
              }`}
            >
              <span className="text-white text-sm">getirfood</span>
            </Link>
            <Link
              to="/more"
              className={`px-3 py-1 rounded-t-md flex-shrink-0 ${
                location.pathname === "/more" ? "bg-[rgb(93,62,188)]" : ""
              }`}
            >
              <span className="text-white text-sm">getirmore</span>
            </Link>
            <Link
              to="/water"
              className={`px-3 py-1 rounded-t-md flex-shrink-0 ${
                location.pathname === "/water" ? "bg-[rgb(93,62,188)]" : ""
              }`}
            >
              <span className="text-white text-sm">getirwater</span>
            </Link>
            <Link
              to="/locals"
              className={`px-3 py-1 rounded-t-md flex-shrink-0 ${
                location.pathname === "/locals" ? "bg-[rgb(93,62,188)]" : ""
              }`}
            >
              <span className="text-white text-sm">getirlocals</span>
            </Link>
          </div>
        </div>

        {/* Small Hero Section for Mobile */}
        <div className="bg-[rgb(93,62,188)] py-6">
          <div className="text-center">
            <h1 className="text-yellow-300 text-2xl font-bold">getir</h1>
          </div>
        </div>

        {/* Delivery Address Section */}
        <div className="bg-white px-4 py-3 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-gray-700 text-sm">
              Select Delivery Address
            </span>
            <svg
              className="w-4 h-4 text-[rgb(76,51,152)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>

        {/* Login Form Section */}
        <div className="bg-white px-4 py-6">
          <h2 className="text-[rgb(76,51,152)] text-lg font-semibold mb-4 text-center">
            Login or register
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Phone Number Input */}
            <div className="flex space-x-2">
              {/* Country Code Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                  className="flex items-center justify-between w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[rgb(76,51,152)] focus:border-transparent text-sm"
                >
                  <span className="flex items-center space-x-2">
                    <img
                      src={countries.find((c) => c.code === countryCode)?.flag}
                      alt={countries.find((c) => c.code === countryCode)?.name}
                      className="w-4 h-3 object-cover rounded-sm"
                    />
                    <span className="text-sm">{countryCode}</span>
                  </span>
                  <svg
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                      showCountryDropdown ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {showCountryDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    {countries.map((country) => (
                      <button
                        key={country.code}
                        type="button"
                        onClick={() => {
                          setCountryCode(country.code);
                          setShowCountryDropdown(false);
                        }}
                        className="flex items-center space-x-3 w-full px-3 py-2 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                      >
                        <img
                          src={country.flag}
                          alt={country.name}
                          className="w-4 h-3 object-cover rounded-sm"
                        />
                        <span className="text-gray-700 text-sm">
                          {country.code}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Phone Number Input */}
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Mobile Phone"
                className="flex-1 bg-gray-50 border border-gray-300 rounded-md px-3 py-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[rgb(76,51,152)] focus:border-transparent text-sm"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-yellow-300 text-[rgb(76,51,152)] font-semibold py-3 px-3 rounded-md hover:bg-yellow-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 text-sm"
            >
              Continue with phone number
            </button>
          </form>
        </div>
      </div>

      {/* Desktop View - Keep Original */}
      <div className="hidden md:block py-8 sm:py-12 lg:py-20 flex items-center bg-[rgb(93,62,188)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Branding */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Logo */}
              <div className="flex justify-center lg:justify-start mb-4 lg:mb-6">
                <div className="relative">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-40 lg:h-40 bg-getir-yellow rounded-full flex items-center justify-center">
                    <span className="text-getir-purple text-xl sm:text-2xl lg:text-4xl font-bold">
                      getir
                    </span>
                  </div>
                  {/* Curved text around the bottom of the circle */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 lg:translate-y-1">
                    <svg
                      width="280"
                      height="160"
                      viewBox="0 0 280 160"
                      className="overflow-visible w-48 h-24 sm:w-56 sm:h-28 lg:w-80 lg:h-40"
                    >
                      <defs>
                        {/* This arc matches a circle */}
                        <path
                          id="curve"
                          d="M 40 80 A 100 100 0 0 0 240 80"
                          fill="none"
                        />
                      </defs>
                      <text
                        className="text-white text-sm sm:text-lg lg:text-xl font-semibold font-sans fill-white"
                        textAnchor="middle"
                      >
                        <textPath href="#curve" startOffset="50%">
                          groceries in minutes
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Slogan */}
              <div className="mt-6 sm:mt-8 lg:mt-14">
                <h1 className="text-white text-xl sm:text-2xl lg:text-4xl font-bold leading-tight px-2 sm:px-0">
                  At your door in minutes
                </h1>
              </div>
            </div>

            {/* Right side - Login Form */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="bg-white rounded-lg px-3 sm:px-6 py-4 sm:py-6 w-full max-w-sm shadow-2xl">
                <h2 className="text-getir-purple text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4 text-center">
                  Login or register
                </h2>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-3 sm:space-y-4"
                >
                  {/* Phone Number Input */}
                  <div className="flex space-x-2">
                    {/* Country Code Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                      <button
                        type="button"
                        onClick={() =>
                          setShowCountryDropdown(!showCountryDropdown)
                        }
                        className="flex items-center justify-between w-full bg-gray-50 border border-gray-300 rounded-md px-2 sm:px-3 py-2 sm:py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-getir-purple focus:border-transparent text-xs sm:text-sm lg:text-base"
                      >
                        <span className="flex items-center space-x-1 sm:space-x-2">
                          <img
                            src={
                              countries.find((c) => c.code === countryCode)
                                ?.flag
                            }
                            alt={
                              countries.find((c) => c.code === countryCode)
                                ?.name
                            }
                            className="w-3 h-2 sm:w-4 sm:h-3 lg:w-5 lg:h-4 object-cover rounded-sm"
                          />
                          <span className="text-xs sm:text-sm lg:text-base">
                            {countryCode}
                          </span>
                        </span>
                        <svg
                          className={`w-3 h-3 sm:w-4 sm:h-4 text-gray-400 transition-transform duration-200 ${
                            showCountryDropdown ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {showCountryDropdown && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                          {countries.map((country) => (
                            <button
                              key={country.code}
                              type="button"
                              onClick={() => {
                                setCountryCode(country.code);
                                setShowCountryDropdown(false);
                              }}
                              className="flex items-center space-x-2 sm:space-x-3 w-full px-2 sm:px-3 py-2 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                            >
                              <img
                                src={country.flag}
                                alt={country.name}
                                className="w-3 h-2 sm:w-4 sm:h-3 lg:w-5 lg:h-4 object-cover rounded-sm"
                              />
                              <span className="text-gray-700 text-xs sm:text-sm lg:text-base">
                                {country.code}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Phone Number Input */}
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Mobile Phone"
                      className="flex-1 bg-gray-50 border border-gray-300 rounded-md px-2 sm:px-3 py-2 sm:py-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-getir-purple focus:border-transparent text-xs sm:text-sm lg:text-base"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-getir-yellow text-getir-purple font-semibold py-2 sm:py-3 px-3 rounded-md hover:bg-yellow-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-getir-yellow focus:ring-offset-2 text-xs sm:text-sm lg:text-base"
                  >
                    Continue with phone number
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
