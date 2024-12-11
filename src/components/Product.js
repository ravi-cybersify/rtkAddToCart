import React, { useEffect, useState } from "react";
import {useDispatch, useSelector}  from 'react-redux'
import { add } from "../store/carrtSlice";
import {getProducts} from '../store/productSlice'
import {toast} from 'react-toastify'


const Product = () => {
  const data = useSelector(state=> state.products.products.data);
  const cartData = useSelector(state=> state.cart);
  const dispatch = useDispatch();
  const [isDisable, setIsDisable] = useState(false);

  
  useEffect(() => {
    dispatch(getProducts());
  },[]);


  const addCart = (item)=>{
        dispatch(add(item));
        toast.success("Product add in cart.")
  }


  return (
    <div>
      <div className="grid grid-cols-3 gap-5 ml-20 my-12">
        {data?.map((item) => (
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div key={item.id} className="">
                <img
                  className="w-full h-72"
                  src={item.image}
                  alt="Sunset in the mountains"
                />
                <div className="px-3 py-4">
                  <div className="font-bold text-xl mb-2">{item.title}</div>
                  <p className="text-gray-700 text-base font-semibold">
                    Price: $ {item.price}
                  </p>
                  <p>Rating: {item.rating.rate} ({item.rating.count} reviews)</p>
                  <p>{item.category}</p>
                </div>
              </div>
        
              <button
                type="button"
                 disabled={cartData.find(data=> data.id === item.id )}
                className={`text-white mx-auto mb-5 px-2 py-2 font-semibold w-full ${cartData.find(data=> data.id === item.id ) ? 'bg-blue-200' : 'bg-blue-600'} `}
                onClick={()=>addCart(item)}
              >
                Add To Cart
              </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
