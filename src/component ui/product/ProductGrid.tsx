'use client'
import { ProductItem, ProductsResponse } from "@/src/types/Product";
import ProductComponent from "./ProductCard";
import { useEffect, useState } from "react";
import FetchError from "./ErrorState";
import ErrorState from "./ErrorState";
import ProductCard from "./ProductCard";
import { SkeletonLoading } from "./StateOfProductsCmp";

export default function ProductGrid({ products }: { products: ProductItem[] }){
  const [loading, setLoading] = useState<Boolean>(true);

      useEffect(() => {
    if (products) setLoading(false);
  }, [products]);
 if (loading) return (<div className="grid gap-4">
{Array.from({ length: 4 }).map((_, i) => (
<SkeletonLoading key={i} />
))}</div>
  
 );
 
 return(      
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">

    {products.length > 0 ? (
      products.map((item, i) => <ProductCard item={item} key={item.id || i} />)
    ) : (
    <ErrorState message='There is no Data to Show' />
    )}
  </div>
    )
}

