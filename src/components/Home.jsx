import React from "react";
import Product from "./Product";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div className="p-10 flex gap-10 w-full">
      <Sidebar />
      <Product />
    </div>
  );
};

export default Home;
