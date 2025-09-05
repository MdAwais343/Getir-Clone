import React, { useState } from "react";

const Footer = () => {
  const [openAccordion, setOpenAccordion] = useState(1);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="mt-6 sm:mt-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Mobile Accordion View */}
        <div className="md:hidden">
          {/* Download Getir - Always Visible */}
          <div className="border-b border-gray-200">
            <h3 className="text-base font-bold text-getir-purple py-4">
              Download Getir!
            </h3>
            <div className="pb-4 space-y-3">
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

          {/* Discover Getir Accordion */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => toggleAccordion(1)}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <h3 className="text-base font-bold text-getir-purple">
                Discover Getir
              </h3>
              <svg
                className={`w-5 h-5 text-getir-purple transition-transform ${
                  openAccordion === 1 ? "rotate-180" : ""
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
            {openAccordion === 1 && (
              <div className="pb-4 space-y-3">
                <a
                  href="#"
                  className="block text-gray-600 hover:text-getir-purple transition-colors text-sm"
                >
                  About us
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-getir-purple transition-colors text-sm"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-getir-purple transition-colors text-sm"
                >
                  Technology Careers
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-getir-purple transition-colors text-sm"
                >
                  Contact us
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-getir-purple transition-colors text-sm"
                >
                  Social Responsibility Projects
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-getir-purple transition-colors text-sm"
                >
                  Press Releases
                </a>
              </div>
            )}
          </div>

          {/* Need Help Accordion */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => toggleAccordion(2)}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <h3 className="text-base font-bold text-getir-purple">
                Need help?
              </h3>
              <svg
                className={`w-5 h-5 text-getir-purple transition-transform ${
                  openAccordion === 2 ? "rotate-180" : ""
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
            {openAccordion === 2 && (
              <div className="pb-4 space-y-3">
                <a
                  href="#"
                  className="block text-gray-600 hover:text-getir-purple transition-colors text-sm"
                >
                  FAQ
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-getir-purple transition-colors text-sm"
                >
                  Protection of Personal Data
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-getir-purple transition-colors text-sm"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-getir-purple transition-colors text-sm"
                >
                  Terms & Conditions
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-getir-purple transition-colors text-sm"
                >
                  Cookie Policy
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-getir-purple transition-colors text-sm"
                >
                  Process Guide
                </a>
              </div>
            )}
          </div>

          {/* Business Partner Accordion */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => toggleAccordion(3)}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <h3 className="text-base font-bold text-getir-purple">
                Become Our Business Partner
              </h3>
              <svg
                className={`w-5 h-5 text-getir-purple transition-transform ${
                  openAccordion === 3 ? "rotate-180" : ""
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
            {openAccordion === 3 && (
              <div className="pb-4 space-y-3">
                <a
                  href="#"
                  className="block text-gray-600 hover:text-getir-purple transition-colors text-sm"
                >
                  Become a Franchisee
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-getir-purple transition-colors text-sm"
                >
                  Rent Your Warehouse
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-getir-purple transition-colors text-sm"
                >
                  Become a GetirFood Restaurant
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-getir-purple transition-colors text-sm"
                >
                  Become a GetirLocals Business
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-getir-purple transition-colors text-sm"
                >
                  Chain Restaurants
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Desktop View - Keep Original */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 px-2 sm:px-4">
          {/* Download Getir Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-bold text-getir-purple mb-3">
              Download Getir!
            </h3>
            <div className="space-y-3">
              {/* App Store */}
              <a href="#" className="block hover:opacity-80 transition-opacity">
                <div className="inline-flex items-center justify-center bg-black text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 h-[40px] sm:h-[45px] w-[120px] sm:w-[140px]">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="text-xs font-semibold">App Store</div>
                    </div>
                  </div>
                </div>
              </a>

              {/* Google Play */}
              <a href="#" className="block hover:opacity-80 transition-opacity">
                <div className="inline-flex items-center justify-center bg-black text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 h-[40px] sm:h-[45px] w-[120px] sm:w-[140px]">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">GET IT ON</div>
                      <div className="text-xs font-semibold">Google Play</div>
                    </div>
                  </div>
                </div>
              </a>

              {/* Huawei AppGallery */}
              <a href="#" className="block hover:opacity-80 transition-opacity">
                <div className="inline-flex items-center justify-center bg-black text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 h-[40px] sm:h-[45px] w-[120px] sm:w-[140px]">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">EXPLORE IT ON</div>
                      <div className="text-xs font-semibold">AppGallery</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Discover Getir Column */}
          <div className="pl-0 sm:pl-8">
            <h3 className="text-base sm:text-lg font-bold text-getir-purple mb-3">
              Discover Getir
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <a
                href="#"
                className="block text-gray-600 hover:text-getir-purple transition-colors text-sm sm:text-base"
              >
                About us
              </a>
              <a
                href="#"
                className="block text-gray-600 hover:text-getir-purple transition-colors text-sm sm:text-base"
              >
                Careers
              </a>
              <a
                href="#"
                className="block text-gray-600 hover:text-getir-purple transition-colors text-sm sm:text-base"
              >
                Technology Careers
              </a>
              <a
                href="#"
                className="block text-gray-600 hover:text-getir-purple transition-colors text-sm sm:text-base"
              >
                Contact us
              </a>
              <a
                href="#"
                className="block text-gray-600 hover:text-getir-purple transition-colors text-sm sm:text-base"
              >
                Social Responsibility Projects
              </a>
              <a
                href="#"
                className="block text-gray-600 hover:text-getir-purple transition-colors text-sm sm:text-base"
              >
                Press Releases
              </a>
            </div>
          </div>

          {/* Need Help Column */}
          <div className="pl-0 sm:pl-12">
            <h3 className="text-base sm:text-lg font-bold text-getir-purple mb-3">
              Need help?
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <a
                href="#"
                className="block text-gray-600 hover:text-getir-purple transition-colors text-sm sm:text-base"
              >
                FAQ
              </a>
              <a
                href="#"
                className="block text-gray-600 hover:text-getir-purple transition-colors text-sm sm:text-base"
              >
                Protection of Personal Data
              </a>
              <a
                href="#"
                className="block text-gray-600 hover:text-getir-purple transition-colors text-sm sm:text-base"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="block text-gray-600 hover:text-getir-purple transition-colors text-sm sm:text-base"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="block text-gray-600 hover:text-getir-purple transition-colors text-sm sm:text-base"
              >
                Cookie Policy
              </a>
              <a
                href="#"
                className="block text-gray-600 hover:text-getir-purple transition-colors text-sm sm:text-base"
              >
                Process Guide
              </a>
            </div>
          </div>

          {/* Business Partner Column */}
          <div className="pl-0 sm:pl-12">
            <h3 className="text-base sm:text-lg font-bold text-getir-purple mb-3">
              Become Our Business Partner
            </h3>
            <div className="flex justify-start sm:justify-center items-start">
              <div className="space-y-2 sm:space-y-3 flex-1">
                <a
                  href="#"
                  className="block text-gray-600 hover:text-getir-purple transition-colors text-sm sm:text-base"
                >
                  Become a Franchisee
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-getir-purple transition-colors text-sm sm:text-base"
                >
                  Rent Your Warehouse
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-getir-purple transition-colors text-sm sm:text-base"
                >
                  Become a GetirFood Restaurant
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-getir-purple transition-colors text-sm sm:text-base"
                >
                  Become a GetirLocals Business
                </a>
                <a
                  href="#"
                  className="block text-gray-600 hover:text-getir-purple transition-colors text-sm sm:text-base"
                >
                  Chain Restaurants
                </a>
              </div>
            </div>
          </div>
          {/* QR Code Section */}
          <div className="flex justify-center items-start pl-0 sm:pl-12">
            <div className="w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-lg mb-2 flex items-center justify-center p-3 sm:p-4 shadow-md">
              <img
                src="https://cdn.getir.com/getirweb-images/common/etbis.png"
                alt="ETBİS QR Code"
                className="w-full h-full object-contain rounded"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="px-4 sm:px-8 lg:px-12 py-4 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
            <span className="text-gray-600 text-sm sm:text-base">
              © 2025 Getir
            </span>
            <span className="text-gray-600 text-sm sm:text-base">
              Information Society Services
            </span>
          </div>

          <div className="flex items-center space-x-6">
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-getir-purple transition-colors"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-getir-purple transition-colors"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-getir-purple transition-colors"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.719-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </a>
            </div>

            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-600 text-sm sm:text-base">
                English (EN)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
