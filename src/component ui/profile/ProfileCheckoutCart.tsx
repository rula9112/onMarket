'use client'
import { useAppSelector } from "@/src/lib/store/hooks";
import { Button } from "../ui/Button";

export default function ProfileCheckoutCart(){
      const { totalPrice,totalItems } = useAppSelector((state) => state.cart); 
    
    return(
         <div className="rounded-3xl border border-olive-100 bg-white p-5 shadow-sm sm:p-6">
    <div className="flex justify-between gap-3 border-b border-olive-100 py-4 text-sm text-olive-600 sm:text-base">
      <span>الإجمالي</span>
      <span className="font-bold text-olive-950">${totalPrice}</span>
    </div>
    <div className="flex justify-between gap-3 border-b border-olive-100 py-4 text-sm text-olive-600 sm:text-base">
      <span>عدد المنتجات</span>
      <span className="font-bold text-olive-950">{totalItems}</span>
    </div>
    <Button variant={'outlinePrimary'} className='!mt-5 !w-full !rounded-2xl'>
      إتمام الشراء
    </Button>
  </div>
    )
}