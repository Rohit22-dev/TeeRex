import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Product from "./components/Product";
import Sidebar from "./components/Sidebar";
import "./app.css";
import Navbar from "./components/Navbar";

const UserContext = createContext();
const App = () => {
  const [Data, setData] = useState([]);
  const [tempData, setTempData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [toggleButton, setToggleButton] = useState(false);
  useEffect(() => {
    fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    )
      .then((response) => response.json())
      .then((item) => {
        setTempData(item);
        setData(item);
      })
      .catch((error) => {
        window.alert("There was an error.", error.message);
      });

    if (window.location.pathname !== "/") {
      window.location.pathname = "/";
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        Data,
        setData,
        cartData,
        setCartData,
        tempData,
        setTempData,
        toggleButton,
        setToggleButton,
      }}
    >
        {/* flex-1 flex-row */}
        <div className="relative">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <div className="p-10 flex gap-20 w-full">
                  <Sidebar />
                  <Product />
                </div>
              }
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
    </UserContext.Provider>
  );
};
export { UserContext };

export default App;
