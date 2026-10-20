'use client';

import { CartItemType  } from '@/src/types/cart'; 
import CartItem from './CartItem';
import EmptyCart from './EmprtyCart';
import { useAppSelector } from '@/src/lib/store/hooks';

export function CartItemRow() {

  const { cartItems } = useAppSelector((state) => state.cart); 
  return (
    <section className="min-w-0 space-y-5 rounded-3xl border border-olive-100 bg-white p-4 shadow-sm sm:p-6 lg:col-span-2">
      {cartItems.length > 0 ? (
        <>
          <div className="overflow-x-auto">
            <div className="grid min-w-[620px] grid-cols-4 rounded-2xl bg-olive-50 px-4 py-3 text-sm font-semibold text-olive-700">
              <span>المنتج</span>
              <span className="text-center">الكمية</span>
              <span className="text-center">الإجمالي</span>
              <span className="text-center">إزالة</span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <div className="min-w-[620px] divide-y divide-olive-100">
              {cartItems.map((cartItem: CartItemType) => (
                <CartItem key={cartItem.id} currentItem={cartItem} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </section>
  );
}