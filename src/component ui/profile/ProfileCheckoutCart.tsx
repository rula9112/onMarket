'use client'
import { useAppSelector } from "@/src/lib/store/hooks";
import { Button } from "../ui/Button";

export default function ProfileCheckoutCart(){
      const { totalPrice,totalItems } = useAppSelector((state) => state.cart); 
    
    return(
         <div className="bg-white border border-zinc-100 rounded-3xl p-6 shadow ">
    <div className="flex justify-between py-4 border-b border-zinc-200">
      <span>Total</span>
      <span className="font-bold">${totalPrice}</span>
    </div>
    <div className="flex justify-between py-4 border-b border-zinc-200">
      <span>Quantity</span>
      <span className="font-bold">${totalItems}</span>
    </div>
    <Button variant={'outlinePrimary'} className='w-full mt-5'>
      Checkout
    </Button>
  </div>
    )
}