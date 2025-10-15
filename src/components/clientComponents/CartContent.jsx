'use client';

import CartItem from "@/components/clientComponents/CartItem";
import { useSelector } from "react-redux";

export function TBody() {
  const { cartItems } = useSelector(state => state.cart);

  return (
    <tbody>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} currentItem={cartItem} />
      ))}
    </tbody>
  );
}

export function Total() {
  const { totalItems, totalPrice } = useSelector(state => state.cart);

  return (
    <div className="w-2/5 bg-white rounded-lg p-6">
      <h2 className="text-[#191919] mb-2 text-xl font-medium leading-[30px]">
        Cart Total
      </h2>
      <div className="w-full py-3 justify-between items-center flex">
        <span className="text-[#4c4c4c] text-base font-normal leading-normal">
          Total:
        </span>
        <span className="text-[#191919] text-base font-semibold leading-tight">
          ${totalPrice}
        </span>
      </div>
      <div className="w-full py-3 shadow-[0px_1px_0px_0px_rgba(229,229,229,1.00)] justify-between items-center flex">
        <span className="text-[#4c4c4c] text-sm font-normal leading-[21px]">
          Shipping:
        </span>
        <span className="text-[#191919] text-sm font-medium leading-[21px]">
          Free
        </span>
      </div>
      <div className="w-full py-3 shadow-[0px_1px_0px_0px_rgba(229,229,229,1.00)] justify-between items-center flex">
        <span className="text-[#4c4c4c] text-sm font-normal leading-[21px]">
          total Quantity:
        </span>
        <span className="text-[#191919] text-sm font-medium leading-[21px]">
          {totalItems}
        </span>
      </div>
      <button className="mt-5 btn btn-primary-500 gap-4 text-base font-semibold leading-tight">
        Proceed to checkout
      </button>
    </div>
  );
}
