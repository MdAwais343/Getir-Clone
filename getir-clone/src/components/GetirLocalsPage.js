import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

const GetirLocalsPage = () => {
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+90");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const navigate = useNavigate();
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

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    if (address.trim()) {
      // Handle address search logic here
      console.log("Searching for local services at:", address);
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
              className={`bg-[rgb(93,62,188)] px-3 py-1 rounded-t-md flex-shrink-0 ${
                location.pathname === "/locals" ? "bg-[rgb(93,62,188)]" : ""
              }`}
            >
              <span className="text-yellow-300 text-sm font-semibold">
                getirlocals
              </span>
            </Link>
          </div>
        </div>

        {/* Small Hero Section for Mobile */}
        <div className="bg-[rgb(93,62,188)] py-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold">
              <span className="text-yellow-300">getir</span>
              <span className="text-white">locals</span>
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

        {/* Login Form Section */}
        <div className="bg-gray-100 px-4 py-6">
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

        {/* Shop Categories Section for Mobile */}
        <div className="bg-white px-4 py-6">
          <h2 className="text-[rgb(76,51,152)] text-lg font-semibold mb-4">
            Shop Categories
          </h2>

          <div className="grid grid-cols-4 gap-3">
            {/* Earthquake Relief */}
            <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center mb-2">
                <img
                  src="https://cdn.getircarsi.com/19668259d480075884f4ec59e44e73a5.png"
                  alt="Earthquake Relief"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-600 text-center leading-tight">
                Earthquake Relief
              </span>
            </div>

            {/* Water */}
            <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center mb-2">
                <img
                  src="https://cdn.getircarsi.com/5afe83799bc86556599ee9ec74663c8c.jpg"
                  alt="Water"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-600 text-center leading-tight">
                Water
              </span>
            </div>

            {/* Coffee-Shop */}
            <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center mb-2">
                <img
                  src="https://cdn.getircarsi.com/a971cf8d2661b1f6370a376d4be9ef96.png"
                  alt="Coffee-Shop"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-600 text-center leading-tight">
                Coffee-Shop
              </span>
            </div>

            {/* Gift */}
            <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center mb-2">
                <img
                  src="https://cdn.getircarsi.com/51e10392d7cc15975b6281771caa11a2.png"
                  alt="Gift"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-600 text-center leading-tight">
                Gift
              </span>
            </div>

            {/* Coiffeur */}
            <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center mb-2">
                <img
                  src="https://cdn.getircarsi.com/19bf26a4b6f2bc1fca4e15754afd97a9.jpg"
                  alt="Coiffeur"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-600 text-center leading-tight">
                Coiffeur
              </span>
            </div>

            {/* Mom & Kids */}
            <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center mb-2">
                <img
                  src="https://cdn.getircarsi.com/554fcbd74ec94eef7b6d535dc9c85106.png"
                  alt="Mom & Kids"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-600 text-center leading-tight">
                Mom & Kids
              </span>
            </div>

            {/* Pepsi */}
            <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center mb-2">
                <img
                  src="https://cdn.getircarsi.com/0d12f0c413f99b21a38c4054d21899a3.png"
                  alt="Pepsi"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-600 text-center leading-tight">
                Pepsi
              </span>
            </div>

            {/* Bakery & Patisserie */}
            <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center mb-2">
                <img
                  src="https://cdn.getircarsi.com/a24d8c0ac058c14d467a560b148a99b9.png"
                  alt="Bakery & Patisserie"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-600 text-center leading-tight">
                Bakery & Patisserie
              </span>
            </div>

            {/* Grocery */}
            <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center mb-2">
                <img
                  src="https://cdn.getircarsi.com/72ac6c0686ff6f568888c7c5718ee660.png"
                  alt="Grocery"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-600 text-center leading-tight">
                Grocery
              </span>
            </div>

            {/* Greengrocer */}
            <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center mb-2">
                <img
                  src="https://cdn.getircarsi.com/29735ed48d43ae4443ff8d629703b79b.jpeg"
                  alt="Greengrocer"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-600 text-center leading-tight">
                Greengrocer
              </span>
            </div>

            {/* Butcher */}
            <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center mb-2">
                <img
                  src="https://cdn.getircarsi.com/198d969f26b3d12c481bf06ca4a07fba.png"
                  alt="Butcher"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-600 text-center leading-tight">
                Butcher
              </span>
            </div>

            {/* Pet Shop */}
            <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center mb-2">
                <img
                  src="https://cdn.getircarsi.com/bc940fef889d68f52693c163811bbce0.png"
                  alt="Pet Shop"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-600 text-center leading-tight">
                Pet Shop
              </span>
            </div>

            {/* Delicatessen */}
            <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center mb-2">
                <img
                  src="https://cdn.getircarsi.com/d2a3196a65e05409d74d319e8fc29b05.png"
                  alt="Delicatessen"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-600 text-center leading-tight">
                Delicatessen
              </span>
            </div>

            {/* Nuts/Dried Fruits */}
            <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center mb-2">
                <img
                  src="https://cdn.getircarsi.com/9770ccff4d133b317ef2eead0c8ee772.png"
                  alt="Nuts/Dried Fruits"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-600 text-center leading-tight">
                Nuts/Dried Fruits
              </span>
            </div>

            {/* Herbalist */}
            <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center mb-2">
                <img
                  src="https://cdn.getircarsi.com/2aa40564ba424f559cd085fc6fdc89a9.png"
                  alt="Herbalist"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-600 text-center leading-tight">
                Herbalist
              </span>
            </div>

            {/* Florist */}
            <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center mb-2">
                <img
                  src="https://cdn.getircarsi.com/8db6bc8a272de0d8979392259106689a.jpg"
                  alt="Florist"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-600 text-center leading-tight">
                Florist
              </span>
            </div>

            {/* Pastry Store */}
            <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center mb-2">
                <img
                  src="https://cdn.getircarsi.com/ef829d37d1c23493f05be4fe8b76196c.jpeg"
                  alt="Pastry Store"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-600 text-center leading-tight">
                Pastry Store
              </span>
            </div>

            {/* Fishmonger */}
            <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center mb-2">
                <img
                  src="https://cdn.getircarsi.com/c5210628ce96a822b8fa41d6e735e11d.png"
                  alt="Fishmonger"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-600 text-center leading-tight">
                Fishmonger
              </span>
            </div>

            {/* Pickle Store */}
            <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center mb-2">
                <img
                  src="https://cdn.getircarsi.com/c08a1ef2521512c87e3479f7f38fe617.jpeg"
                  alt="Pickle Store"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-600 text-center leading-tight">
                Pickle Store
              </span>
            </div>

            {/* Coffee & Chocolate */}
            <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center mb-2">
                <img
                  src="https://cdn.getircarsi.com/2e30cc4ab865e039b16651182062055a.png"
                  alt="Coffee & Chocolate"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-600 text-center leading-tight">
                Coffee & Chocolate
              </span>
            </div>

            {/* Stationery */}
            <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center mb-2">
                <img
                  src="https://cdn.getircarsi.com/5738bc99c87b6399d60192b19f5ac3b0.jpeg"
                  alt="Stationery"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-600 text-center leading-tight">
                Stationery
              </span>
            </div>

            {/* Cosmetic */}
            <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center mb-2">
                <img
                  src="https://cdn.getircarsi.com/8c4a5fcede57d01737806845701a475f.jpg"
                  alt="Cosmetic"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-600 text-center leading-tight">
                Cosmetic
              </span>
            </div>

            {/* Electronics */}
            <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center mb-2">
                <img
                  src="https://cdn.getircarsi.com/013ee7899528e2ef10273b76bd7fbbc2.png"
                  alt="Electronics"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-600 text-center leading-tight">
                Electronics
              </span>
            </div>

            {/* Clothing */}
            <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center mb-2">
                <img
                  src="https://cdn.getircarsi.com/2bb253b5aced44ca756fdc49a0ec6b46.png"
                  alt="Clothing"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-600 text-center leading-tight">
                Clothing
              </span>
            </div>

            {/* Baby */}
            <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center mb-2">
                <img
                  src="https://cdn.getircarsi.com/9782679ae8fa4c087191080edf5feef8.jpg"
                  alt="Baby"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-600 text-center leading-tight">
                Baby
              </span>
            </div>

            {/* Home, Living & Decoration */}
            <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center mb-2">
                <img
                  src="https://cdn.getircarsi.com/450c79c00833eac4e7b72bf5a862686f.jpg"
                  alt="Home, Living & Decoration"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-600 text-center leading-tight">
                Home, Living & Decoration
              </span>
            </div>

            {/* Hobby */}
            <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center mb-2">
                <img
                  src="https://cdn.getircarsi.com/416adf9f1327f31c79307d65805e369f.jpg"
                  alt="Hobby"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-600 text-center leading-tight">
                Hobby
              </span>
            </div>

            {/* Mall */}
            <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center mb-2">
                <img
                  src="https://cdn.getircarsi.com/fc9233aecc20010a7dac096fa1234c5e.png"
                  alt="Mall"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-600 text-center leading-tight">
                Mall
              </span>
            </div>
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

        {/* Featured Cards Section for Mobile */}
        <div className="bg-gray-50 px-4 py-6">
          <div className="grid grid-cols-1 gap-4">
            {/* Feature Block 1 */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <img
                    src="/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg"
                    alt="Local services selection"
                    className="w-20 h-20 object-cover rounded-full"
                  />
                </div>
              </div>
              <h3 className="text-base font-semibold text-center text-[rgb(76,51,152)] mb-2">
                Select your local services by pictures from thousands of
                providers!
              </h3>
            </div>

            {/* Feature Block 2 */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <img
                    src="/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg"
                    alt="Promotions"
                    className="w-20 h-20 object-cover rounded-full"
                  />
                </div>
              </div>
              <h3 className="text-base font-semibold text-center text-[rgb(76,51,152)] mb-2">
                Benefit from one of hundreds of promotions each week!
              </h3>
            </div>

            {/* Feature Block 3 */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <img
                    src="/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg"
                    alt="Payment methods"
                    className="w-20 h-20 object-cover rounded-full"
                  />
                </div>
              </div>
              <h3 className="text-base font-semibold text-center text-[rgb(76,51,152)] mb-2">
                Pay by credit card, at the door, and with various payment
                methods!
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop View - Keep Original */}
      <div className="hidden md:block">
        {/* Hero Section with Login Form */}
        <div className="relative overflow-hidden h-[80vh]">
          <div className="absolute inset-0 z-0">
            {/* Background image from Getir CDN */}
            <img
              src="https://cdn.getir.com/getirweb_images/common/hero_posters/locals_2.jpeg"
              alt="Getir Locals"
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                filter: "brightness(0.7)",
              }}
            />
            {/* Overlay for better text readability - gradient from left to right */}
            <div className="absolute inset-0 "></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-end px-2 sm:px-4 lg:px-8">
            {/* Right Side - Login Form */}
            <div className="w-full max-w-sm mr-8">
              {/* White Card */}
              <div className="bg-white rounded-lg p-4 shadow-2xl">
                {/* Title */}
                <h1 className="text-base font-semibold text-getir-purple mb-4 text-center">
                  See available local services for your address
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

        {/* Local Services Categories Section */}
        <div className="bg-white py-8">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-md font-bold text-gray-700 text-left mb-2">
              Shop Categories
            </h2>

            <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-3">
              {/* Row 1: 10 items */}
              <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer group">
                <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-left group-hover:scale-105 transition-transform duration-200">
                  <img
                    src="https://cdn.getircarsi.com/19668259d480075884f4ec59e44e73a5.png"
                    alt="Earthquake Relief"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-md mt-2 font-medium text-gray-600 text-center leading-tight group-hover:text-[rgb(93,62,188)] transition-colors duration-200">
                  Earthquake Relief
                </span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer group">
                <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-left group-hover:scale-105 transition-transform duration-200">
                  <img
                    src="https://cdn.getircarsi.com/5afe83799bc86556599ee9ec74663c8c.jpg"
                    alt="Water"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-md mt-2 font-medium text-gray-600 text-center leading-tight group-hover:text-[rgb(93,62,188)] transition-colors duration-200">
                  Water
                </span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer group">
                <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-left group-hover:scale-105 transition-transform duration-200">
                  <img
                    src="https://cdn.getircarsi.com/a971cf8d2661b1f6370a376d4be9ef96.png"
                    alt="Coffee-Shop"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-md mt-2 font-medium text-gray-600 text-center leading-tight group-hover:text-[rgb(93,62,188)] transition-colors duration-200">
                  Coffee-Shop
                </span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer group">
                <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-left group-hover:scale-105 transition-transform duration-200">
                  <img
                    src="https://cdn.getircarsi.com/51e10392d7cc15975b6281771caa11a2.png"
                    alt="Gift"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-md mt-2 font-medium text-gray-600 text-center leading-tight group-hover:text-[rgb(93,62,188)] transition-colors duration-200">
                  Gift
                </span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer group">
                <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-left group-hover:scale-105 transition-transform duration-200">
                  <img
                    src="https://cdn.getircarsi.com/19bf26a4b6f2bc1fca4e15754afd97a9.jpg"
                    alt="Coiffeur"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-md mt-2 font-medium text-gray-600 text-center leading-tight group-hover:text-[rgb(93,62,188)] transition-colors duration-200">
                  Coiffeur
                </span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer group">
                <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-left group-hover:scale-105 transition-transform duration-200">
                  <img
                    src="https://cdn.getircarsi.com/554fcbd74ec94eef7b6d535dc9c85106.png"
                    alt="Mom & Kids"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-md mt-2 font-medium text-gray-600 text-center leading-tight group-hover:text-[rgb(93,62,188)] transition-colors duration-200">
                  Mom & Kids
                </span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer group">
                <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-left group-hover:scale-105 transition-transform duration-200">
                  <img
                    src="https://cdn.getircarsi.com/0d12f0c413f99b21a38c4054d21899a3.png"
                    alt="Pepsi"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-md mt-2 font-medium text-gray-600 text-center leading-tight group-hover:text-[rgb(93,62,188)] transition-colors duration-200">
                  Pepsi
                </span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer group">
                <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-left group-hover:scale-105 transition-transform duration-200">
                  <img
                    src="https://cdn.getircarsi.com/a24d8c0ac058c14d467a560b148a99b9.png"
                    alt="Bakery & Patisserie"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-md mt-2 font-medium text-gray-600 text-center leading-tight group-hover:text-[rgb(93,62,188)] transition-colors duration-200">
                  Bakery & Patisserie
                </span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer group">
                <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-left group-hover:scale-105 transition-transform duration-200">
                  <img
                    src="https://cdn.getircarsi.com/72ac6c0686ff6f568888c7c5718ee660.png"
                    alt="Grocery"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-md mt-2 font-medium text-gray-600 text-center leading-tight group-hover:text-[rgb(93,62,188)] transition-colors duration-200">
                  Grocery
                </span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer group">
                <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-left group-hover:scale-105 transition-transform duration-200">
                  <img
                    src="https://cdn.getircarsi.com/29735ed48d43ae4443ff8d629703b79b.jpeg"
                    alt="Greengrocer"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-md mt-2 font-medium text-gray-600 text-center leading-tight group-hover:text-[rgb(93,62,188)] transition-colors duration-200">
                  Greengrocer
                </span>
              </div>

              {/* Row 2: 10 items */}
              <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer group">
                <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-left group-hover:scale-105 transition-transform duration-200">
                  <img
                    src="https://cdn.getircarsi.com/198d969f26b3d12c481bf06ca4a07fba.png"
                    alt="Butcher"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-md mt-2 font-medium text-gray-600 text-center leading-tight group-hover:text-[rgb(93,62,188)] transition-colors duration-200">
                  Butcher
                </span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer group">
                <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-left group-hover:scale-105 transition-transform duration-200">
                  <img
                    src="https://cdn.getircarsi.com/eff95eb62d676caef4e930c5fd15f919.jpg"
                    alt="District Bazaar"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-md mt-2 font-medium text-gray-600 text-center leading-tight group-hover:text-[rgb(93,62,188)] transition-colors duration-200">
                  District Bazaar
                </span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer group">
                <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-left group-hover:scale-105 transition-transform duration-200">
                  <img
                    src="https://cdn.getircarsi.com/bc940fef889d68f52693c163811bbce0.png"
                    alt="Pet Shop"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-md mt-2 font-medium text-gray-600 text-center leading-tight group-hover:text-[rgb(93,62,188)] transition-colors duration-200">
                  Pet Shop
                </span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer group">
                <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-left group-hover:scale-105 transition-transform duration-200">
                  <img
                    src="https://cdn.getircarsi.com/d2a3196a65e05409d74d319e8fc29b05.png"
                    alt="Delicatessen"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-md mt-2 font-medium text-gray-600 text-center leading-tight group-hover:text-[rgb(93,62,188)] transition-colors duration-200">
                  Delicatessen
                </span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer group">
                <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-left group-hover:scale-105 transition-transform duration-200">
                  <img
                    src="https://cdn.getircarsi.com/9770ccff4d133b317ef2eead0c8ee772.png"
                    alt="Nuts/Dried Fruits"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-md mt-2 font-medium text-gray-600 text-center leading-tight group-hover:text-[rgb(93,62,188)] transition-colors duration-200">
                  Nuts/Dried Fruits
                </span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer group">
                <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-left group-hover:scale-105 transition-transform duration-200">
                  <img
                    src="https://cdn.getircarsi.com/2aa40564ba424f559cd085fc6fdc89a9.png"
                    alt="Herbalist"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-md mt-2 font-medium text-gray-600 text-center leading-tight group-hover:text-[rgb(93,62,188)] transition-colors duration-200">
                  Herbalist
                </span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer group">
                <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-left group-hover:scale-105 transition-transform duration-200">
                  <img
                    src="https://cdn.getircarsi.com/8db6bc8a272de0d8979392259106689a.jpg"
                    alt="Florist"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-md mt-2 font-medium text-gray-600 text-center leading-tight group-hover:text-[rgb(93,62,188)] transition-colors duration-200">
                  Florist
                </span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer group">
                <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-left group-hover:scale-105 transition-transform duration-200">
                  <img
                    src="https://cdn.getircarsi.com/ef829d37d1c23493f05be4fe8b76196c.jpeg"
                    alt="Pastry Store"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-md mt-2 font-medium text-gray-600 text-center leading-tight group-hover:text-[rgb(93,62,188)] transition-colors duration-200">
                  Pastry Store
                </span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer group">
                <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-left group-hover:scale-105 transition-transform duration-200">
                  <img
                    src="https://cdn.getircarsi.com/c5210628ce96a822b8fa41d6e735e11d.png"
                    alt="Fishmonger"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-md mt-2 font-medium text-gray-600 text-center leading-tight group-hover:text-[rgb(93,62,188)] transition-colors duration-200">
                  Fishmonger
                </span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer group">
                <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-left group-hover:scale-105 transition-transform duration-200">
                  <img
                    src="https://cdn.getircarsi.com/c08a1ef2521512c87e3479f7f38fe617.jpeg"
                    alt="Pickle Store"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-md mt-2 font-medium text-gray-600 text-center leading-tight group-hover:text-[rgb(93,62,188)] transition-colors duration-200">
                  Pickle Store
                </span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer group">
                <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-left group-hover:scale-105 transition-transform duration-200">
                  <img
                    src="https://cdn.getircarsi.com/2e30cc4ab865e039b16651182062055a.png"
                    alt="Coffee & Chocolate"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-md mt-2 font-medium text-gray-600 text-center leading-tight group-hover:text-[rgb(93,62,188)] transition-colors duration-200">
                  Coffee & Chocolate
                </span>
              </div>

              {/* Row 3: 9 items */}
              <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer group">
                <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-left group-hover:scale-105 transition-transform duration-200">
                  <img
                    src="https://cdn.getircarsi.com/5738bc99c87b6399d60192b19f5ac3b0.jpeg"
                    alt="Stationery"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-md mt-2 font-medium text-gray-600 text-center leading-tight group-hover:text-[rgb(93,62,188)] transition-colors duration-200">
                  Stationery
                </span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer group">
                <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-left group-hover:scale-105 transition-transform duration-200">
                  <img
                    src="https://cdn.getircarsi.com/8c4a5fcede57d01737806845701a475f.jpg"
                    alt="Cosmetic"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-md mt-2 font-medium text-gray-600 text-center leading-tight group-hover:text-[rgb(93,62,188)] transition-colors duration-200">
                  Cosmetic
                </span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer group">
                <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-left group-hover:scale-105 transition-transform duration-200">
                  <img
                    src="https://cdn.getircarsi.com/013ee7899528e2ef10273b76bd7fbbc2.png"
                    alt="Electronics"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-md mt-2 font-medium text-gray-600 text-center leading-tight group-hover:text-[rgb(93,62,188)] transition-colors duration-200">
                  Electronics
                </span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer group">
                <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-left group-hover:scale-105 transition-transform duration-200">
                  <img
                    src="https://cdn.getircarsi.com/2bb253b5aced44ca756fdc49a0ec6b46.png"
                    alt="Clothing"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-md mt-2 font-medium text-gray-600 text-center leading-tight group-hover:text-[rgb(93,62,188)] transition-colors duration-200">
                  Clothing
                </span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer group">
                <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-left group-hover:scale-105 transition-transform duration-200">
                  <img
                    src="https://cdn.getircarsi.com/9782679ae8fa4c087191080edf5feef8.jpg"
                    alt="Baby"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-md mt-2 font-medium text-gray-600 text-center leading-tight group-hover:text-[rgb(93,62,188)] transition-colors duration-200">
                  Baby
                </span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer group">
                <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-left group-hover:scale-105 transition-transform duration-200">
                  <img
                    src="https://cdn.getircarsi.com/450c79c00833eac4e7b72bf5a862686f.jpg"
                    alt="Home, Living & Decoration"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-md mt-2 font-medium text-gray-600 text-center leading-tight group-hover:text-[rgb(93,62,188)] transition-colors duration-200">
                  Home, Living & Decoration
                </span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer group">
                <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-left group-hover:scale-105 transition-transform duration-200">
                  <img
                    src="https://cdn.getircarsi.com/416adf9f1327f31c79307d65805e369f.jpg"
                    alt="Hobby"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-md mt-2 font-medium text-gray-600 text-center leading-tight group-hover:text-[rgb(93,62,188)] transition-colors duration-200">
                  Hobby
                </span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-sm hover:bg-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer group">
                <div className="w-12 h-12 border border-gray-300 rounded-lg flex items-left group-hover:scale-105 transition-transform duration-200">
                  <img
                    src="https://cdn.getircarsi.com/fc9233aecc20010a7dac096fa1234c5e.png"
                    alt="Mall"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-md mt-2 font-medium text-gray-600 text-center leading-tight group-hover:text-[rgb(93,62,188)] transition-colors duration-200">
                  Mall
                </span>
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
                      Let us deliver your local favorites to your door in
                      minutes.
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

          {/* Feature Blocks Section */}
          <div className="bg-gray-50 py-12 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Feature Block 1 */}
                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow h-80">
                  <div className="text-center mb-6">
                    <div className="w-40 h-40 mx-auto mb-6 relative">
                      <img
                        src="/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg"
                        alt="Local services selection"
                        className="w-40 h-40 object-cover rounded-full"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-center text-getir-purple mb-2">
                    Select your local services by pictures from thousands of
                    providers!
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
                    Pay by credit card, at the door, and with various payment
                    methods!
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetirLocalsPage;
