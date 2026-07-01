'use client';

import { useCallback } from 'react'; 
import Image from 'next/image';
import NoImageAvailable from '@/public/img/noImageAvailable.jpeg'
import type { CartItemProps } from '@/src/types/cart';
import { changeQuantity, deleteItem } from '@/src/features/cart/cartSlice';
import { useAppDispatch } from '@/src/lib/store/hooks';

export default function CartItem({ currentItem }: CartItemProps) {
    const dispatch = useAppDispatch();
  
  const handleChangeQuantity = useCallback((newQuantity: number) => {
    dispatch(changeQuantity({ newQuantity, id: currentItem.id }));
  }, [dispatch, currentItem.id]);

  const handleDeleteItem = useCallback(() => {
    dispatch(deleteItem({id:currentItem.id}));
  }, [dispatch, currentItem.id]);

  const totalPrice = (Number(currentItem.price) * Number(currentItem.cartQuantity)).toFixed(2);

  return (
    <div className="mt-1 fisrt:mt-0 py-1 text-center border-t border-gray-200 first:border-t-0  text-gray-700 grid grid-cols-4 ">
      {/* عمود الصورة والعنوان */}
      <div className="p-2 text-left align-middle flex items-center">
     
          <Image 
            className="w-24 object-cover" 
            src={NoImageAvailable} 
            alt="No image available"
            width={96}
            height={96}
          />
      
        <div className="mx-2 flex flex-col justify-center">
          <span>{currentItem.title}</span>
          <span className="text-sm text-gray-500">${currentItem.price}</span>
        </div>
      </div>

      {/* عمود الكمية */}
      <div className='flex items-center justify-center'>
        <div className="p-2 bg-orange-50 rounded-full border border-orange-200 justify-around items-center flex">
          <svg
            width="14"
            height="15"
            className="cursor-pointer"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => handleChangeQuantity(-1)}
          >
            <path
              d="M2.33398 7.5H11.6673"
              stroke="#666666"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          
          <span className="w-10 text-center text-black text-base font-normal leading-normal">
            {currentItem.cartQuantity}
          </span>
          
          <svg
            className="cursor-pointer"
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => handleChangeQuantity(1)}
          >
            <path
              d="M2.33398 7.49998H11.6673M7.00065 2.83331V12.1666V2.83331Z"
              stroke="rgb(255, 90, 35)"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* السعر الإجمالي */}
      <div className="p-2 flex items-center justify-center">${totalPrice}</div>

      {/* زر الحذف */}
      <div className="p-2 flex items-center justify-end">
        <svg
          width="24"
          height="25"
          className="cursor-pointer mx-auto"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleDeleteItem}
        >
          <path
            d="M12 23.5C18.0748 23.5 23 18.5748 23 12.5C23 6.42525 18.0748 1.5 12 1.5C5.92525 1.5 1 6.42525 1 12.5C1 18.5748 5.92525 23.5 12 23.5Z"
            stroke="#CCCCCC"
            strokeMiterlimit={10}
          />
          <path
            d="M16 8.5L8 16.5"
            stroke="#666666"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 16.5L8 8.5"
            stroke="#666666"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}