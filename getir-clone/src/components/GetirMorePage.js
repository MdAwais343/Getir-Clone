import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import CategoriesSection from "./CategoriesSection";
import DownloadSection from "./DownloadSection";

const GetirMorePage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+90");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoadErrors, setImageLoadErrors] = useState(new Set());
  const navigate = useNavigate();
  const location = useLocation();

  // Array of background images for the carousel
  const backgroundImages = [
    "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    "https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
  ];

  const countries = [
    { code: "+90", name: "Turkey", flag: "https://flagcdn.com/tr.svg" },
    { code: "+1", name: "United States", flag: "https://flagcdn.com/us.svg" },
    { code: "+44", name: "United Kingdom", flag: "https://flagcdn.com/gb.svg" },
    { code: "+49", name: "Germany", flag: "https://flagcdn.com/de.svg" },
    { code: "+33", name: "France", flag: "https://flagcdn.com/fr.svg" },
  ];

  const dropdownRef = useRef(null);

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.trim()) {
      // Handle phone number submission logic here
      console.log("Phone number submitted:", countryCode + phoneNumber);
    }
  };

  const handleImageError = (index) => {
    console.log(`Image ${index} failed to load:`, backgroundImages[index]);
    setImageLoadErrors((prev) => new Set(prev).add(index));
  };

  // Filter out images that failed to load
  const validImages = backgroundImages.filter(
    (_, index) => !imageLoadErrors.has(index)
  );

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    if (validImages.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % validImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [validImages.length]);

  // Debug logging
  useEffect(() => {
    console.log(
      "Valid images:",
      validImages.length,
      "Current index:",
      currentImageIndex
    );
  }, [validImages.length, currentImageIndex]);

  // Reset currentImageIndex if it's out of bounds
  useEffect(() => {
    if (currentImageIndex >= validImages.length && validImages.length > 0) {
      setCurrentImageIndex(0);
    }
  }, [validImages.length, currentImageIndex]);

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
              className={`bg-[rgb(93,62,188)] px-3 py-1 rounded-t-md flex-shrink-0 ${
                location.pathname === "/more" ? "bg-[rgb(93,62,188)]" : ""
              }`}
            >
              <span className="text-yellow-300 text-sm font-semibold">
                getirmore
              </span>
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
              <span className="text-white">more</span>
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

        {/* Categories Section for Mobile */}
        <div className="bg-white px-4 py-6">
          <h2 className="text-[rgb(76,51,152)] text-lg font-semibold mb-4">
            Categories
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {/* Milk & Dairy Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-center">
                <img
                  src="https://cdn-image.getir.com/market/category/f3771c5b-70b1-46d1-8646-9da5ee1cc69f.png?format=webp&height=500&width=500"
                  alt="Milk & Dairy"
                  className="w-16 h-16 object-cover rounded-l-lg"
                />
                <div className="px-3">
                  <h3 className="text-xs font-medium text-gray-900">
                    Milk & Dairy
                  </h3>
                </div>
              </div>
            </div>

            {/* Breakfast Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-center">
                <img
                  src="https://cdn-image.getir.com/market/category/9e8d8807-daf3-4a21-a6a8-123fa99b29bb.png?format=webp&height=500&width=500"
                  alt="Breakfast"
                  className="w-16 h-16 object-cover rounded-l-lg"
                />
                <div className="px-3">
                  <h3 className="text-xs font-medium text-gray-900">
                    Breakfast
                  </h3>
                </div>
              </div>
            </div>

            {/* Fruits & Veggies Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-center">
                <img
                  src="https://cdn-image.getir.com/market/category/9166a172-e49a-429a-8655-061094811ddb.png?format=webp&height=500&width=500"
                  alt="Fruits & Veggies"
                  className="w-16 h-16 object-cover rounded-l-lg"
                />
                <div className="px-3">
                  <h3 className="text-xs font-medium text-gray-900">
                    Fruits & Veggies
                  </h3>
                </div>
              </div>
            </div>

            {/* Meat, Poultry & Fish Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-center">
                <img
                  src="https://cdn-image.getir.com/market/category/5ec88274-7c14-4ebb-ad97-3c36b8cb015e.png?format=webp&height=500&width=500"
                  alt="Meat, Poultry & Fish"
                  className="w-16 h-16 object-cover rounded-l-lg"
                />
                <div className="px-3">
                  <h3 className="text-xs font-medium text-gray-900">
                    Meat, Poultry & Fish
                  </h3>
                </div>
              </div>
            </div>

            {/* Beverages Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-center">
                <img
                  src="https://cdn-image.getir.com/market/category/da5a5b90-5b5c-4c73-9ef4-056f18589e1e.png?format=webp&height=500&width=500"
                  alt="Beverages"
                  className="w-16 h-16 object-cover rounded-l-lg"
                />
                <div className="px-3">
                  <h3 className="text-xs font-medium text-gray-900">
                    Beverages
                  </h3>
                </div>
              </div>
            </div>

            {/* Snacks Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-center">
                <img
                  src="https://cdn-image.getir.com/market/category/6abf7aa5-20ba-4979-919f-e84e8a5b8b01.png?format=webp&height=500&width=500"
                  alt="Snacks"
                  className="w-16 h-16 object-cover rounded-l-lg"
                />
                <div className="px-3">
                  <h3 className="text-xs font-medium text-gray-900">Snacks</h3>
                </div>
              </div>
            </div>

            {/* Food Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-center">
                <img
                  src="https://cdn-image.getir.com/market/category/549a2e70-ec8e-4f02-b73a-8f44e2a05ff9.png?format=webp&height=500&width=500"
                  alt="Food"
                  className="w-16 h-16 object-cover rounded-l-lg"
                />
                <div className="px-3">
                  <h3 className="text-xs font-medium text-gray-900">Food</h3>
                </div>
              </div>
            </div>

            {/* Baked Goods Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-center">
                <img
                  src="https://cdn-image.getir.com/market/category/9e8d8807-daf3-4a21-a6a8-123fa99b29bb.png?format=webp&height=500&width=500"
                  alt="Baked Goods"
                  className="w-16 h-16 object-cover rounded-l-lg"
                />
                <div className="px-3">
                  <h3 className="text-xs font-medium text-gray-900">
                    Baked Goods
                  </h3>
                </div>
              </div>
            </div>

            {/* Ice Cream Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-center">
                <img
                  src="https://cdn-image.getir.com/market/category/17750559-32c6-4ce8-a77a-f7c0378b9b7b.png?format=webp&height=500&width=500"
                  alt="Ice Cream"
                  className="w-16 h-16 object-cover rounded-l-lg"
                />
                <div className="px-3">
                  <h3 className="text-xs font-medium text-gray-900">
                    Ice Cream
                  </h3>
                </div>
              </div>
            </div>

            {/* Ready to Eat Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-center">
                <img
                  src="https://cdn-image.getir.com/market/category/8a5bd926-1ae1-4463-a12e-d70a8951c6da.png?format=webp&height=500&width=500"
                  alt="Ready to Eat"
                  className="w-16 h-16 object-cover rounded-l-lg"
                />
                <div className="px-3">
                  <h3 className="text-xs font-medium text-gray-900">
                    Ready to Eat
                  </h3>
                </div>
              </div>
            </div>

            {/* Fit & Form Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-center">
                <img
                  src="https://cdn-image.getir.com/market/category/76b7d020-e723-41df-9b2a-0a00a05a6225.png?format=webp&height=500&width=500"
                  alt="Fit & Form"
                  className="w-16 h-16 object-cover rounded-l-lg"
                />
                <div className="px-3">
                  <h3 className="text-xs font-medium text-gray-900">
                    Fit & Form
                  </h3>
                </div>
              </div>
            </div>

            {/* Personal Care Card */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex items-center">
                <img
                  src="https://cdn-image.getir.com/market/category/ebe6c5f5-1f77-43fa-a82e-928cbb9c4717.png?format=webp&height=500&width=500"
                  alt="Personal Care"
                  className="w-16 h-16 object-cover rounded-l-lg"
                />
                <div className="px-3">
                  <h3 className="text-xs font-medium text-gray-900">
                    Personal Care
                  </h3>
                </div>
              </div>
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

        {/* Mobile Featured Cards Section */}
        <div className="md:hidden bg-gray-100 px-4 py-6">
          <div className="space-y-4">
            {/* Card 1 - At your door in minutes */}
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <img
                  src="/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg"
                  alt="At your door in minutes"
                  className="w-24 h-24"
                />
              </div>
              <h3 className="text-base font-semibold text-getir-purple mb-3">
                At your door in minutes
              </h3>
              <p className="text-gray-600 text-sm">
                Your order is at your door in minutes with Getir.
              </p>
            </div>

            {/* Card 2 - A promotion for every order */}
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <img
                  src="/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg"
                  alt="A promotion for every order"
                  className="w-24 h-24"
                />
              </div>
              <h3 className="text-base font-semibold text-getir-purple mb-3">
                A promotion for every order
              </h3>
              <p className="text-gray-600 text-sm">
                At Getir, you can find a promotion for every order.
              </p>
            </div>

            {/* Card 3 - Thousand kinds of happiness */}
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <img
                  src="/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg"
                  alt="Thousand kinds of happiness"
                  className="w-24 h-24"
                />
              </div>
              <h3 className="text-base font-semibold text-getir-purple mb-3">
                Thousand kinds of happiness
              </h3>
              <p className="text-gray-600 text-sm">
                At Getir, you can choose from thousands of varieties.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop View - Keep Original */}
      <div className="hidden md:block">
        {/* Hero Section with Login Form */}
        <div className="relative overflow-hidden h-[80vh]">
          <div className="absolute inset-0 z-0">
            {/* Background image carousel with smooth transitions */}
            {validImages.length > 0 ? (
              validImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1500 ease-in-out ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    filter: "brightness(0.7)",
                  }}
                  onError={() => handleImageError(index)}
                />
              ))
            ) : (
              // Fallback background if no images load
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  filter: "brightness(0.7)",
                }}
              />
            )}
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-getir-purple via-getir-purple/40 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-between px-2 sm:px-4 lg:px-8">
            {/* Left Side - Branding */}
            <div className="hidden lg:block lg:w-1/2 text-white">
              <div className="max-w-lg">
                <img
                  src="/download.svg"
                  alt="getirmore"
                  className="h-16 w-auto mb-6"
                />

                <p className="text-5xl opacity-90">
                  Thousands of items and outstanding prices are at your door!
                </p>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 flex justify-end">
              <div className="w-full max-w-sm">
                {/* White Card */}
                <div className="bg-white rounded-xl p-6 shadow-2xl">
                  {/* Title */}
                  <h2 className="text-getir-purple text-xl font-semibold mb-4 text-center">
                    Login or register
                  </h2>

                  <form onSubmit={handlePhoneSubmit} className="space-y-4">
                    {/* Phone Number Input */}
                    <div className="flex space-x-2">
                      {/* Country Code Dropdown */}
                      <div className="relative" ref={dropdownRef}>
                        <button
                          type="button"
                          onClick={() =>
                            setShowCountryDropdown(!showCountryDropdown)
                          }
                          className="flex items-center justify-between w-full bg-gray-50 border border-gray-300 rounded-md px-3 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-getir-purple focus:border-transparent"
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

                      {/* Phone Number Input */}
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Mobile Phone"
                        className="flex-1 bg-gray-50 border border-gray-300 rounded-md px-3 py-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-getir-purple focus:border-transparent"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-getir-yellow text-getir-purple font-semibold py-3 px-3 rounded-md hover:bg-yellow-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-getir-yellow focus:ring-offset-2"
                    >
                      Continue with phone number
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <CategoriesSection />

        {/* Download Section */}
        <DownloadSection />
      </div>
    </div>
  );
};

export default GetirMorePage;
