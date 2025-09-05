import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

const GetirWaterPage = () => {
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [countryCode, setCountryCode] = useState("+90");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Single water bottle background image
  const backgroundImage = "/redd-francisco-ibdn5iCYAdw-unsplash.jpg";

  // Countries data
  const countries = [
    { name: "Turkey", code: "+90", flag: "https://flagcdn.com/tr.svg" },
    { name: "United States", code: "+1", flag: "https://flagcdn.com/us.svg" },
    { name: "United Kingdom", code: "+44", flag: "https://flagcdn.com/gb.svg" },
    { name: "Germany", code: "+49", flag: "https://flagcdn.com/de.svg" },
    { name: "France", code: "+33", flag: "https://flagcdn.com/fr.svg" },
  ];

  // Handle phone form submission
  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    // Handle phone submission logic here
    console.log("Phone submitted:", countryCode + phoneNumber);
  };

  // Close dropdown when clicking outside
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

  return (
    <div className="min-h-screen">
      {/* Mobile View */}
      <div className="md:hidden">
        {/* Scrollable Navbar for Mobile */}
        <div className="bg-[rgb(76,51,152)] px-2 pt-1">
          <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
            <Link
              to="/"
              className={`px-3 py-1 rounded-t-md flex-shrink-0 ${
                location.pathname === "/" ? "bg-[rgb(93,62,188)]" : ""
              }`}
            >
              <span className="text-white text-sm">getir</span>
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
              className={`bg-[rgb(93,62,188)] px-3 py-1 rounded-t-md flex-shrink-0 ${
                location.pathname === "/water" ? "bg-[rgb(93,62,188)]" : ""
              }`}
            >
              <span className="text-yellow-300 text-sm font-semibold">
                getirwater
              </span>
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
            <h1 className="text-2xl font-bold">
              <span className="text-yellow-300">getir</span>
              <span className="text-white">water</span>
            </h1>
          </div>
        </div>

        {/* Water Service Info Section */}
        <div className="bg-white px-4 py-12 relative overflow-hidden">
          {/* Water bottle background image */}
          <div className="absolute inset-0 z-0">
            <img
              src={backgroundImage}
              alt="Water bottles"
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                filter: "brightness(0.9)",
              }}
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-white/80"></div>
          </div>

          <div className="relative z-10 text-center">
            <p className="text-gray-700 text-lg mb-6">
              We now only offer our services through our app.
            </p>
            <p className="text-gray-700 text-lg">
              Download the Getir app, place your order, and have your favorite
              water brand delivered right to your door!
            </p>
          </div>
        </div>

        {/* Mobile Download Section */}
        <div className="md:hidden bg-[rgb(93,62,188)] px-4 py-6">
          <div className="text-left">
            <h2 className="text-xl font-bold text-white mb-3">
              Download Getir!
            </h2>
            <p className="text-white mb-6 opacity-90">
              Let us deliver your order to your door in minutes.
            </p>

            <div className="space-y-3">
              {/* App Store */}
              <a href="#" className="block hover:opacity-80 transition-opacity">
                <div className="inline-flex items-center justify-center bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 h-[45px] w-[140px]">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="text-sm font-semibold">App Store</div>
                    </div>
                  </div>
                </div>
              </a>

              {/* Google Play */}
              <a href="#" className="block hover:opacity-80 transition-opacity">
                <div className="inline-flex items-center justify-center bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 h-[45px] w-[140px]">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">GET IT ON</div>
                      <div className="text-sm font-semibold">Google Play</div>
                    </div>
                  </div>
                </div>
              </a>

              {/* Huawei AppGallery */}
              <a href="#" className="block hover:opacity-80 transition-opacity">
                <div className="inline-flex items-center justify-center bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 h-[45px] w-[140px]">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">EXPLORE IT ON</div>
                      <div className="text-sm font-semibold">AppGallery</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop View - Keep Original */}
      <div className="hidden md:block">
        {/* Hero Section with Login Form */}
        <div className="relative overflow-hidden h-[80vh]">
          <div className="absolute inset-0 z-0">
            {/* Single water bottle background image */}
            <img
              src={backgroundImage}
              alt="Water bottles"
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                filter: "brightness(0.7)",
              }}
            />
            {/* Overlay for better text readability - gradient from left to right */}
            <div className="absolute inset-0 bg-gradient-to-r from-getir-purple via-getir-purple/40 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-between px-2 sm:px-4 lg:px-8">
            {/* Left Side - Branding */}
            <div className="hidden lg:block lg:w-1/2 text-white">
              <div className="max-w-xl">
                <p className="text-2xl pl-8 opacity-90 mb-4">
                  We now only offer our services through our app.
                </p>
                <p className="text-2xl opacity-90 mt-2 pl-8 mb-4">
                  Download the Getir app, place your order,
                  <br />
                </p>
                <p className="text-2xl opacity-90 mt-2 pl-8 whitespace-nowrap">
                  and have your favorite water brand delivered right to your
                  door!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Download Section - Only Purple Area */}
        <div className="bg-gray-100 py-8 pb-16">
          <div className="max-w-7xl mx-auto px-8">
            {/* Purple Download Section */}
            <div className="bg-getir-purple pt-16 pb-0 relative overflow-hidden rounded-2xl">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-8 h-8 border-2 border-white rounded-full"></div>
                <div className="absolute top-20 right-20 w-6 h-6 border-2 border-white transform rotate-45"></div>
                <div className="absolute top-32 left-1/4 w-4 h-4 bg-white rounded-full"></div>
                <div className="absolute top-16 right-1/3 w-10 h-10 border-2 border-white rounded-lg"></div>
                <div className="absolute top-40 left-1/2 w-6 h-6 border-2 border-white transform rotate-12"></div>
                <div className="absolute top-24 right-10 w-8 h-8 border-2 border-white rounded-full"></div>
                <div className="absolute top-36 left-16 w-5 h-5 bg-white transform rotate-45"></div>
                <div className="absolute top-28 right-1/4 w-7 h-7 border-2 border-white rounded-lg"></div>
                <div className="absolute top-44 left-1/3 w-4 h-4 border-2 border-white rounded-full"></div>
                <div className="absolute top-20 left-2/3 w-6 h-6 border-2 border-white transform rotate-45"></div>
                <div className="absolute top-48 right-16 w-5 h-5 bg-white rounded-full"></div>
                <div className="absolute top-32 left-3/4 w-8 h-8 border-2 border-white rounded-lg"></div>
                <div className="absolute top-52 left-1/5 w-6 h-6 border-2 border-white transform rotate-12"></div>
                <div className="absolute top-40 right-1/5 w-4 h-4 bg-white transform rotate-45"></div>
                <div className="absolute top-56 left-2/5 w-7 h-7 border-2 border-white rounded-full"></div>
                <div className="absolute top-44 right-2/5 w-5 h-5 border-2 border-white rounded-lg"></div>
                <div className="absolute top-60 left-3/5 w-6 h-6 border-2 border-white transform rotate-45"></div>
                <div className="absolute top-48 right-3/5 w-4 h-4 bg-white rounded-full"></div>
                <div className="absolute top-64 left-4/5 w-8 h-8 border-2 border-white rounded-lg"></div>
                <div className="absolute top-52 right-4/5 w-5 h-5 border-2 border-white transform rotate-12"></div>
                <div className="absolute top-68 left-1/6 w-6 h-6 border-2 border-white rounded-full"></div>
                <div className="absolute top-56 right-1/6 w-7 h-7 border-2 border-white transform rotate-45"></div>
                <div className="absolute top-72 left-2/6 w-4 h-4 bg-white rounded-lg"></div>
                <div className="absolute top-60 right-2/6 w-6 h-6 border-2 border-white rounded-full"></div>
                <div className="absolute top-76 left-3/6 w-8 h-8 border-2 border-white transform rotate-12"></div>
                <div className="absolute top-64 right-3/6 w-5 h-5 border-2 border-white rounded-lg"></div>
                <div className="absolute top-80 left-4/6 w-6 h-6 border-2 border-white transform rotate-45"></div>
                <div className="absolute top-68 right-4/6 w-4 h-4 bg-white rounded-full"></div>
                <div className="absolute top-84 left-5/6 w-7 h-7 border-2 border-white rounded-lg"></div>
                <div className="absolute top-72 right-5/6 w-6 h-6 border-2 border-white transform rotate-12"></div>
              </div>

              <div className="max-w-7xl mx-auto pl-12 pr-0 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                  {/* Left Section - Text and Download Buttons */}
                  <div className="lg:w-1/2 mb-8 lg:mb-10 lg:pr-8">
                    <h2 className="text-2xl lg:text-2xl font-bold text-white mb-4">
                      Download Getir!
                    </h2>
                    <p className="text-xl text-white mb-8 opacity-90">
                      Let us deliver your order to your door in minutes.
                    </p>

                    {/* Download Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* App Store */}
                      <a
                        href="#"
                        className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 min-h-[60px] min-w-[180px]"
                      >
                        <div className="flex items-center space-x-2">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                          </svg>
                          <div className="text-left">
                            <div className="text-xs">Download on the</div>
                            <div className="text-sm font-semibold">
                              App Store
                            </div>
                          </div>
                        </div>
                      </a>

                      {/* Google Play */}
                      <a
                        href="#"
                        className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 min-h-[60px] min-w-[180px]"
                      >
                        <div className="flex items-center space-x-2">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                          </svg>
                          <div className="text-left">
                            <div className="text-xs">GET IT ON</div>
                            <div className="text-sm font-semibold">
                              Google Play
                            </div>
                          </div>
                        </div>
                      </a>

                      {/* Huawei AppGallery */}
                      <a
                        href="#"
                        className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 min-h-[60px] min-w-[180px]"
                      >
                        <div className="flex items-center space-x-2">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
                          </svg>
                          <div className="text-left">
                            <div className="text-xs">EXPLORE IT ON</div>
                            <div className="text-sm font-semibold">
                              AppGallery
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Right Section - Phone Mockups */}
                  <div className="lg:w-1/2 flex justify-center lg:justify-end pr-0">
                    <div className="relative">
                      <img
                        src="https://cdn.getir.com/getirweb-images/common/landing/phoneLandingEn.png"
                        alt="Getir App Screenshots"
                        className="w-full max-w-md lg:max-w-lg h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetirWaterPage;
