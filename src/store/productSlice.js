import {createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


const initialState = {
    products: []
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        fetchProduct(state,action){
            state.products = action.payload;
        }
    }
})

export const {fetchProduct} = productSlice.actions;
export default productSlice.reducer;

export function getProducts(){
    return async function getProductsThunk(dispatch,getState){
        const response = await axios.get("https://fakestoreapi.com/products");
        dispatch(fetchProduct(response));
    }
}

