'use client'
import { ProductItem } from "@/src/types/Product";
import { useAppSelector } from "@/src/lib/store/hooks";
import EmptyWishlist from "./EmptyWishList";
import ProductCard from "../product/ProductCard";
import { Button } from "../ui/Button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";


export default function WishListTable(){
    const { wishList } = useAppSelector((state) => state.wishList);

    return(
       <section className="min-w-0 rounded-3xl border border-olive-100 bg-white shadow-sm">
            {wishList.length > 0 ? (
                <div>
<div
                    className="
                        grid min-w-0 grid-cols-1 gap-4 p-4
                        sm:grid-cols-2 sm:gap-5 sm:p-6
                        lg:grid-cols-3 lg:gap-6
                        2xl:grid-cols-4
                    "
                >
                    {wishList.map((thisItem: ProductItem, index: number) => (
                        <ProductCard item={thisItem} key={index} />
                    ))}
                  
                </div>
            <Button  className="m-5">
  <Link
    href="/"
    className="group inline-flex items-center gap-2"
    aria-label="Back to shop"
  >
     <ArrowLeft className="size-5 transition-transform duration-300 ease-out group-hover:-translate-x-1" />
 
    <span>Back to shop</span>
    </Link>
</Button>
                </div>
                
            ) : (
                <div className="p-4 sm:p-6">
                    <EmptyWishlist />
                </div>
            )}
            
           
        </section>
    )
}