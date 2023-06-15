import React,{useState, useEffect, useRef} from "react";
import Web3 from 'web3'
import { ABI, contractAddress } from "../base/keys";
import QrScanner from 'qr-scanner';
import { Alert, Snackbar } from "@mui/material";

import { useSelector } from "react-redux";

const ScanShipment = () => {
  
    const role = useSelector((state) => state.user.currentUser?.role);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

  const [location, setLocation] = useState("")
  const [id , setId] = useState(null)


 const web3 = new Web3('HTTP://127.0.0.1:7545');
    web3.eth.getAccounts().then(console.log);

    let contract = new web3.eth.Contract(ABI, contractAddress);

    const handleChange=(e)=>{
      const qr = e.target.files[0]
      QrScanner.scanImage(qr,{ returnDetailedScanResult: true })
    .then(result => setId(result.data) )
    .catch(error => console.log(error || 'No QR code found.'));
    }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(showPosition)
    function showPosition(position) {
          var autoLocation = position.coords.latitude +", " + position.coords.longitude;
          setLocation(autoLocation) 
      }
  }, []);

  const handleUpdate = (e)=>{
    e.preventDefault();
    const prodid = id;
    const prodlocation = location;
     const date = new Date();
     const thisDate =date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
      var info =thisDate+"/p"+prodlocation;

      web3.eth.getAccounts().then(async function(accounts) {
          var receipt = await contract.methods.addState(prodid, info).send({ from: accounts[0], gas: 1000000 })
          .then(receipt => {
              console.log(receipt);
              setSuccess(true)
          })
        }).catch(err=> setError(true))
  }


  return (
    <main>
      {
        role === "Distributor" || role === "Retailer" ? 
      <section>
        <div className="flex items-center min-h-screen lg:justify-center">
          <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-sm">
            <div className="p-5  bg-white md:flex-1 mx-10 my-10 md:mx-0 md:my-0 ">
              <h3 className="mb-4 text-2xl font-semibold text-gray-700">
                Please Fill Product Details
              </h3>
              <form action="#" className="flex flex-col space-y-5" onSubmit={handleUpdate}>
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
                    value={id}
                      className="px-4 py-2 text-gray-500 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                      onChange={(e) => setId(e.target.value)}
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
                    className="px-4 py-2 text-gray-500   transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                    value={location}
                    // onChange={()=>console.log('nothing')}
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
      </section> :
          <section>
        <div className="flex items-center min-h-screen lg:justify-center">
          <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-sm">
            <div className="p-5  bg-white md:flex-1 mx-10 my-10 md:mx-0 md:my-0 ">
              {/* <button className="text-black" onClick={()=> setOpen(!open)}>click</button> */}
              <h3 className="mb-4 text-2xl font-semibold text-gray-700 text-center">
                Your are not a Distributor or retailer. Get out pig
              </h3>

            </div>
          </div>
        </div>
      </section>
      }
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
          The Product has been successfully been updated with the {role}'s location
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
        The product failed to update, Please Check the fields and location permissions
        </Alert>
      </Snackbar>
    </main>
  );
};

export default ScanShipment;









