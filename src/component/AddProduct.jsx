import React, { useState, useEffect, useRef } from "react";
import Web3 from "web3";
import { ABI, contractAddress } from "../base/keys";
import { Modal } from "@mui/material";
import { useSelector } from "react-redux";
import { Alert, Snackbar } from "@mui/material";

import { useQrious } from "react-qrious";
const AddProduct = () => {
  const role = useSelector((state) => state.user.currentUser?.role);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [dataUrl, _qrious] = useQrious({
    value, size: 1000,
    level: 'M',
  });

  const username = useSelector((state) => state.user.currentUser.name);

  const web3 = new Web3("HTTP://127.0.0.1:7545");
  web3.eth.getAccounts().then(console.log);

  let contract = new web3.eth.Contract(ABI, contractAddress);

  const handleClose = () => {
    setOpen(!open);
  };
  const nameRef = useRef();
  // const [img, setImg] = useState(null);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (nameRef.current.value === "") {
      setError(true)
    } else {

      const date = new Date();
      const prodname = nameRef.current.value + "/" + username;
      const thisDate =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
      e.preventDefault();
      web3.eth.getAccounts().then(async function (accounts) {
        receipt = await contract.methods
          .newItem(prodname, thisDate)
          .send({ from: accounts[0], gas: 1000000 })
          .then((receipt) => {
            setValue(receipt.events.Added.returnValues[0]);
            setOpen(true);
            setSuccess(true)
          }).catch(err => setError(true));
      });
    }
  };
  return (
    <main>
      {role === "Manufacturer" ? (
        <section>
          <div className="flex items-center min-h-screen lg:justify-center">
            <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-sm">
              <div className="p-5  bg-white md:flex-1 mx-10 my-10 md:mx-0 md:my-0 ">
                {/* <button className="text-black" onClick={()=> setOpen(!open)}>click</button> */}
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
                      ref={nameRef}
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
                {/* <div className="flex flex-col space-y-1 mt-5 items-center ">
                <img className="h-50 w-50 rounded-lg" src={img} alt="" />
              </div> */}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section>
          <div className="flex items-center min-h-screen lg:justify-center">
            <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-sm">
              <div className="p-5  bg-white md:flex-1 mx-10 my-10 md:mx-0 md:my-0 ">
                {/* <button className="text-black" onClick={()=> setOpen(!open)}>click</button> */}
                <h3 className="mb-4 text-2xl font-semibold text-gray-700 text-center">
                  Your are not a maufacturer. Get out pig
                </h3>
              </div>
            </div>
          </div>
        </section>
      )}
      <Modal open={open} onClose={handleClose}>
        <div className="max-w-sm rounded overflow-hidden shadow-xl bg-white absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 flex row justify-between text-black flex flex-col">
              <h3 className="text-2xl capitalize mb-2">id :{value}</h3>
              <img src={dataUrl} className="mx-auto w-60 h-60" />
            </div>
          </div>
        </div>
      </Modal>
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
          The Product has been successfully been Added with the The given Id
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
          The product failed to Add, Please make sure you are a manufacturer and have filled the fields
        </Alert>
      </Snackbar>
    </main>
  );
};

export default AddProduct;
