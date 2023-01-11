import React, { useState } from "react";

const AddProduct = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState(null);
  const data = {
    id,
    name,
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();
    setImg(
      `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${[
        id,
        name,
      ]}`
    );
  };
  return (
    <main>
      <section>
        <div className="flex items-center min-h-screen lg:justify-center">
          <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-sm">
            <div className="p-5  bg-white md:flex-1 mx-10 my-10 md:mx-0 md:my-0 ">
              <h3 className="mb-4 text-2xl font-semibold text-gray-700">
                Please Fill Product Details
              </h3>

              <form
                action="#"
                className="flex flex-col space-y-5"
                onSubmit={HandleSubmit}
              >
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Enter Product Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    autoFocus
                    className="px-4 py-2 text-gray-600 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                    onChange={(e) => setName(e.target.value)}
                  />
                  {/* <MagnifyingGlassIcon className="w-7 h-7 text-gray-800" /> */}
                </div>
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="id"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Enter Product ID
                  </label>
                  <input
                    type="text"
                    id="id"
                    className="px-4 py-2 text-gray-600 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                    onChange={(e) => setId(e.target.value)}
                  />
                  {/* <MagnifyingGlassIcon className="w-7 h-7 text-gray-800" /> */}
                </div>
                <button
                  type="submit"
                  className=" text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 "
                >
                  Submit
                </button>
              </form>
              <div className="flex flex-col space-y-1 mt-5 items-center ">
                <img className="h-50 w-50 rounded-lg" src={img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AddProduct;
