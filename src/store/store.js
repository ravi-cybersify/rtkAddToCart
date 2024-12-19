import { configureStore } from "@reduxjs/toolkit";
import carrtSlice from './carrtSlice'
import productSlice from './productSlice'
const store = configureStore({
    reducer: {
        cart : carrtSlice,
        products : productSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: ['products/fetchProduct'], // Ignore specific actions
            ignoredPaths: ['payload.headers'], // Ignore specific paths in the payload
          },
        })
})

export default store;