import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {remove} from '../store/carrtSlice'

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id)=>{
    dispatch(remove(id));
  }
  return (
    <div className="w-3/4 mx-auto ">
      {
        cartProducts.length > 0 
        ?
        cartProducts.map((item) => (
          <div
            key={item.id}
            className="flex rounded border shadow-lg px-8 py-4 justify-around items-center gap-4 w-full"
          >
            <img src={item.image} alt={item.title} className="w-80 h-80" />
            <div className="">
              <p className="text-2xl font-bold">{item.title}</p>
              <p className="text-2xl font-bold">Price: ₹{item.price}</p>
              <p>{item.description}</p>
              <button type="button" onClick={()=>handleRemove(item.id)} className="mt-4 bg-red-700 text-white px-2 py-1 rounded ">Remove</button>
            </div>
            
          </div>
        ))

        :

        <>
          <h1 className="text-red-600 text-center text-3xl font-bold ">Your Cart is Empty....</h1>
        </>
      }
    </div>
  );
};

export default Cart;
