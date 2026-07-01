'use client'
import { WishListItemRowProps } from "@/src/types/wishlist";
import noImageAvailable from '@/public/img/noImageAvailable.jpeg'
import Image from "next/image";
import { removeFromWishList } from "@/src/features/wishlist/wishlistSlice";
import { useAppDispatch } from "@/src/lib/store/hooks";
import { Button } from "../ui/Button";
import Link from "next/link";
import { addToCart } from "@/src/features/cart/cartSlice";
import { ProductItem } from "@/src/types/Product";

export default function WishlistCard({item}:WishListItemRowProps) {
    const dispatch = useAppDispatch();

  const handleDeleteItem = ()=>{
       dispatch(removeFromWishList(item.id));
     }

     const handleAddToCart = () => {
         const quantity = 1;
         dispatch(addToCart({ item , quantity }));
       };
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
          src={noImageAvailable}
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
      <Button variant='secondary' className=' absolute
            top-3 right-3
            w-11 h-11
            rounded-full
            backdrop-blur
            flex items-center justify-center
            bg-red-200
            hover:scale-110'
            onClick={handleDeleteItem}
            >
               ❤️
        </Button>
         

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
        <div className="mt-4 space-y-2 space-x-3">
          <Button  variant="primary" onClick={handleAddToCart}>
            إضافة للسلة
          </Button>
          <Link href={`/product/${item.id}`}>
           <Button  variant="outlinePrimary"  >
            عرض المنتج
          </Button>
          </Link>
         
        </div>
      </div>
    </div>
  )
}