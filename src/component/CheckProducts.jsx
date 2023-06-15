import React, { useState, useRef } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import axios from "axios";
import { Modal, Box } from '@mui/material'
import { Alert, Snackbar } from "@mui/material";


import Web3 from 'web3'
// import { QRious } from 'react-qrious'
import { ABI, contractAddress } from "../base/keys";
import ProductCard from "./ProductCard";
import QrScanner from 'qr-scanner';

const CheckProducts = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [id, setId] = useState("")
  const [data, setData] = useState([])
  const [open, setOpen] = useState(false)


  const web3 = new Web3('HTTP://127.0.0.1:7545');
  // web3.eth.getAccounts().then(console.log);

  let contract = new web3.eth.Contract(ABI, contractAddress);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id !== "") {
      const res = await contract.methods.searchProduct(id).call(function (err, result) {
        console.log(err)
        if (err) {
          setError(true)
        }
        if (result) {
          setData(result)
          setOpen(true)
          setSuccess(true)
        }
      })
    } else {
      setError(true)
    }
  }
  const handleClose = () => {
    setOpen(!open)
  }
  const handleChange = (e) => {
    const qr = e.target.files[0]
    QrScanner.scanImage(qr, { returnDetailedScanResult: true })
      .then(result => setId(result.data))
      .catch(error => console.log(error || 'No QR code found.'));
  }
  return (
    <>
      <main>
        <section>
          <div className="flex items-center min-h-screen lg:justify-center ">
            <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-sm">
              <div className="p-5  bg-white md:flex-1 mx-10 my-10 md:mx-0 md:my-0 ">
                <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
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
                      value={id}
                      className="px-4 py-2 text-gray-500 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                      onChange={(e) => setId(e.target.value)}
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
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className=" text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 "
                  >
                    Submit
                  </button>
                </form>

              </div>
            </div>
          </div>
        </section>


        <Modal open={open} onClose={handleClose} sx={{ top: "30%", width: 600, left: "30%" }}>
          <ProductCard data={data} />
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
            The Product successfully received
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
            Please make sure you Have the right Id
          </Alert>
        </Snackbar>
      </main>
    </>
  );
};

export default CheckProducts;
