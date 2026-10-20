'use client';

import { Button } from '../ui/Button';
import { useAppSelector } from '@/src/lib/store/hooks';

export function CheckoutSummary() {
  const { cartItems , totalItems , totalPrice } = useAppSelector((state) => state.cart); 

  return (
    <div
      className="
        h-fit rounded-3xl border border-olive-100 bg-white p-5 shadow-sm
        sm:p-6 lg:sticky lg:top-6
      "
    >
      <div className="border-b border-olive-100 pb-5">
        <p className="mb-1 text-xs font-semibold tracking-wide text-orange-700">
          ONMARKET
        </p>
        <h2 className="text-xl font-bold text-olive-950 sm:text-2xl">
          ملخص الطلب
        </h2>
        <div className="mt-3 h-1 w-12 rounded-full bg-orange-500" />
      </div>

      <div className="mt-5 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-olive-600 sm:text-base">
            الكمية 
          </span>

          <span className="font-semibold text-olive-950">
            {totalItems}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-olive-600 sm:text-base">
            المجموع الفرعي
          </span>

          <span className="font-semibold text-olive-950">
            ${totalPrice}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-olive-600 sm:text-base">
            الشحن
          </span>

          <span className="font-semibold text-olive-950">
            {totalPrice > 0 ? '$ 10 ' : '0'}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-olive-600 sm:text-base">
            الخصم
          </span>

          <span className="font-semibold text-olive-700">
           {totalPrice > 0 ? '% 10' : '0'}
          </span>
        </div>

        <div className="flex items-center justify-between gap-3 rounded-2xl border border-orange-100 bg-orange-50/70 p-4">
          <span className="text-base font-bold text-olive-950 sm:text-lg">
            الإجمالي
          </span>

          <span className="text-xl font-bold text-orange-700 sm:text-2xl">
            ${totalPrice > 0 ?( totalPrice - (totalPrice/1.95)).toFixed(2) + 10 : '0'}
            
          </span>
        </div>
      </div>

      {/* Coupon */}
      <div className="my-5">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="كود الخصم"
            className="
              h-12 min-w-0 flex-1 rounded-2xl border border-olive-200
              bg-olive-50/50 px-4 text-right text-sm text-olive-950 outline-none
              placeholder:text-olive-400 focus:border-orange-300 focus:ring-2
              focus:ring-orange-200
            "
          />

         <Button
          variant='outlinePrimary'
          className="!shrink-0 !rounded-xl !px-4"
         >
          تطبيق
          </Button>
        </div>
      </div>
      {
        totalItems > 0 ? (
          <Button variant='primary' className="!w-full !rounded-2xl !font-semibold shadow-sm">
            إتمام الشراء
          </Button>
        ) : (
          <Button
            variant='secondary'
            disabled
            className="!w-full !cursor-not-allowed !rounded-2xl !border !border-olive-100 !bg-olive-50 !font-semibold !text-olive-400 shadow-none hover:!bg-olive-50"
          >
            السلة فارغة
          </Button>
        )}
    </div>

  );
}