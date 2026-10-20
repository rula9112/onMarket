'use client'
import { useAppSelector } from "@/src/lib/store/hooks";
import ProductComponent from "../product/ProductCard"
import EmptyWishlist from "../wishlist/EmptyWishList";

export default function WishlistProfile(){
  const { wishList } = useAppSelector((state) => state.wishList);
  
    return(
        <div className="grid min-w-0 grid-cols-1 gap-4 rounded-3xl border border-olive-100 bg-white p-4 shadow-sm sm:grid-cols-2 sm:gap-5 sm:p-6 lg:grid-cols-3 lg:gap-6">
           {wishList.length > 0 ? (wishList.map((item , index) => ( <ProductComponent item={item} key={index} /> ))):(
            <div className="col-span-full">
               <EmptyWishlist />
            </div>
              )}
</div>
    )
}
