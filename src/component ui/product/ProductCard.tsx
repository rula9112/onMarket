'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { addToCart } from '@/src/features/cart/cartSlice';
import noImageAvailable from '@/public/img/noImageAvailable.jpeg'
import { ProductItem, ProductProps } from '@/src/types/Product';
import { useAppDispatch, useAppSelector } from '@/src/lib/store/hooks';
import { addToWishList, removeFromWishList } from '@/src/features/wishlist/wishlistSlice';
import { Button } from '../ui/Button';



export default function ProductCard({ item }: ProductProps) {
  const { wishList } = useAppSelector((state) => state.wishList);
  const [existing, setExisting] = useState<number>(-1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const existingIndex = wishList.findIndex(
      (findID: ProductItem) => findID.id === item.id
    );
    setExisting(existingIndex);
  }, [wishList, item.id]);

  const handleAddToCart = () => {
    const quantity = 1;
    dispatch(addToCart({ item , quantity }));
  };

  const handleAddToWishList = () => {
    existing > -1
      ? dispatch(removeFromWishList(item.id))
      : dispatch(addToWishList(item));
  };

  const imageSrc =
  item.images?.[0] ??
  item.thumbnail ??
  "/images/product-placeholder.png";


  /***************************old cards */
//     <div
//       className="w-full h-80 rounded-xl bg-white mx-auto border border-gray-200 shadow-lg overflow-hidden hover:shadow-xl relative"
//     >
//       <div
//         onClick={handleAddToWishList}
//         className={`cursor-pointer top-5 left-3 w-1/4 h-auto absolute z-50 ${
//           existing >= 0 ? 'text-red-800' : 'text-gray-900'
//         }`}
//       >
// {/*<Heart size={28} fill={existing >= 0 ? '#e02424' : '#fff'} />*/}
//       </div>

//       <div className="z-40 w-full h-full absolute">
//         <div className="h-44 flex justify-center">
//           {item.images ? (
//             <img
//               className="h-full object-cover"
//               src={item.images}
//               alt="Product Image"
//             />
//           ) : (
//             <Image
//               className="w-96 object-cover"
//               src={NoImageAvailable}
//               alt="No image available"
//               width={384} // عدّل حسب حجم الصورة
//               height={384}
//             />
//           )}
//         </div>

//         <div className="p-3 md:p-5">
//           <h3 className="text-md font-semibold text-gray-800">{item.title}</h3>
//           <div className="flex items-center justify-between mt-3">
//             <span className="text-lg font-bold text-orange-500">{item.price}</span>
//           </div>

//           <div className="flex items-center justify-between mt-2">
//             <button
//               className="btn-primary-500 btn text-xs font-semibold"
//               onClick={() => handleAddToCart(item)}
//             >
//               Add to Cart
//             </button>

//             <Link
//               href={`/product/${item.id}`}
//               className="btn btn-primary-outline text-sm font-semibold inline-flex"
//             >
//               Details
//               <svg
//                 className="rtl:rotate-180 hidden w-3.5 h-3.5 ms-2 md:inline-flex"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 14 10"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M1 5h12m0 0L9 1m4 4L9 9"
//                 />
//               </svg>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>

  return (
 <div
      className="
        group
        bg-white
        rounded-3xl
        overflow-hidden
        shadow-sm
        border border-zinc-100
        hover:shadow-xl
        transition-all duration-300
      "
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={imageSrc}
          width={40}
          height={60}
          alt={item.title}
          className="
            w-full
            h-64
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {/* Remove Favorite */}
      <button className={`${existing >= 0 ? 'bg-red-200' : 'bg-gray-50 border border-zinc-300'} absolute
      cursor-pointer
      transition-all
    top-3 right-3
    w-11 h-11
    rounded-full
    backdrop-blur
    flex items-center justify-center
    hover:scale-110`} 
  onClick={handleAddToWishList}
>

               {existing >= 0 ? "❤️" : "🤍"}
        </button>
         

        {/* Discount Badge */}
        <div
          className="
            absolute
            top-3 left-3
            px-3 py-1
            rounded-full
            bg-orange-700
            text-white
            text-xs
            font-medium
          "
        >
          -20%
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3
          className="
            text-base
            font-semibold
            text-zinc-800
            line-clamp-1
          "
        >
          {item.title}
        </h3>

        <div className="flex items-center gap-2 mt-3">
          <span
            className="
              text-lg
              font-bold
              text-black
            "
          >
            ${item.price}
          </span>

          {item.price && (
            <span
              className="
                text-sm
                text-zinc-400
                line-through
              "
            >
              ${item.price}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-4 space-y-2 flex justify-between">
          <Button  variant="primary" size='small' onClick={handleAddToCart}>
            Add to Cart
          </Button>
          <Link href={`/product/${item.id}`}>
           <Button  variant="outlinePrimary"  size='small'>
            Details
          </Button>
          </Link>
         
        </div>
      </div>
    </div>
  );
}