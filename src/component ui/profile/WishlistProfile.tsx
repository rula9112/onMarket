'use client'
import { useAppSelector } from "@/src/lib/store/hooks";
import ProductComponent from "../product/ProductCard"
import EmptyWishlist from "../wishlist/EmptyWishList";

export default function WishlistProfile(){
  const { wishList } = useAppSelector((state) => state.wishList);
  
    return(
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 border border-zinc-200 shadow bg-white rounded-3xl">
           {wishList.length > 0 ? (wishList.map((item , index) => ( <ProductComponent item={item} key={index} /> ))):(
            <div className="col-span-3">
               <EmptyWishlist />
            </div>
              )}
</div>
    )
}

