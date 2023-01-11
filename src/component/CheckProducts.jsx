import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import ProductCard from "./ProductCard";

const CheckProducts = () => {
  return (
    <>
      <main>
        <section>
          <div className="flex items-center min-h-screen lg:justify-center ">
            <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-sm">
              <div className="p-5  bg-white md:flex-1 mx-10 my-10 md:mx-0 md:my-0 ">
                <form className="flex flex-col space-y-5">
                  <div className="flex flex-col space-y-1">
                    <label
                      htmlFor="text"
                      className="text-sm font-semibold text-gray-500"
                    >
                      Enter Product ID
                    </label>
                    <input
                      type="text"
                      id="username"
                      autoFocus
                      className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                    />
                    {/* <MagnifyingGlassIcon className="w-7 h-7 text-gray-800" /> */}
                  </div>

                  <div className="flex 1 ">
                    <label
                      className="w-full font-medium text-center rounded-lg text-sm px-5 py-2.5 mb-2 text-white dark:bg-green-600 dark:hover:bg-green-700  duration-300 bg-green-700 hover:bg-green-800  shadow  focus:outline-none focus:ring-blue-200 focus:ring-4"
                      htmlFor="selectedFile"
                    >
                      Scan QR
                    </label>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      id="selectedFile"
                      onChange={(e) => setqr(e.target.files[0])}
                    />
                  </div>
                  <button
                    type="submit"
                    className=" text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 "
                  >
                    Submit
                  </button>
                </form>
                <ProductCard />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CheckProducts;
