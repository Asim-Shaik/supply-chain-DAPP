import React, { useState } from "react";
import axios from "axios";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/user";
import { Alert, Snackbar } from "@mui/material";

import { Link } from "react-router-dom";

const url = "http://127.0.0.1:8000/api/login";
const Login = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(url, {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });

      if (res.data.status !== 200) {
        setError(true)
      } else {
        res.data.data &&
          dispatch(
            loginSuccess({
              email: res.data.data.email,
              role: res.data.data.roleName,
              name: res.data.data.name
            })
          ) && window.location.replace('/')
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <main>
        <section>
          <div className="flex items-center min-h-screen lg:justify-center">
            <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-sm">
              <div className="p-5  bg-white md:flex-1 mx-10 my-10 md:mx-0 md:my-0 ">
                <h3 className="mb-4 text-2xl font-semibold text-gray-700 text-center">
                  Login into your Account

                </h3>
                <p className="text-center">OR</p>
                <h3 className="mb-4 text-2xl font-semibold text-gray-700 text-center underline">
                  <Link to="/register">Register a new Account</Link>
                </h3>
                <form
                  action="#"
                  className="flex flex-col space-y-5"
                  onSubmit={handleSubmit}
                >
                  <div className="flex flex-col space-y-1">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-gray-500"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      autoFocus
                      className="px-4 py-2 transition text-gray-500 duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                      ref={emailRef}
                    />
                    <h3 className="mb-4 text-sm font-semibold text-yellow-500">
                      We never share your email elsewhere
                    </h3>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label
                      htmlFor="password"
                      className="text-sm font-semibold text-gray-500"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="px-4 py-2 text-gray-500 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                      ref={passwordRef}
                    />
                  </div>
                  <button
                    type="submit"
                    className=" text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 "
                  >
                    Login
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
            User Login Successfull
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
            Please check your credentials
          </Alert>
        </Snackbar>
      </main>
    </>
  );
};

export default Login;
