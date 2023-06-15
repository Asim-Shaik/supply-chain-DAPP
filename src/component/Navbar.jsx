import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import bductLogo from "../assets/bducticon.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/user";

const Navbar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const role = useSelector((state) => state.user.currentUser?.role);
  console.log(role);
  const dispatch = useDispatch();

  return (
    <div>
      <nav className="bg-gray-800 fixed w-full z-10 h-18 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-12 w-16" src={bductLogo} alt="Workflow" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                 
                  <a
                    href="/dashboard/check-products"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Check Products
                  </a>
                 
                  {role === "Manufacturer" ? (
                    <a
                      href="/dashboard/add"
                      className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Add Product
                    </a>
                  ) : null}
                  
                  {role === "Distributor" || role === "Retailer" ? (
                    <a
                      href="/dashboard/scanshipment"
                      className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Scan Shipment
                    </a>
                  ) : null}
                    
                  
                  <a
                    href="#"
                    className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </a>
                </div>
              </div>
            </div>
            <div
              className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium hidden md:block"
              onClick={() => {
                dispatch(logout());
                 window.location.replace("/login")
              }}
            >
              Logout
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="/dashboard/check-products"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Check Product
                </a>

                  {role === "Manufacturer" ? (
                    <a
                      href="/dashboard/add"
                      className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Add Product
                    </a>
                  ) : null}

                  {role === "Distributor" || role === "Retailer" ? (
                    <a
                      href="/dashboard/scanshipment"
                      className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Scan Shipment
                    </a>
                  ) : null}

                <a
                  href="#"
                  className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => {
                    dispatch(logout());
                     window.location.replace("/login")
                  }}
                >
                  Logout
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
      {children}
    </div>
  );
};

export default Navbar;
