import React, { createContext, useContext, useEffect, useState } from "react";
import ProductBox from "./ProductBox";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { UserContext } from "../App";

const Product = () => {
  const { Data } = useContext(UserContext);

  const handleSearch = () => {};

  return (
    <div className="flex-row w-full scrollbar-hide">
      <div className="flex justify-center m-3 gap-2 py-2">
        <div className="border-b-2 border-black w-full sm:w-fit">
          <input
            className="placeholder-slate-500 md:w-[20rem] w-full placeholder:font-semibold focus:outline-none"
            placeholder="Search for products..."
          />
        </div>
        <div
          className="place-items-center sm:bg-[#979392] bg-black  rounded-md px-3 p-1 cursor-pointer "
          onClick={handleSearch}
        >
          <SearchOutlinedIcon className="text-white" />
        </div>
        <div
          className="place-items-center bg-black rounded-md px-3 p-1 cursor-pointer block sm:hidden"
          onClick={handleSearch}
        >
          <FilterAltOutlinedIcon
            className="text-white"
            onClick={() => {
              setToggleButton(true);
              console.log("clicked");
            }}
          />
        </div>
      </div>
      <div className="flex-wrap flex gap-10 p-3 ">
        {Data &&
          Data.map((product, i) => {
            return <ProductBox info={product} key={i} />;
          })}
      </div>
    </div>
  );
};

export default Product;
