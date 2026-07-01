'use client'

import { removeFromWishList } from "@/src/features/wishlist/wishlistSlice";
import { useAppDispatch, useAppSelector } from "@/src/lib/store/hooks"
import { WishListItemRowProps } from "@/src/types/wishlist"
import Image from "next/image"
import NoImageAvailable from '@/public/img/noImageAvailable.jpeg'


export default function WishListItemRow({item}:WishListItemRowProps){
const dispatch = useAppDispatch();
  
  const handleDeleteItem = (id:number)=>{
     dispatch(removeFromWishList(id));
   }

    return(
          <tr className="text-center text-gray-700" >
           <td className="p-2 text-left align-middle flex">
                          <Image className="w-24 object-cover" src={NoImageAvailable} alt='no Imag available'  />
                           
                  
                    <div className="mx-2 flex flex-col justify-center">
                    <span>{item.title}</span>
                    <span className="text-sm  text-gray-500">
                    ${Number(item.price)-Number(item.price)/1.2}
                    </span>
                    </div>
                  </td>
        <td className="px-2 py-2">{item.brand}</td>
        <td className="px-2 py-2">${item.price}</td>
        <td className="px-2 py-2">{item.rating}</td>
        <td className="px-2 py-2">
          <svg
            width="24"
            className="cursor-pointer"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={()=>{handleDeleteItem(item.id)}}
          >
            <path
              d="M12 23.5C18.0748 23.5 23 18.5748 23 12.5C23 6.42525 18.0748 1.5 12 1.5C5.92525 1.5 1 6.42525 1 12.5C1 18.5748 5.92525 23.5 12 23.5Z"
              stroke="#CCCCCC"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M16 8.5L8 16.5"
              stroke="#666666"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M16 16.5L8 8.5"
              stroke="#666666"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </td>
      </tr>
    )
}