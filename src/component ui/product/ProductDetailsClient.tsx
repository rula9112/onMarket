'use client';

import { addToCart } from '@/src/features/cart/cartSlice';
import { useWishList } from '@/src/features/wishlist/wishlistHook';
import { useAppDispatch } from '@/src/lib/store/hooks';
import { ProductItem } from '@/src/types/Product';
import noImgAvailable from '@/public/img/noImageAvailable.jpeg';
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Minus, Plus, Star, Heart } from 'lucide-react';
import { Button } from '../ui/Button';
import { SkeletonLoading } from './StateOfProductsCmp';

const stars = Array.from({ length: 5 });

export default function ProductDetailsClient({ item }: { item: ProductItem }) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const { isInWishList, toggleWishList } = useWishList(item.id, item);
  const [quantity, setQuantity] = useState(1);

  const oldPrice = useMemo(() => {
    return Number(item.price) + Number(item.price) / 3;
  }, [item.price]);

  const handleChangeQuantity = useCallback((change: number) => {
    setQuantity((prev) => Math.max(1, prev + change));
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

  if (loading) {
    return (
      <div className="grid gap-4">
        <SkeletonLoading />
      </div>
    );
  }

  if (!item) {
    return (
      <div className="rounded-3xl border border-olive-100 bg-white p-8 text-center text-olive-600 shadow-sm sm:p-12">
        المنتج غير موجود
      </div>
    );
  }
    const imageSrc = item.images?.[0] || item.thumbnail || noImgAvailable;
  

  return (
    <div className="flex w-full min-w-0 flex-col gap-6 rounded-3xl border border-olive-100 bg-white p-4 shadow-sm sm:gap-8 sm:p-6 lg:flex-row lg:gap-10 lg:p-8">
      <div className="flex h-64 w-full shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-olive-100 bg-olive-50 p-5 sm:h-[26rem] sm:p-8 lg:sticky lg:top-6 lg:h-[34rem] lg:w-1/2">
        <Image
          className="h-full w-full object-contain"
          width={50}
          height={50}
          src={imageSrc}
          alt={item.title}
          priority
        />
      </div>

      <div className="min-w-0 w-full space-y-5 sm:space-y-6 lg:w-1/2 lg:py-2">
        <div className="flex flex-wrap items-start gap-3">
          <h1 className="min-w-0 flex-1 text-2xl font-bold leading-tight text-olive-950 sm:text-3xl">
            {item.title}
          </h1>
          <span className="shrink-0 rounded-full border border-olive-200 bg-olive-50 px-3 py-1 text-xs font-semibold text-olive-800">
            In Stock
          </span>
          <button
            type="button"
            onClick={handleWishList}
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${
              isInWishList
                ? 'border-red-100 bg-red-50 text-red-500'
                : 'border-olive-100 bg-white text-olive-600 hover:bg-red-50 hover:text-red-500'
            }`}
            aria-label="Add to wishlist"
          >
            <Heart className={`h-5 w-5 ${isInWishList ? 'fill-current' : ''}`} />
          </button>
        </div>

        <div className="flex items-center gap-1" role="img" aria-label={`Rating: ${item.rating} out of 5`}>
          {stars.map((_, index) => (
            <Star key={index} className="h-4 w-4 fill-orange-400 text-orange-400" />
          ))}
          <span className="ml-2 text-sm font-medium text-olive-700">{item.rating}</span>
        </div>

        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-y border-olive-100 py-4 sm:py-5">
          <span className="text-base text-olive-400 line-through">
            ${oldPrice.toFixed(2)}
          </span>
          <span className="text-3xl font-bold text-orange-700 sm:text-4xl">${item.price}</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-olive-900">Brand:</span>
          <span className="rounded-full bg-olive-50 px-3 py-1 text-sm text-olive-700">
            {item.category}
          </span>
        </div>

        <p className="text-pretty text-sm leading-7 text-olive-700 sm:text-base">
          {item.description}
        </p>

        <article className="flex flex-col items-stretch gap-3 border-t border-olive-100 pt-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <div className="inline-flex items-center rounded-full border border-olive-200 bg-olive-50 p-1">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full text-olive-800 transition hover:bg-white"
              onClick={() => handleChangeQuantity(-1)}
              aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4" />
            </button>
            <input
              className="w-12 bg-transparent text-center text-olive-950 outline-none"
              value={quantity}
              readOnly
            />
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full text-olive-800 transition hover:bg-white"
              onClick={() => handleChangeQuantity(1)}
              aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <Button
            variant="primary"
            onClick={handleAddToCart}
            className="!w-full !rounded-2xl !font-semibold shadow-sm sm:!w-auto"
          >
            Add to Cart
          </Button>
        </article>

        <div className="space-y-3 border-t border-olive-100 pt-5">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-olive-900">Category:</span>
            <span className="text-sm capitalize text-olive-600">{item.category}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold text-olive-900">Tag:</span>
            <span className="rounded-full bg-olive-50 px-3 py-1 text-sm text-olive-600">Vegetables</span>
            <span className="rounded-full bg-olive-50 px-3 py-1 text-sm text-olive-600">Healthy</span>
            <span className="rounded-full bg-olive-50 px-3 py-1 text-sm text-olive-800 underline">Chinese</span>
            <span className="rounded-full bg-olive-50 px-3 py-1 text-sm text-olive-600">Cabbage</span>
            <span className="rounded-full bg-olive-50 px-3 py-1 text-sm text-olive-600">Green Cabbage</span>
          </div>
        </div>
      </div>
    </div>
  );
}
