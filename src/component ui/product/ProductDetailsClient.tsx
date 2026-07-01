'use client';

import { addToCart } from "@/src/features/cart/cartSlice";
import { useWishList } from "@/src/features/wishlist/wishlistHook";
import { useAppDispatch } from "@/src/lib/store/hooks";
import { ProductItem } from "@/src/types/Product";
import noImgAvailable from '@/public/img/noImageAvailable.jpeg';
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Minus, Plus, Star, Heart } from "lucide-react";
import { Button } from "../ui/Button";
import { SkeletonLoading } from "./StateOfProductsCmp";

const stars = Array.from({ length: 5 });

export default  function ProductDetailsClient({item}:{item:ProductItem}) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const { isInWishList, toggleWishList } = useWishList(item.id, item);
  const [quantity, setQuantity] = useState(1);



  const oldPrice = useMemo(() => {
    return Number(item.price) + Number(item.price) / 3;
  }, [item.price]);

  const handleChangeQuantity = useCallback((change: number) => {
    setQuantity(prev => Math.max(1, prev + change));
  }, []);

  const handleAddToCart = useCallback(() => {
    dispatch(addToCart({ item, quantity }));
  }, [dispatch, item, quantity]);

  const handleWishList = useCallback(() => {
    toggleWishList();
  }, [toggleWishList]);

  
      useEffect(() => {
    if (item) setLoading(false);
  }, [item]);
 if (loading) return (<div className="grid gap-4">
<SkeletonLoading  />
</div>
  
 );


    if (!item) return <div className="p-6 text-center text-gray-500">المنتج غير موجود</div>;

  return (
    <div className="w-full flex flex-col lg:flex-row gap-10 bg-white p-6 rounded-3xl shadow-sm">
      <div className="w-full lg:w-1/2 h-96 flex justify-center items-center rounded-xl border border-gray-100 overflow-hidden bg-gray-50">
        <Image
          className="w-3/4 h-full object-contain"
          src={noImgAvailable}
          alt={item.title}
          priority
        />
      </div>

      <div className="w-full lg:w-1/2 space-y-6">
        <div className="flex flex-wrap gap-3 items-center">
          <h1 className="text-2xl font-semibold text-black leading-tight">
            {item.title}
          </h1>

          <span className="text-xs font-medium text-orange-600 bg-orange-500/10 px-3 py-1 rounded-full">
            In Stock
          </span>

          <button
            type="button"
            onClick={handleWishList}
            className={`w-10 h-10 rounded-full shadow-sm flex items-center justify-center transition ${
              isInWishList ? "bg-red-200 text-red-600" : "bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-500"
            }`}
            aria-label="Add to wishlist"
          >
            <Heart className={`w-5 h-5 ${isInWishList ? "fill-current" : ""}`} />
          </button>
        </div>

        <div className="flex items-center gap-1">
          {stars.map((_, index) => (
            <Star key={index} className="w-4 h-4 text-orange-400 fill-orange-400" />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-lg line-through">
            ${oldPrice.toFixed(2)}
          </span>
          <span className="text-red-600 text-2xl font-semibold">
            ${item.price}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-black text-sm font-medium">Brand:</span>
          <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
            {item.category}
          </span>
        </div>

        <p className="text-justify text-gray-500 text-sm leading-7">
          {item.description}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <div className="inline-flex items-center border border-neutral-200 rounded-full p-1">
            <button
              type="button"
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
              onClick={() => handleChangeQuantity(-1)}
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4 text-black" />
            </button>

            <input
              className="w-12 text-center text-gray-900 outline-none bg-transparent"
              value={quantity}
              readOnly
            />

            <button
              type="button"
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
              onClick={() => handleChangeQuantity(1)}
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4 text-black" />
            </button>
          </div>

          <Button variant="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>

        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-2">
            <span className="text-gray-900 text-sm font-medium">Category:</span>
            <span className="text-gray-500 text-sm">{item.category}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-gray-900 text-sm font-medium">Tag:</span>
            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-sm">Vegetables</span>
            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-sm">Healthy</span>
            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-900 text-sm underline">Chinese</span>
            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-sm">Cabbage</span>
            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-sm">Green Cabbage</span>
          </div>
        </div>
      </div>
    </div>
  );
}