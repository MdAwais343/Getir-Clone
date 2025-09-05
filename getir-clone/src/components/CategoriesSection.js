import React from "react";

const CategoriesSection = () => {
  // Category images map - update URLs here
  const categoryImages = {
    Beverages:
      "https://cdn-image.getir.com/market/category/da5a5b90-5b5c-4c73-9ef4-056f18589e1e.png?format=webp&height=500&width=500",
    Snacks:
      "https://cdn-image.getir.com/market/category/6abf7aa5-20ba-4979-919f-e84e8a5b8b01.png?format=webp&height=500&width=500",
    "Fruits & Veggies":
      "https://cdn-image.getir.com/market/category/9166a172-e49a-429a-8655-061094811ddb.png?format=webp&height=500&width=500",
    "Milk & Dairy":
      "https://cdn-image.getir.com/market/category/f3771c5b-70b1-46d1-8646-9da5ee1cc69f.png?format=webp&height=500&width=500",
    Eggs: "https://cdn-image.getir.com/market/category/606729b7-278e-44a9-8594-577c6416ffac.png?format=webp&height=500&width=500", // Add image URL here
    Breakfast:
      "https://cdn-image.getir.com/market/category/9e8d8807-daf3-4a21-a6a8-123fa99b29bb.png?format=webp&height=500&width=500", // Add image URL here
    "Ice Cream":
      "https://cdn-image.getir.com/market/category/17750559-32c6-4ce8-a77a-f7c0378b9b7b.png?format=webp&height=500&width=500", // Add image URL here
    Food: "https://cdn-image.getir.com/market/category/549a2e70-ec8e-4f02-b73a-8f44e2a05ff9.png?format=webp&height=500&width=500", // Add image URL here
    "Ready to Eat":
      "https://cdn-image.getir.com/market/category/8a5bd926-1ae1-4463-a12e-d70a8951c6da.png?format=webp&height=500&width=500", // Add image URL here
    "Meat & Fish":
      "https://cdn-image.getir.com/market/category/5ec88274-7c14-4ebb-ad97-3c36b8cb015e.png?format=webp&height=500&width=500", // Add image URL here
    "Fit & Form":
      "https://cdn-image.getir.com/market/category/76b7d020-e723-41df-9b2a-0a00a05a6225.png?format=webp&height=500&width=500", // Add image URL here
    "Personal Care":
      "https://cdn-image.getir.com/market/category/ebe6c5f5-1f77-43fa-a82e-928cbb9c4717.png?format=webp&height=500&width=500", // Add image URL here
    "Home Care":
      "https://cdn-image.getir.com/market/category/97df6cb0-4f95-4af5-b7e7-fd7ea7464fd5.png?format=webp&height=500&width=500", // Add image URL here
    "Pet Food":
      "https://cdn-image.getir.com/market/category/1ff61bc1-867a-434b-8c4c-09746ccfcdd8.png?format=webp&height=500&width=500", // Add image URL here
    "Home & Living":
      "https://cdn-image.getir.com/market/category/9153e546-5e76-402a-9169-903ef90b8f26.png?format=webp&height=500&width=500", // Add image URL here
    "Baby Care":
      "https://cdn-image.getir.com/market/category/f28962b9-1c3c-4659-8d1e-43c2eb2a5bd6.png?format=webp&height=500&width=500", // Add image URL here
    "Sex Health":
      "https://cdn-image.getir.com/market/category/bd9c8f39-7f3d-4dfe-be33-4e444db9dea6.png?format=webp&height=500&width=500", // Add image URL here
  };

  const categories = [
    { name: "Beverages" },
    { name: "Snacks" },
    { name: "Fruits & Veggies" },
    { name: "Milk & Dairy" },
    { name: "Eggs" },
    { name: "Breakfast" },
    { name: "Ice Cream" },
    { name: "Food" },
    { name: "Ready to Eat" },
    { name: "Meat & Fish" },
    { name: "Fit & Form" },
    { name: "Personal Care" },
    { name: "Home Care" },
    { name: "Pet Food" },
    { name: "Home & Living" },
    { name: "Baby Care" },
    { name: "Sex Health" },
  ];

  return (
    <div className="bg-white py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-sm sm:text-md font-bold text-gray-700 text-left mb-4 sm:mb-6">
          Categories
        </h2>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 sm:gap-3">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-1 sm:p-2 rounded-sm hover:bg-gray-100 hover:shadow-md transition-shadow duration-200 cursor-pointer group"
            >
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 border border-gray-300 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200`}
              >
                {categoryImages[category.name] ? (
                  <img
                    src={categoryImages[category.name]}
                    alt={category.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  />
                ) : (
                  <span className="text-lg">{category.icon}</span>
                )}
              </div>
              <span className="text-xs sm:text-sm mt-1 sm:mt-2 font-medium text-gray-600 text-center leading-tight group-hover:text-[rgb(93,62,188)] transition-colors duration-200">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
