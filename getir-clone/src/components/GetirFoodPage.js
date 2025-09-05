import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

const GetirFoodPage = () => {
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+90");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const videos = [
    {
      src: "https://cdn.getiryemek.com/banner/1_hamburger.mp4",
      name: "Hamburger",
    },
    {
      src: "https://cdn.getiryemek.com/banner/2_doner.mp4",
      name: "Doner",
    },
    {
      src: "https://cdn.getiryemek.com/banner/3_pide.mp4",
      name: "Pide",
    },
    {
      src: "https://cdn.getiryemek.com/banner/4_pizza.mp4",
      name: "Pizza",
    },
    {
      src: "https://cdn.getiryemek.com/banner/5_kunefe.mp4",
      name: "Kunefe",
    },
  ];

  const videoRef = useRef(null);

  const countries = [
    { code: "+90", name: "Turkey", flag: "https://flagcdn.com/tr.svg" },
    { code: "+1", name: "United States", flag: "https://flagcdn.com/us.svg" },
    { code: "+44", name: "United Kingdom", flag: "https://flagcdn.com/gb.svg" },
    { code: "+49", name: "Germany", flag: "https://flagcdn.com/de.svg" },
    { code: "+33", name: "France", flag: "https://flagcdn.com/fr.svg" },
  ];

  const cuisines = [
    {
      name: "Borek",
      image: "https://cdn.getiryemek.com/cuisines/1745440301743_1024x1024.webp",
    },
    {
      name: "Fish",
      image: "https://cdn.getiryemek.com/cuisines/1745440331052_1024x1024.webp",
    },
    {
      name: "Burger",
      image: "https://cdn.getiryemek.com/cuisines/1745440310896_1024x1024.webp",
    },
    {
      name: "Doner",
      image: "https://cdn.getiryemek.com/cuisines/1745440349652_1024x1024.webp",
    },
    {
      name: "World Cuisine",
      image: "	https://cdn.getiryemek.com/cuisines/1745440359572_1024x1024.webp",
    },
    {
      name: "Homemade Meals",
      image: "https://cdn.getiryemek.com/cuisines/1745440385685_1024x1024.webp",
    },
    {
      name: "Breakfast",
      image: "https://cdn.getiryemek.com/cuisines/1745440404504_1024x1024.webp",
    },
    {
      name: "Kebab",
      image: "https://cdn.getiryemek.com/cuisines/1745440447285_1024x1024.webp",
    },
    {
      name: "Meatballs",
      image: "https://cdn.getiryemek.com/cuisines/1745440460349_1024x1024.webp",
    },
    {
      name: "Desserts",
      image: "https://cdn.getiryemek.com/cuisines/1745440498324_1024x1024.webp",
    },
    {
      name: "Pizza",
      image: "https://cdn.getiryemek.com/cuisines/1745440533031_1024x1024.webp",
    },
    {
      name: "Street Food",
      image: "https://cdn.getiryemek.com/cuisines/1745440556257_1024x1024.webp",
    },
  ];

  const dropdownRef = useRef(null);

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 3 * 164; // 3 items * (140px width + 24px spacing)
      const currentScroll = carouselRef.current.scrollLeft;
      const containerWidth = carouselRef.current.clientWidth;
      const scrollWidth = carouselRef.current.scrollWidth;
      const itemWidth = 164; // 140px width + 24px spacing
      const maxScroll = scrollWidth - containerWidth;

      if (direction === "left") {
        // Scroll left - show previous 3 items
        const newScrollPosition = currentScroll - scrollAmount;

        if (newScrollPosition < 0) {
          // Jump to end for infinite scroll
          carouselRef.current.scrollTo({
            left: maxScroll,
            behavior: "smooth",
          });
        } else {
          carouselRef.current.scrollTo({
            left: newScrollPosition,
            behavior: "smooth",
          });
        }
      } else {
        // Scroll right - show next 3 items
        const newScrollPosition = currentScroll + scrollAmount;

        if (newScrollPosition > maxScroll) {
          // Jump to beginning for infinite scroll
          carouselRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          carouselRef.current.scrollTo({
            left: newScrollPosition,
            behavior: "smooth",
          });
        }
      }
    }
  };

  const carouselRef = useRef(null);

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

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        setScrollPosition(carouselRef.current.scrollLeft);
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Handle video transitions
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleVideoEnd = () => {
        // Add a small delay before switching to next video
        setTimeout(() => {
          setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        }, 100);
      };

      video.addEventListener("ended", handleVideoEnd);
      return () => video.removeEventListener("ended", handleVideoEnd);
    }
  }, [videos.length]);

  // Update video source when currentVideoIndex changes
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleCanPlay = () => {
        video.play().catch((error) => {
          console.log("Video play failed:", error);
        });
      };

      video.src = videos[currentVideoIndex].src;
      video.load();
      video.addEventListener("canplay", handleCanPlay);

      return () => {
        video.removeEventListener("canplay", handleCanPlay);
      };
    }
  }, [currentVideoIndex]);

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    if (address.trim()) {
      // Handle address search logic here
      console.log("Searching for restaurants at:", address);
    }
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.trim()) {
      // Handle phone number submission logic here
      console.log("Phone number submitted:", countryCode + phoneNumber);
    }
  };

  const handleFindLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Location found:", position.coords);
          // Handle location found logic here
        },
        (error) => {
          console.error("Error getting location:", error);
          alert(
            "Unable to get your location. Please enter your address manually."
          );
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

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
              className={`bg-[rgb(93,62,188)] px-3 py-1 rounded-t-md flex-shrink-0 ${
                location.pathname === "/food" ? "bg-[rgb(93,62,188)]" : ""
              }`}
            >
              <span className="text-yellow-300 text-sm font-semibold">
                getirfood
              </span>
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
            <h1 className="text-2xl font-bold">
              <span className="text-yellow-300">getir</span>
              <span className="text-white">food</span>
            </h1>
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

        {/* Search Bar Section */}
        <div className="bg-white px-4 py-4">
          <h2 className="text-[rgb(76,51,152)] text-lg font-semibold mb-4 text-center">
            See available restaurants for your address
          </h2>

          <form onSubmit={handleAddressSubmit} className="mb-4">
            <div className="relative">
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <div className="flex-shrink-0 pl-3">
                  <svg
                    className="w-5 h-5 text-[rgb(76,51,152)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Search street or post code"
                  className="flex-1 px-3 py-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[rgb(76,51,152)] focus:border-transparent text-sm"
                  required
                />
                <button
                  type="button"
                  onClick={handleFindLocation}
                  className="flex-shrink-0 p-3 text-gray-500 hover:text-[rgb(76,51,152)] transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Login Form Section */}
        <div className="bg-white px-4 py-6">
          <h2 className="text-[rgb(76,51,152)] text-lg font-semibold mb-4 text-center">
            Login or register
          </h2>

          <form onSubmit={handlePhoneSubmit} className="space-y-4">
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

        {/* Cuisines Section for Mobile */}
        <div className="bg-white px-4 py-6">
          <h2 className="text-[rgb(76,51,152)] text-lg font-semibold mb-4">
            Cuisines
          </h2>

          <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
            {cuisines.map((cuisine, index) => (
              <div key={index} className="text-center flex-shrink-0 w-20">
                <div className="w-16 h-16 rounded-lg mb-2 shadow-md hover:shadow-lg transition-shadow flex items-center justify-center bg-gray-50 mx-auto">
                  <img
                    src={cuisine.image}
                    alt={cuisine.name}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                </div>
                <span className="text-xs font-medium text-gray-700 leading-tight">
                  {cuisine.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Download Section for Mobile */}
        <div className="bg-[rgb(93,62,188)] px-4 py-6">
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
                      <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z" />
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
        <div className="relative overflow-hidden h-screen">
          <div className="absolute inset-0 z-0">
            {/* Sequential Video Player */}
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className="w-full h-screen object-cover"
              style={{ filter: "brightness(0.7)" }}
            >
              <source src={videos[currentVideoIndex].src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-screen flex items-center justify-end px-2 sm:px-4 lg:px-8">
            <div className="w-full max-w-sm">
              {/* White Card */}
              <div className="bg-white rounded-xl p-4 shadow-2xl">
                {/* Title */}
                <h1 className="text-base font-semibold text-getir-purple mb-4 text-center">
                  See available restaurants for your address
                </h1>

                {/* Address Search Form */}
                <form onSubmit={handleAddressSubmit} className="mb-2">
                  <div className="relative mb-3">
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                      <div className="flex-shrink-0 pl-1">
                        <svg
                          className="w-5 h-5 text-getir-purple"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Search street or place"
                        className="flex-1 px-3 py-3 text-gray-700 placeholder-gray-400 focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={handleFindLocation}
                        className="bg-[#e3def3] mr-2 rounded-md text-getir-purple px-3 py-2 min-w-[120px] flex items-center justify-center space-x-1 hover:bg-opacity-90 transition-colors whitespace-nowrap"
                      >
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="text-xs font-medium">
                          Find my location
                        </span>
                      </button>
                    </div>
                  </div>
                </form>

                {/* Separator */}
                <div className="relative mb-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">or</span>
                  </div>
                </div>

                {/* Login/Register Section */}
                <div className="mb-4">
                  <h2 className="text-center text-base font-semibold text-getir-purple mb-3">
                    Login or register.
                  </h2>

                  <form onSubmit={handlePhoneSubmit}>
                    <div className="flex space-x-2 mb-3">
                      {/* Country Code Dropdown */}
                      <div className="flex-shrink-0">
                        <div className="relative" ref={dropdownRef}>
                          <button
                            type="button"
                            onClick={() =>
                              setShowCountryDropdown(!showCountryDropdown)
                            }
                            className="flex items-center justify-between w-full bg-white border border-gray-300 rounded-lg px-3 py-3 text-getir-purple focus:outline-none focus:ring-2 focus:ring-[#5d3ebc] focus:border-transparent"
                          >
                            <span className="flex items-center space-x-2">
                              <img
                                src={
                                  countries.find((c) => c.code === countryCode)
                                    ?.flag
                                }
                                alt={
                                  countries.find((c) => c.code === countryCode)
                                    ?.name
                                }
                                className="w-5 h-4 object-cover rounded-sm"
                              />
                              <span>{countryCode}</span>
                            </span>
                            <svg
                              className={`w-4 h-4 text-getir-purple transition-transform duration-200 ${
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
                            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
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
                                    className="w-5 h-4 object-cover rounded-sm"
                                  />
                                  <span className="text-gray-700">
                                    {country.code}
                                  </span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Phone Number Input */}
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Mobile Phone"
                        className="flex-1 px-3 py-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5d3ebc] focus:border-transparent"
                      />
                    </div>

                    {/* Continue Button */}
                    <button
                      type="submit"
                      className="w-full bg-[#ffd300] text-getir-purple py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                    >
                      Continue with phone number
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cuisines Section */}
        <div className="bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-lg font-bold text-getir-purple mb-6 text-start">
              Cuisines
            </h2>

            <div className="relative">
              {/* Left Arrow */}
              <button
                onClick={() => handleScroll("left")}
                className="absolute -left-12 top-1/2 transform -translate-y-1/2 z-10"
              >
                <svg
                  className="w-6 h-6 text-getir-purple"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Right Arrow */}
              <button
                onClick={() => handleScroll("right")}
                className="absolute -right-12 top-1/2 transform -translate-y-1/2 z-10"
              >
                <svg
                  className="w-6 h-6 text-getir-purple"
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
              </button>

              {/* Cuisines Carousel Container */}
              <div className="overflow-hidden">
                {/* Cuisines Carousel */}
                <div
                  ref={carouselRef}
                  className="flex space-x-6 overflow-hidden"
                  style={{
                    width: "calc(8 * 140px + 7 * 24px + 120px)", // 8 items * 140px width + 7 spaces * 24px + extra padding
                    maxWidth: "100%",
                  }}
                >
                  {/* Duplicate items for infinite scroll */}
                  {[...cuisines, ...cuisines, ...cuisines].map(
                    (cuisine, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0 w-[140px] text-center"
                      >
                        <div className="w-[140px] h-[100px] rounded-lg mb-3 shadow-md hover:shadow-lg transition-shadow flex items-center justify-center bg-white">
                          <img
                            src={cuisine.image}
                            alt={cuisine.name}
                            className="w-[80px] h-[80px] object-cover rounded-md"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          {cuisine.name}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Blocks Section */}
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Block 1 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow h-80">
              <div className="text-center mb-6">
                <div className="w-40 h-40 mx-auto mb-6 relative">
                  <img
                    src="/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg"
                    alt="Food selection"
                    className="w-40 h-40 object-cover rounded-full"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-center text-getir-purple mb-2">
                Select your food by pictures from thousands of restaurants!
              </h3>
            </div>

            {/* Feature Block 2 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow h-80">
              <div className="text-center mb-6">
                <div className="w-40 h-40 mx-auto mb-6 relative">
                  <img
                    src="/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg"
                    alt="Promotions"
                    className="w-40 h-40 object-cover rounded-full"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-center text-getir-purple mb-2">
                Benefit from one of hundreds of promotions each week!
              </h3>
            </div>

            {/* Feature Block 3 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow h-80">
              <div className="text-center mb-6">
                <div className="w-40 h-40 mx-auto mb-6 relative">
                  <img
                    src="/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg"
                    alt="Payment methods"
                    className="w-40 h-40 object-cover rounded-full"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-center text-getir-purple mb-2">
                Pay by credit card, at the door, and with meal vouchers!
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant Partnership Section */}
      <div className="bg-gray-50 pt-2 pb-4 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Restaurant Partnership Section */}
          <div className="md:hidden bg-white rounded-xl p-4 shadow-lg relative overflow-hidden">
            {/* Food Icons Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%235d3ebc' fill-opacity='0.4'%3E%3C!-- Pizza Slice --%3E%3Cpath d='M20 20 L40 20 L30 40 Z'/%3E%3C!-- Burger --%3E%3Crect x='50' y='15' width='20' height='15' rx='2'/%3E%3Crect x='50' y='30' width='20' height='2'/%3E%3Crect x='50' y='32' width='20' height='2'/%3E%3C!-- Sushi --%3E%3Cellipse cx='85' cy='25' rx='8' ry='4'/%3E%3C!-- Donut --%3E%3Ccircle cx='25' cy='70' r='8'/%3E%3Ccircle cx='25' cy='70' r='4'/%3E%3C!-- Ice Cream Cone --%3E%3Cpath d='M55 65 L65 65 L60 75 Z'/%3E%3Ccircle cx='60' cy='60' r='5'/%3E%3C!-- Cupcake --%3E%3Crect x='80' y='60' width='12' height='8' rx='2'/%3E%3Ccircle cx='86' cy='55' r='3'/%3E%3C!-- Fries --%3E%3Crect x='15' y='85' width='3' height='12'/%3E%3Crect x='20' y='85' width='3' height='12'/%3E%3Crect x='25' y='85' width='3' height='12'/%3E%3Crect x='30' y='85' width='3' height='12'/%3E%3C!-- Noodles Bowl --%3E%3Ccircle cx='50' cy='90' r='10'/%3E%3Cpath d='M45 85 Q50 90 55 85'/%3E%3Cpath d='M45 87 Q50 92 55 87'/%3E%3Cpath d='M45 89 Q50 94 55 89'/%3E%3C!-- Wrap/Burrito --%3E%3Crect x='75' y='80' width='15' height='8' rx='4'/%3E%3C!-- Steak --%3E%3Cpath d='M100 85 L110 85 L105 95 Z'/%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: "120px 120px",
                  backgroundRepeat: "repeat",
                }}
              ></div>
            </div>

            <div className="relative z-10 text-left">
              <h2 className="text-base font-bold text-[rgb(76,51,152)] mb-3 text-left">
                Own a restaurant?
              </h2>
              <p className="text-gray-600 mb-4 text-sm text-left">
                Become a GetirFood business partner, grow your business at
                smaller costs, increase customer happiness.
              </p>
              <button className="bg-yellow-300 text-[rgb(76,51,152)] px-6 py-3 rounded-lg font-semibold text-sm hover:bg-yellow-400 transition-colors shadow-md">
                Apply Now
              </button>
            </div>
          </div>

          {/* Desktop Restaurant Partnership Section */}
          <div className="hidden md:block bg-white rounded-2xl p-12 shadow-lg relative overflow-hidden">
            {/* Food Icons Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%235d3ebc' fill-opacity='0.4'%3E%3C!-- Pizza Slice --%3E%3Cpath d='M20 20 L40 20 L30 40 Z'/%3E%3C!-- Burger --%3E%3Crect x='50' y='15' width='20' height='15' rx='2'/%3E%3Crect x='50' y='30' width='20' height='2'/%3E%3Crect x='50' y='32' width='20' height='2'/%3E%3C!-- Sushi --%3E%3Cellipse cx='85' cy='25' rx='8' ry='4'/%3E%3C!-- Donut --%3E%3Ccircle cx='25' cy='70' r='8'/%3E%3Ccircle cx='25' cy='70' r='4'/%3E%3C!-- Ice Cream Cone --%3E%3Cpath d='M55 65 L65 65 L60 75 Z'/%3E%3Ccircle cx='60' cy='60' r='5'/%3E%3C!-- Cupcake --%3E%3Crect x='80' y='60' width='12' height='8' rx='2'/%3E%3Ccircle cx='86' cy='55' r='3'/%3E%3C!-- Fries --%3E%3Crect x='15' y='85' width='3' height='12'/%3E%3Crect x='20' y='85' width='3' height='12'/%3E%3Crect x='25' y='85' width='3' height='12'/%3E%3Crect x='30' y='85' width='3' height='12'/%3E%3C!-- Noodles Bowl --%3E%3Ccircle cx='50' cy='90' r='10'/%3E%3Cpath d='M45 85 Q50 90 55 85'/%3E%3Cpath d='M45 87 Q50 92 55 87'/%3E%3Cpath d='M45 89 Q50 94 55 89'/%3E%3C!-- Wrap/Burrito --%3E%3Crect x='75' y='80' width='15' height='8' rx='4'/%3E%3C!-- Steak --%3E%3Cpath d='M100 85 L110 85 L105 95 Z'/%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: "120px 120px",
                  backgroundRepeat: "repeat",
                }}
              ></div>
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-2xl lg:text-3xl font-bold text-getir-purple mb-4 pl-12">
                  Own a restaurant?
                </h2>
                <p className="text-lg text-gray-600 max-w-auto pl-12">
                  Become a GetirFood business partner, grow your business at
                  smaller costs, increase customer happiness.
                </p>
              </div>

              {/* Right Content - CTA Button */}
              <div className="flex-shrink-0">
                <button className="bg-[#ffd300] text-getir-purple px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetirFoodPage;
