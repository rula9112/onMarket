import { ProductItem, ProductsResponse } from "./../../types/Product";

// 1. استخدم {} للواجهة (Interface)
export interface ProductsData {
  fragrances: ProductItem[];
  beauty: ProductItem[];
}

// 2. استخدم {} للكائن (Object)
export const products: ProductsData = {
  fragrances: [
   { id: 5, title: "hgpkefdoijfdfls", price: 9.1, category: "fragrances" ,brand:"apple" ,rating:2.6 ,description:"hhgy iek n uoiero nhpwebfwb bgodi goowwb bgodi goowenbf"},
    { id: 1, title: "ffp je", price: 22.5, category: "fragrances" ,brand:"xaumi" ,rating:2.6  ,description:"hhgy iek n uoiero nhpwebf iek n uoiero nhpwebfwb bgodi goowenbf"},
    { id: 2, title: "metw", price: 58.2, category: "fragrances" ,brand:"samaung" ,rating:2.6  ,description:"hhgy iek n uoiero nhpwebfw nhpwebfwb bgodi goowenbf"},
    { id: 8, title: "opopt", price: 2.2, category: "fragrances" ,brand:"samaung" ,rating:2.6  ,description:"hhgy iek n uoiero nhpwebfwb bgodi goowenbf"},
    { id: 4, title: "phonnn euww", price: 85.2, category: "fragrances",brand:"xaumi" ,rating:2.6  ,description:"hhgy iek n uoiero nhpwebfwb bgodi goowenbf"},
    { id: 3, title: "xawmi", price: 7.2, category: "fragrances" ,brand:"nokia" ,rating:2.6  ,description:"hhgy iek n uoiero nhpwebfn uoiero nhpwebfwb bgodi goowenbf"}
  ],
  beauty: [
  { id: 52, title: "new waw", price: 58.2, category: "beauty",brand:"veta" ,rating:4.5  ,description:"hhgy iek n uoiero nhpwebfwb bgodi goowenbf"},
    { id: 53, title: "kall", price: 3.3, category: "beauty" ,brand:"lensess" ,rating:2.6  ,description:"hhgy iek n uoiero nhpwebfn uoiero nhpwebfwb bgodi goowenbf"}
   ],
};


/***************get Product By ID */
export async function GetAPIProductByID(id:number): Promise<ProductItem | null> 
{
  try {
    const res = await fetch(
      `https://dummyjson.com/product/${id}`,
      {
        cache: 'no-store',
        next: { revalidate: 3600 },
        headers: { Accept: 'application/json' },
      }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }

    return await res.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
}

/***************get  10 products */
export async function GetAPI10Products(): Promise<ProductsResponse | null> 
{
  try {
    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=10&select=title,price`,
      {
        cache: 'no-store',
        next: { revalidate: 3600 },
        headers: { Accept: 'application/json' },
      }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }

    return await res.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
}



/**********all products by Category */
export async function GetAPIProductsByCategory({category,}: { category: string;}): Promise<ProductsResponse | null> 
{
  if (!category || typeof category !== 'string') {
    throw new Error('Invalid category');
  }
  try {
    const res = await fetch(
      `https://dummyjson.com/products/category/${encodeURIComponent(category)}`,
      {
        cache: 'no-store',
        next: { revalidate: 3600 },
        headers: { Accept: 'application/json' },
      }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }

    return await res.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
}