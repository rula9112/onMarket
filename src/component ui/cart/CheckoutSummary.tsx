'use client';

import { Button } from '../ui/Button';
import { useAppSelector } from '@/src/lib/store/hooks';

export function CheckoutSummary() {
  const { cartItems , totalItems , totalPrice } = useAppSelector((state) => state.cart); 

  return (
    <div
      className="
        bg-white
        rounded-3xl
        p-6
        shadow-sm
        border border-zinc-100
        h-fit
        sticky top-6
      "
    >
      <h2
        className="
          text-xl
          font-bold
          text-zinc-900
        "
      >
        ملخص الطلب
      </h2>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-zinc-500">
            الكمية 
          </span>

          <span className="font-semibold">
            {totalItems}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-zinc-500">
            المجموع الفرعي
          </span>

          <span className="font-semibold">
            ${totalPrice}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-zinc-500">
            الشحن
          </span>

          <span className="font-semibold">
            {totalPrice > 0 ? '$ 10 ' : '0'}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-zinc-500">
            الخصم
          </span>

          <span className="font-semibold text-green-600">
           {totalPrice > 0 ? '% 10' : '0'}
          </span>
        </div>

        <div className="border-t pt-4 flex items-center justify-between">
          <span className="text-lg font-bold">
            الإجمالي
          </span>

          <span className="text-2xl font-bold">
            ${totalPrice > 0 ?( totalPrice - (totalPrice/1.95)).toFixed(2) + 10 : '0'}
            
          </span>
        </div>
      </div>

      {/* Coupon */}
      <div className="my-6">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="كود الخصم"
            className="
              flex-1
              h-12
              rounded-2xl
              border border-zinc-200
              px-4
              outline-none
              focus:ring-2
              focus:ring-black
            "
          />

         <Button variant='secondary'>
          تطبيق
          </Button>
        </div>
      </div>
      {
        totalItems > 0 ? (<Button variant='primary'>إتمام الشراء</Button>):
        (<Button variant='secondary' disabled>السلة فارغة</Button>)}
    </div>

  );
}