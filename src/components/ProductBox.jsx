import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";

const ProductBox = (props) => {
  const { cartData, setCartData } = useContext(UserContext);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCartData([...cartData, { ...props.info, quantity: 1 }]);
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    // setCartData(
    //   cartData.map((item) =>
    //     item.id === props.info.id ? { ...item, quantity: count } : item
    //   )
    // );
    // if (count === 0) {
    //   setCartData(cartData.filter((item) => item.id !== props.info.id));
    // }
    setCartData(
      count > 0 && cartData.find((item) => item.id === props.info.id)
        ? cartData.map((item) =>
            item.id === props.info.id ? { ...item, quantity: count } : item
          )
        : cartData.filter((item) => item.id !== props.info.id)
    );
  }, [count]);

  useEffect(() => {
    const itemInCart = cartData.find((item) => item.id === props.info.id);
    if (itemInCart) {
      setCount(itemInCart.quantity);
    }
  }, [cartData, props.info.id]);

  const addProduct = (task) => {
    task === "add"
      ? count < props.info.quantity && setCount((prevCount) => prevCount + 1)
      : count > 1
      ? setCount((prevCount) => prevCount - 1)
      : count === 1 && setCount((prevCount) => prevCount - 1);
  };
  return (
    <div className="flex-row p-2 rounded-sm shadow-md w-fit divide-y divide-slate-300 ">
      <img src={props.info.imageURL} className="w-60 h-48 object-cover m-2" />
      <div className="flex mt-2 pt-2 px-2 justify-between">
        <h1 className="font-bold pl-5">Rs {props.info.price}</h1>
        {count > 0 ? (
          <div className="text-sm bg-[#383838] p-1 text-white px-2 rounded-sm flex justify-evenly font-semibold gap-5 text-md">
            <span
              className="cursor-pointer"
              onClick={() => addProduct("remove")}
            >
              -
            </span>
            <span>{count}</span>
            <span className="cursor-pointer" onClick={() => addProduct("add")}>
              +
            </span>
          </div>
        ) : (
          <div
            onClick={handleClick}
            className="text-sm bg-[#383838] p-1 text-white px-2 rounded-sm cursor-pointer"
          >
            Add to cart
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductBox;
