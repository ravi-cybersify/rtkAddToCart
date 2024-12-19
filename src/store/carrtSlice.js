import { createSlice } from "@reduxjs/toolkit";

const saveCartItems = JSON.parse(localStorage.getItem('cart'));
const initialState = saveCartItems || [];

const carrtSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action){
            state.push(action.payload);
            localStorage.setItem('cart', JSON.stringify(state)); 
        },
        remove(state,action){
            const updateData = state.filter((item)=>item.id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(updateData)); 
            return updateData;
        }
    }
});

export const {add ,remove} = carrtSlice.actions;
export default carrtSlice.reducer;