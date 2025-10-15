"use client";

import { createSlice, current } from "@reduxjs/toolkit";

const initialState= {
  cartItems:[],
  totalItems:0,
  totalPrice:0
}
const cartSlice = createSlice({
    name:'cart',
    initialState,
     reducers:{
      addToCart:(state , action)=>{
       console.log(action.payload);
        const existingItem =current(state.cartItems).findIndex(findeID=> findeID.id == action.payload.item.id);
       console.log(existingItem);

        if(existingItem >= 0){
          state.cartItems[existingItem].cartQuantity += action.payload.quantity
          state.totalItems += action.payload.quantity;
          state.totalPrice += state.cartItems[existingItem].price;
        }else{
          const newItem = {...action.payload.item, cartQuantity:action.payload.quantity}
          state.cartItems.push(newItem)
          state.totalItems += 1;
          state.totalPrice += newItem.price;
          state.totalPrice = Number(state.totalPrice.toFixed(2))

        }

      },
      changeQuantity:(state, action)=>{
        const existingItem =current(state.cartItems).findIndex(findeID=> findeID.id == action.payload.id);
        console.log( current(state.cartItems));
        if(action.payload.newQuantity < 0){
         if(state.cartItems[existingItem].cartQuantity > 1) {
          state.cartItems[existingItem].cartQuantity += action.payload.newQuantity
          state.totalItems += action.payload.newQuantity;
          console.log(state.cartItems[existingItem].price)
          state.totalPrice -= state.cartItems[existingItem].price;
          state.totalPrice = Number(state.totalPrice.toFixed(2))

          console.log(state.totalPrice)
         }
        }
        else{
          state.cartItems[existingItem].cartQuantity += action.payload.newQuantity;
          state.totalItems += action.payload.newQuantity;
          state.totalPrice += state.cartItems[existingItem].price * action.payload.newQuantity;
          state.totalPrice = Number(state.totalPrice.toFixed(2))
        }       
      },
      deleteItem:(state, action)=>{
       const delItems = current(state.cartItems).filter(del => del.id != action.payload);
       const minusQuantity = current(state.cartItems).find(minesQuantity => minesQuantity.id == action.payload);
       state.totalItems -= minusQuantity.cartQuantity;
       state.totalPrice -= minusQuantity.cartQuantity * minusQuantity.price
       state.cartItems = delItems;
      }
     }
});
export const {addToCart , changeQuantity , deleteItem} = cartSlice.actions;

export default cartSlice.reducer

