'use client'
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CartItemType, CartState } from "@/src/types/cart"
import { ProductItem } from "@/src/types/Product"

const initialState : CartState = {
  cartItems:[],
  totalItems:0,
  totalPrice:0
}
const cartSlice = createSlice({
    name:"cart",
    initialState,
       reducers:{
             addToCart: (state, action: PayloadAction<{ item: ProductItem; quantity: number }>) => {
                const { item, quantity } = action.payload;
                 const existingItemIndex = state.cartItems.findIndex(
                    cartItem => cartItem.id === item.id
                );
                
      if (existingItemIndex >= 0) {
        state.cartItems[existingItemIndex].cartQuantity += quantity;
        state.totalItems += quantity;
        state.totalPrice += Number(item.price) * quantity;
      } else {
        const newItem: CartItemType = { 
          ...item, 
          cartQuantity: quantity 
        };
        state.cartItems.push(newItem);
        state.totalItems += quantity;
        state.totalPrice += quantity * Number(item.price);
      }
      localStorage.setItem('cartList', JSON.stringify(state.cartItems));
      state.totalPrice = Number(state.totalPrice.toFixed(2));
    },

    /*********delete item*********** */
         deleteItem: (state, action:PayloadAction<{id:number}>) => {
  const itemId = action.payload.id;
  
  // البحث عن العنصر المراد حذفه
  const itemToDelete = state.cartItems.find(item => item.id === Number(itemId));
  
  // التحقق من وجود العنصر
  if (!itemToDelete) return;
  
  // تحديث الإجماليات
  state.totalItems -= itemToDelete.cartQuantity;
  state.totalPrice -= itemToDelete.cartQuantity * Number(itemToDelete.price);
  
  // حذف العنصر باستخدام filter (آمن مع Immer)
  state.cartItems = state.cartItems.filter(item => item.id !== Number(itemId));
  
  // حفظ في localStorage
  localStorage.setItem('cartList', JSON.stringify(state.cartItems));
  
  // تنسيق السعر
  state.totalPrice = Number(state.totalPrice.toFixed(2));
},
/*************change quantity */
changeQuantity: (state, action: PayloadAction<{ id: number; newQuantity: number }>) => {
  const { id, newQuantity } = action.payload;
  const itemIndex = state.cartItems.findIndex(item => item.id === id);
  
  if (itemIndex === -1) return;  // العنصر غير موجود

  const item = state.cartItems[itemIndex];
  const newQty = item.cartQuantity + newQuantity;  // ✅ احسب الكمية الجديدة مباشرة

  // ✅ إذا كانت الكمية الجديدة ≤ 0، احذف العنصر
  if (newQty <= 0) {
    state.totalItems -= item.cartQuantity;
    state.totalPrice -= item.cartQuantity * Number(item.price);
    
    state.cartItems.splice(itemIndex, 1);  // احذف العنصر
    
    state.totalPrice = parseFloat(state.totalPrice.toFixed(2));
    return;
  }

  // ✅ تحديث الكمية (لا تقل عن 1)
  item.cartQuantity = Math.max(1, newQty);
  
  // ✅ تحديث الإجماليات
  state.totalItems += newQuantity;
  state.totalPrice += Number(item.price) * newQuantity;
  
  // ✅ تنسيق السعر (2 كسر عشري)
  state.totalPrice = parseFloat(state.totalPrice.toFixed(2));
}

}
})
export const {addToCart,changeQuantity , deleteItem} = cartSlice.actions;

export default cartSlice.reducer
