import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/src/features/auth/authSlice";
import cartReducer from "@/src/features/cart/cartSlice";
import  wishListReducer  from "@/src/features/wishlist/wishlistSlice";

export const store = configureStore({
  reducer: {
     auth: authReducer,
    cart: cartReducer,
    wishList: wishListReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
