"use client"

import { configureStore } from "@reduxjs/toolkit"
import { productApi } from "./productAPI";
import cart from "./cartSlice";



export default configureStore({
    reducer:{
    [productApi.reducerPath]:productApi.reducer,
    cart
    },
middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),
});