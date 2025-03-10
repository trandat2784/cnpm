import React, { useEffect } from "react";
import {useState} from "react";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Order from "./pages/Order";
import Login from "./components/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddPost from "./pages/AddPost";
export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const currency = "$"
const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):"");
  useEffect(()=>{
    localStorage.setItem('token', token);
  },[token])
  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <hr />
          <div className="flex w-full">
            <SideBar />
            <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
              <Routes>
                <Route path="/add" element={<Add token={token} />} />
                <Route path="/list" element={<List token={token} />} />
                <Route path="/orders" element={<Order token={token} />} />
                <Route path="/post/add" element={<AddPost token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
