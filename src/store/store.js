import { configureStore } from "@reduxjs/toolkit";
import carrtSlice from './carrtSlice'
import productSlice from './productSlice'
const store = configureStore({
    reducer: {
        cart : carrtSlice,
        products : productSlice
    }
})

export default store;