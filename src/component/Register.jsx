import React, { useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Alert, Snackbar } from "@mui/material";

const Register = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const [role, setRole] = useState("")
  const url = "http://127.0.0.1:8000/api/add";


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(url, {
        email: emailRef.current.value,
        password: passwordRef.current.value,
        name: nameRef.current.value,
        role: role
      });
      console.log(res.data)
      if (res.data.status === 200) {
        console.log(true)
        window.location.replace('/')
        
      
      }
      // res.data.status === 200 && window.location.replace('/');
    } catch (err) {
      console.error(err);
      setError(true)
    }
  }
  return (
    <main>
      <section>
        <div className="flex items-center min-h-screen lg:justify-center">
          <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-sm">
            <div className="p-5  bg-white md:flex-1 mx-10 my-10 md:mx-0 md:my-0 ">
              <h3 className="mb-4 text-2xl font-semibold text-gray-700 text-center">
                Register New Account
              </h3>
              <p className="text-center">OR</p>
              <h3 className="mb-4 text-2xl font-semibold text-gray-700 text-center underline">
                <Link to="/login">Login to an exsisting one</Link>
              </h3>
              <form action="#" className="flex flex-col space-y-5" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    autoFocus
                    className="px-4 text-gray-500 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                    ref={nameRef}
                  />

                  {/* <MagnifyingGlassIcon className="w-7 h-7 text-gray-800" /> */}
                </div>
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="name"
                    autoFocus
                    className="px-4 text-gray-500 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                    ref={emailRef}
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
                    className="px-4 py-2 text-gray-500 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                    ref={passwordRef}
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
                    className="px-4 py-2 ml-4 transition duration-300 border border-gray-300 rounded text-gray-500"
                    id="usertype"
                    aria-label="select example"
                    required
                    name="role"
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option selected disabled value="">
                      Choose...
                    </option>
                    <option value="1">Retailer</option>
                    <option value="2">Manufacturer</option>
                    <option value="3">Consumer</option>
                    <option value="4">Distributor</option>
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
      <Snackbar
        open={success}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={() => setSuccess(false)}
      >
        <Alert
          onClose={() => setSuccess(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          User Register Successfull
        </Alert>
      </Snackbar>
      <Snackbar
        open={error}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={() => setError(false)}
      >
        <Alert
          onClose={() => setError(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          Please check All fields
        </Alert>
      </Snackbar>
    </main>
  );
};

export default Register;
