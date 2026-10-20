'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Heart, Plus, Star } from 'lucide-react';
import { addToCart } from '@/src/features/cart/cartSlice';
import noImageAvailable from '@/public/img/noImageAvailable.jpeg';
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
    dispatch(addToCart({ item, quantity }));
  };

  const handleAddToWishList = () => {
    existing > -1
      ? dispatch(removeFromWishList(item.id))
      : dispatch(addToWishList(item));
  };

  const imageSrc = item.images?.[0] || item.thumbnail || noImageAvailable;

  return (
    <article className="group relative isolate overflow-hidden rounded-3xl border border-olive-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl">
      {/* This overlay provides the requested full-card navigation; controls stay above it. */}
      <Link
        href={`/product/${item.id}`}
        aria-label={`View ${item.title} details`}
        className="absolute inset-0 z-10 rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-orange-500"
      >
        <span className="sr-only">View {item.title} details</span>
      </Link>

      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-olive-50 p-5 sm:h-64">
        <Image
          src={imageSrc}
          width={400}
          height={400}
          alt={item.title}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />

        <span className="pointer-events-none absolute left-4 top-4 rounded-full border border-olive-100 bg-white/90 px-3 py-1 text-xs font-medium capitalize text-olive-800 shadow-sm backdrop-blur">
          {item.category}
        </span>

        <button
          type="button"
          onClick={handleAddToWishList}
          aria-label={existing >= 0 ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border bg-white/95 shadow-sm transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${
            existing >= 0
              ? 'border-red-100 text-red-500'
              : 'border-olive-100 text-olive-700 hover:text-red-500'
          }`}
        >
          <Heart className={`h-5 w-5 ${existing >= 0 ? 'fill-current' : ''}`} />
        </button>
      </div>

    <div className="pointer-events-none relative z-20 flex min-h-40 flex-col p-5">
  <div className="h-12 overflow-y-auto pr-1">
    <h3 className="text-base font-semibold leading-6 text-olive-950">
      {item.title}
    </h3>
  </div>

  <div className="mt-3 flex items-center gap-1.5 text-sm text-olive-600">
    <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
    <span>{item.rating}</span>
    <span className="mx-1 h-1 w-1 rounded-full bg-olive-300" />
    <span className="capitalize">{item.brand}</span>
  </div>

  <div className="mt-auto flex flex-col gap-3 pt-5 sm:flex-row sm:items-center sm:justify-between">
    <span className="text-xl font-bold text-olive-950">
      ${item.price}
    </span>

    <Button
      type="button"
      variant="primary"
      onClick={handleAddToCart}
      aria-label={`Add ${item.title} to cart`}
      className="
        pointer-events-auto
        flex h-11 w-full items-center justify-center gap-2
        rounded-xl px-4 text-sm font-semibold shadow-sm
        sm:min-h-11 sm:w-11 sm:shrink-0 sm:justify-center sm:rounded-full sm:p-0
      "
    >
      <Plus className="h-5 w-5" />
      <span className="sm:hidden text-sm">Add</span>
    </Button>
  </div>
</div>
    </article>
  );
}
