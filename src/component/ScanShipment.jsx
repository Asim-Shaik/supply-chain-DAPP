import React from "react";

const ScanShipment = () => {
  return (
    <main>
      <section>
        <div className="flex items-center min-h-screen lg:justify-center">
          <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-sm">
            <div className="p-5  bg-white md:flex-1 mx-10 my-10 md:mx-0 md:my-0 ">
              <h3 className="mb-4 text-2xl font-semibold text-gray-700">
                Please Fill Product Details
              </h3>
              <form action="#" className="flex flex-col space-y-5">
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
                  />
                </div>
                <h3 className="mb-4 text-l font-semibold text-gray-700 text-center">
                  OR
                </h3>
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="id"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Recieved Product ID
                  </label>
                  <input
                    type="text"
                    id="id"
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  />
                  {/* <MagnifyingGlassIcon className="w-7 h-7 text-gray-800" /> */}
                </div>
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="location"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Frieght Hub Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  />
                  {/* <MagnifyingGlassIcon className="w-7 h-7 text-gray-800" /> */}
                </div>
                <button
                  type="submit"
                  className=" text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 "
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ScanShipment;
