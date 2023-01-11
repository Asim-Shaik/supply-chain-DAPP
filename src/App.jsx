import CheckProducts from "./component/CheckProducts";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./component/AddProduct";
import ScanShipment from "./component/ScanShipment";
import Login from "./component/Login";
import Register from "./component/Register";
import { useState } from "react";

function App() {
  const user = true;
  return (
    <>
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route path="/" element={user ? <CheckProducts /> : <Login />} />
            <Route path="/add" element={user ? <AddProduct /> : <Register />} />
            <Route path="/scanshipment" element={<ScanShipment />} />
          </Routes>
        </Navbar>
      </BrowserRouter>
    </>
  );
}

export default App;
