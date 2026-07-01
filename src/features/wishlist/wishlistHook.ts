// hooks/useWishList.ts
'use client';

import { useState, useCallback, useEffect } from 'react';

import { addToWishList, removeFromWishList } from './wishlistSlice';
import { useAppDispatch, useAppSelector } from '@/src/lib/store/hooks';
import { ProductItem } from '@/src/types/Product';

export const useWishList = (itemId: number | string, item: ProductItem) => {
  const dispatch = useAppDispatch();
  const wishList = useAppSelector((state) => state.wishList.wishList); // أو state.wishlist.wishList

  const [isInWishList, setIsInWishList] = useState(false);

  // تحديث الحالة من Redux
  useEffect(() => {
    setIsInWishList(wishList.some(w => w.id === itemId));
  }, [wishList, itemId]);

  const toggleWishList = useCallback(() => {
    if (isInWishList) {
      dispatch(removeFromWishList(itemId));
    } else {
      dispatch(addToWishList(item));
    }
    setIsInWishList(prev => !prev);
  }, [dispatch, isInWishList, itemId, item]);

  return { isInWishList, toggleWishList };
};