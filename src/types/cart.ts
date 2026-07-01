import { ProductItem } from "./Product";

// types/CartTypes.ts
export interface CartState {
  totalItems: number;
  totalPrice: number;
  cartItems: CartItemType[];
  // أضف المزيد إذا لزم الأمر
}

export interface CartItemType extends ProductItem {  // ← وراثة كاملة
  cartQuantity: number;
}

export interface ChangeQuantityPayload {
  id: number ;
  newQuantity: number;
}
// Props interface
export interface CartItemProps {
  currentItem: CartItemType;
}