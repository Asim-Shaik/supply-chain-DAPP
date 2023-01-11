import React from "react";

const Register = () => {
  return (
    <main>
      <section>
        <div className="flex items-center min-h-screen lg:justify-center">
          <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-sm">
            <div className="p-5  bg-white md:flex-1 mx-10 my-10 md:mx-0 md:my-0 ">
              <h3 className="mb-4 text-2xl font-semibold text-gray-700 text-center">
                Please enter User Credentails
              </h3>
              <form action="#" className="flex flex-col space-y-5">
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="name"
                    autoFocus
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  />
                  <h3 className="mb-4 text-sm font-semibold text-yellow-500">
                    We never share your email elsewhere
                  </h3>
                  {/* <MagnifyingGlassIcon className="w-7 h-7 text-gray-800" /> */}
                </div>
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="id"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="id"
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  />
                  {/* <MagnifyingGlassIcon className="w-7 h-7 text-gray-800" /> */}
                </div>
                <div className="text-gray-800">
                  <label
                    htmlFor="usertype"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Select Your Role
                  </label>
                  <select
                    className="px-4 py-2 ml-4 transition duration-300 border border-gray-300 rounded"
                    id="usertype"
                    aria-label="select example"
                    required
                    name="role"
                  >
                    <option selected disabled value="">
                      Choose...
                    </option>
                    <option value="1">Customer</option>
                    <option value="2">Retailer</option>
                    <option value="3">Distributor</option>
                    <option value="4">Manufacturer</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className=" text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 "
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
