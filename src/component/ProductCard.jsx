import React from "react";

const ProductCard = () => {
  return (
    <div className="w-full p-6 mt-5  border text-center  rounded-lg shadow-md bg-gray-800 border-gray-700">
      <h5 className="mb-1 text-2xl font-normal tracking-tight text-gray-900 dark:text-white">
        Product Id : ---
      </h5>
      <h5 className="mb-2 text-2xl font-normal text-white">
        Product Name : ---
      </h5>
      <h5 className="mb-2 text-2xl font-normal text-white">
        Manufacturer Name : ---
      </h5>
      <h5 className="mb-2 text-2xl font-normal text-white">Location : ---</h5>
      <h5 className="mb-2 text-2xl font-normal text-white">Owner : ---</h5>
      <a
        href="#"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <svg
          aria-hidden="true"
          className="w-4 h-4 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default ProductCard;
