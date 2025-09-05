import React from "react";

const DownloadSection = () => {
  return (
    <div className="bg-gray-100 py-4 sm:py-6">
      {/* Mobile Download Section */}
      <div className="md:hidden bg-[rgb(93,62,188)] px-4 py-6">
        <div className="text-left">
          <h2 className="text-xl font-bold text-white mb-3">Download Getir!</h2>
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

      {/* Desktop Download Section */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Purple Download Section */}
        <div className="bg-getir-purple pt-8 sm:pt-12 lg:pt-16 pb-0 relative overflow-hidden rounded-xl sm:rounded-2xl">
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

          <div className="max-w-7xl mx-auto pl-4 sm:pl-8 lg:pl-12 pr-0 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              {/* Left Section - Text and Download Buttons */}
              <div className="lg:w-1/2 mb-6 sm:mb-8 lg:mb-10 lg:pr-8 text-center lg:text-left">
                <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">
                  Download Getir!
                </h2>
                <p className="text-lg sm:text-xl text-white mb-6 sm:mb-8 opacity-90">
                  Let us deliver your order to your door in minutes.
                </p>

                {/* Download Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  {/* App Store */}
                  <a
                    href="#"
                    className="inline-flex items-center justify-center bg-black text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 min-h-[50px] sm:min-h-[60px] min-w-[160px] sm:min-w-[180px]"
                  >
                    <div className="flex items-center space-x-2">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6"
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
                  </a>

                  {/* Google Play */}
                  <a
                    href="#"
                    className="inline-flex items-center justify-center bg-black text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 min-h-[50px] sm:min-h-[60px] min-w-[160px] sm:min-w-[180px]"
                  >
                    <div className="flex items-center space-x-2">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6"
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
                  </a>

                  {/* Huawei AppGallery */}
                  <a
                    href="#"
                    className="inline-flex items-center justify-center bg-black text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 min-h-[50px] sm:min-h-[60px] min-w-[160px] sm:min-w-[180px]"
                  >
                    <div className="flex items-center space-x-2">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6"
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
                  </a>
                </div>
              </div>

              {/* Right Section - Phone Mockups */}
              <div className="lg:w-1/2 flex justify-center lg:justify-end pr-0">
                <div className="relative">
                  <img
                    src="https://cdn.getir.com/getirweb-images/common/landing/phoneLandingEn.png"
                    alt="Getir App Screenshots"
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* White Cards Section */}
        <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Card 1 - At your door in minutes */}
          <div className="bg-white rounded-xl p-6 sm:p-8 text-center hover:shadow-lg transition-shadow duration-300 min-h-[280px] sm:min-h-[350px] flex flex-col justify-center">
            <div className="flex justify-center mb-4">
              <img
                src="/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg"
                alt="At your door in minutes"
                className="w-32 h-32 sm:w-40 sm:h-40"
              />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-getir-purple mb-3">
              At your door in minutes
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Your order is at your door in minutes with Getir.
            </p>
          </div>

          {/* Card 2 - A promotion for every order */}
          <div className="bg-white rounded-xl p-6 sm:p-8 text-center hover:shadow-lg transition-shadow duration-300 min-h-[280px] sm:min-h-[350px] flex flex-col justify-center">
            <div className="flex justify-center mb-4">
              <img
                src="/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg"
                alt="A promotion for every order"
                className="w-32 h-32 sm:w-40 sm:h-40"
              />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-getir-purple mb-3">
              A promotion for every order
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              At Getir, you can find a promotion for every order.
            </p>
          </div>

          {/* Card 3 - Thousand kinds of happiness */}
          <div className="bg-white rounded-xl p-6 sm:p-8 text-center hover:shadow-lg transition-shadow duration-300 min-h-[280px] sm:min-h-[350px] flex flex-col justify-center md:col-span-2 lg:col-span-1">
            <div className="flex justify-center mb-4">
              <img
                src="/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg"
                alt="Thousand kinds of happiness"
                className="w-32 h-32 sm:w-40 sm:h-40"
              />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-getir-purple mb-3">
              Thousand kinds of happiness
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              At Getir, you can choose from thousands of varieties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
