import CheckProducts from "./component/CheckProducts";
import Navbar from "./component/Navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AddProduct from "./component/AddProduct";
import ScanShipment from "./component/ScanShipment";
import Login from "./component/Login";
import Register from "./component/Register";
import { useSelector } from "react-redux";
import Dashboard from './component/Dashboard';
// import { useState } from "react";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <> 
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/dashboard" element={ <Dashboard/>}> 
            <Route path="/dashboard" element={user ? <CheckProducts /> : <Login />} />
            <Route path="/dashboard/check-products" element={user ? <CheckProducts /> : <Login />} />
            <Route path="/dashboard/scanshipment" element={user ? <ScanShipment /> : <Login />} />
            <Route path="/dashboard/add" element={user ? <AddProduct /> : <Register />} />
            </Route>
            <Route path="/login" element={user ?<Navigate to="/dashboard" replace /> : <Login />} />
            <Route path="/register" element={user ? <Navigate to="/dashboard" replace /> : <Register />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
