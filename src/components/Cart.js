import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/carrtSlice";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart); 
  const dispatch = useDispatch();

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(
      cartProducts.map((item) => ({
        ...item,
        quantity: item.quantity || 1, 
      }))
    );
  }, [cartProducts]);

  const handleIncrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    dispatch(remove(id)); 
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id)); 
  };

  return (
    <div className="w-3/4 mx-auto">
      {cartProducts.length > 0 ? (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex rounded border shadow-lg px-8 py-4 justify-around items-center gap-4 w-full"
          >
            <img src={item.image} alt={item.title} className="w-80 h-80" />
            <div>
              <p className="text-2xl font-bold">{item.title}</p>
              <p className="text-2xl font-bold">
                Price: ${item.price * item.quantity}
              </p>
              <p>
                Rating: <span className="font-bold">{item.rating.rate}</span> ({item.rating.count} reviews)
              </p>
              <p>{item.description}</p>

              <div className="flex items-center mt-4 gap-8">
                <button
                  type="button"
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-700 text-white px-2 py-1 rounded"
                >
                  Remove
                </button>

                <div className="flex gap-2 items-center my-2 px-3 py-1 border rounded bg-gray-200 shadow-lg">
                  <button
                    type="button"
                    onClick={() => handleDecrement(item.id)}
                    className="text-gray-700"
                  >
                    <FiMinus size={20} />
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => handleIncrement(item.id)}
                    className="text-gray-700"
                  >
                    <IoMdAdd size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1 className="text-red-600 text-center text-3xl font-bold">
          Your Cart is Empty....
        </h1>
      )}
    </div>
  );
};

export default Cart;
