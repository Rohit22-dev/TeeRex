import React, { useContext, useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { cartData } = useContext(UserContext);
  const [sumOfQuantity, setSumOfQuantity] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const temp = cartData.reduce((acc, item) => acc + item.quantity, 0);
    setSumOfQuantity(temp);
  }, [cartData]);

  return (
    <div className="bg-alpha w-full sticky top-0 ">
      <div className="flex justify-between w-11/12 mx-auto py-2 items-center">
        <h1 className="font-semibold">TeeRex Store</h1>
        <div className="flex gap-4 items-center">
          <h1
            className="font-semibold hover:underline cursor-pointer "
            onClick={() => navigate("./")}
          >
            Products
          </h1>
          <div
            className="relative flex bg-[#d3d3d3] p-2 px-3  rounded-sm shadow-md cursor-pointer "
            onClick={() => navigate("./cart")}
          >
            <ShoppingCartOutlinedIcon className=" scale-[1.4]" />
            <span
              className={`text-sm absolute -top-1 right-1 font-semibold ${
                sumOfQuantity == 0 && "hidden"
              }`}
            >
              {sumOfQuantity}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
