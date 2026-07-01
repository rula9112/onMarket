'use client'
import { ProductItem } from "@/src/types/Product";
import WishListItemRow from "./WishListItemRowold";
import { useAppSelector } from "@/src/lib/store/hooks";
import WishlistCard from "./WishlistCard";
import EmptyWishlist from "./EmptyWishList";
import ProductCard from "../product/ProductCard";
/*********old */
            //    <WishListItemRow item={thisItem} key={index} />


export default function WishListTable(){
    const { wishList } = useAppSelector((state) => state.wishList);

    return(
       <div className="my-6 flex justify-center items-center bg-white  shadow-sm rounded-3xl">
            {wishList.length > 0 ? (
                <div
                    className="
                        grid
                        grid-cols-2
                        md:grid-cols-3
                        lg:grid-cols-4
                        gap-5 md:gap-6
                        p-6
                    "
                >
                    {wishList.map((thisItem: ProductItem, index: number) => (
                        <ProductCard item={thisItem} key={index} />
                    ))}
                </div>
            ) : (
                <div>
                    <EmptyWishlist />
                </div>
            )}
        </div>
    )
}