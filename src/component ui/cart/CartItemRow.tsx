'use client';

import { CartItemType  } from '@/src/types/cart'; 
import CartItem from './CartItem';
import EmptyCart from './EmprtyCart';
import { useAppSelector } from '@/src/lib/store/hooks';

export function CartItemRow() {

  const { cartItems } = useAppSelector((state) => state.cart); 
  return (
       <div className="lg:col-span-2 space-y-5 p-6 bg-white rounded-3xl border border-zinc-100 shadow-sm">
        <div className={`${cartItems.length === 1 ? 'border-b border-gray-200 ': ''} `}>
        {cartItems.length > 0 ? (
        cartItems.map((cartItem: CartItemType , index) => (
          <CartItem 
            key={cartItem.id} 
            currentItem={cartItem} 
           
          />
        ))
      ) : (
 
  <EmptyCart />
   
      )}
        </div>

          </div>
  );
}