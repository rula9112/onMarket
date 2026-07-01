'use client'

import { ProductItem } from "@/src/types/Product"
import { WishListType } from "@/src/types/wishlist"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState : WishListType  ={
    wishList :[]
}

const wishListSlice = createSlice({
    name:'wishList',
    initialState,
    reducers:{
             addToWishList:(state,action : PayloadAction<ProductItem>)=>{
        state.wishList.push(action.payload)
    },
      removeFromWishList:(state,action:PayloadAction<number | string>)=>{
        const delItems = state.wishList.filter(del => del.id != action.payload);
        state.wishList = delItems;
      },
    }
})
export const {addToWishList , removeFromWishList} = wishListSlice.actions;

export default wishListSlice.reducer