import React, { useEffect, useState } from "react";
import {useDispatch, useSelector}  from 'react-redux'
import { add } from "../store/carrtSlice";
import {getProducts} from '../store/productSlice'
import {toast} from 'react-toastify'
import ReactPaginate from "react-paginate";


const Product = () => {
  const data = useSelector(state=> state.products.products.data);
  const cartData = useSelector(state=> state.cart);
  const dispatch = useDispatch();
  // const [isDisable, setIsDisable] = useState(false);
  const [currentPage, setCurrentPage] = useState(0); 
  const itemsPerPage = 5;
  
  useEffect(() => {
    dispatch(getProducts());
  },[dispatch]);


  const addCart = (item)=>{
        dispatch(add(item));
        toast.success("Product add in cart.")
  }

  const offset = currentPage * itemsPerPage;
  const currentPageData = data?.slice(offset, offset + itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-5 ml-20 my-12">
        {currentPageData?.map((item) => (
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

      <div className="my-8">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={Math.ceil(data?.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageChange}
          containerClassName={"flex justify-center space-x-2"}
          pageClassName={" border rounded"}
          activeClassName={"bg-blue-500 text-white"}
          previousClassName={"px-3 py-1 border rounded cursor-pointer"}
          nextClassName={"px-3 py-1 border rounded cursor-pointer"}
        />
      </div>
    </div>
  );
};

export default Product;
