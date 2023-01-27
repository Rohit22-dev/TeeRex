import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";

const CartBox = (props) => {
  const { cartData, setCartData, Data } = useContext(UserContext);

  const onDeleteClicked = () => {
    const tempCartData = cartData.filter((item) => item.id !== props.info.id);
    setCartData(tempCartData);
  };

  const optionSelected = (event) => {
    const selectedQuantity = parseInt(event.target.value);
    const updatedCartData = cartData.map((item) => {
      if (item.id === props.info.id) {
        item.quantity = selectedQuantity;
      }
      return item;
    });
    cartItem.quantity = selectedQuantity;
    setCartData(updatedCartData);
  };

  const [optionValue, setOptionValue] = useState();
  useEffect(() => {
    const itemOfOption = Data.find((item) => item.id === props.info.id);
    setOptionValue(itemOfOption.quantity);
  }, []);

  const cartItem = props.info;

  return (
    <div className="flex justify-center items-center w-fit gap-5 p-4 ">
      <img
        src={cartItem.imageURL}
        className="rounded-md object-cover w-20 h-20 border border-gray-300"
      />
      <div className="flex flex-col tracking-tighter gap-1 w-28">
        <span className="font-bold text-lg">{cartItem.name}</span>
        <span className="font-semibold text-sm">Rs {cartItem.price}</span>
      </div>
      <select
        className="bg-alpha rounded-md p-1 px-2 focus:outline-none focus:shadow-none cursor-pointer text-sm border-gray-300 border-2"
        value={cartItem.quantity}
        onChange={(event) => optionSelected(event)}
      >
        {Array(optionValue)
          .fill()
          .map((_, index) => (
            <option className="text-black" value={index + 1} key={index}>
              Qty: {index + 1}
            </option>
          ))}
      </select>
      <button
        className="rounded-md border-black border p-1 px-2 hover:bg-red-500 hover:text-white cursor-pointer text-sm"
        onClick={() => onDeleteClicked()}
      >
        Delete
      </button>
    </div>
  );
};

export default CartBox;
