import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import CartBox from "./CartBox";

const Cart = () => {
  const [sum,setSum] = useState()
  const { cartData, Data } = useContext(UserContext);
  useEffect(()=>{
    const temp=cartData.reduce((acc,item)=>acc+item.quantity*item.price,0);
    setSum(temp)
  },[cartData])

  return (
    <div className="p-10">
      <div className="text-3xl">Shopping cart</div>
      {cartData.length === 0 ? (
        <p className="text-lg m-5 italic">No item found</p>
      ) : (
        <div className="flex-row justify-center divide-y-2 items-center mt-5 ">
          {cartData.map((item, i) => {
            return <CartBox info={item} key={i} />;
          })}
        </div>
      )}
      <div className={`flex border-t-2 p-4 border-gray-600 justify-center w-[420px] ${cartData.length===0 && 'hidden'}`}><span className="font-bold">Total amount&ensp;&ensp;</span>Rs.{sum}</div>
    </div>
  );
};

export default Cart;
