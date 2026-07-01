import { CartItemRow} from '@/src/component ui/cart/CartItemRow' 
import {CheckoutSummary } from '@/src/component ui/cart/CheckoutSummary' 

export default function CartPage(){
  return (
       <div className="bg-olive-50 min-h-screen">
      <div
        className="
          max-w-[90rem]
          mx-auto
          px-4 md:px-8
          py-10
        "
      >
        <h1
          className="
            text-3xl md:text-4xl
            font-bold
            text-zinc-900
          "
        >
          سلة التسوق
        </h1>

        <div
          className="
            mt-10
            grid grid-cols-1
            lg:grid-cols-3
            gap-8
          "
        >
          {/* Cart Items */}
          <CartItemRow />
       

          {/* Summary */}
          <CheckoutSummary />
        </div>
      </div>
    </div>
  )
};