// src/app/api/categories/route.ts

import { Category } from "@/src/types/Product";
import { NextResponse } from "next/server";

export async function GETCategories() {
  let res;
  let categories : Category[];

  try{
   res = await fetch(
    'https://dummyjson.com/products/categories',
    {
      cache: 'no-store',
    }

  );
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
     return  categories = await res.json();

  } catch (error) {
      return null
      
    }
  
}
