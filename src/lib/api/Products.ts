import { ProductItem, ProductsResponse } from "./../../types/Product";

/*****offers Array */
export const OffersInfo = [
  {id:1,title:"Discount 10%" ,description:"on Beauty Products"},
  {id:2,title:"Discount 20%" , description:"on Phones exesuaris" },
  {id:4,title:"+ Free Product",description:"in airPords" },
  {id:5,title:"Free Delevery" ,description:"" },
]


/***************get Product By ID */
export async function GetAPIProductByID(id:number): Promise<ProductItem | null> 
{
  try {
    const res = await fetch(
      `https://dummyjson.com/product/${id}`,
      {
        
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

/******************** search product */
export async function SearchResultAPI(query:string): Promise<ProductsResponse | null> 
{
  try {
    const res = await fetch(
      `https://dummyjson.com/products/search?q=${query}`,
      {
        
        next: { revalidate: 3600 },
        headers: { Accept: 'application/json' },
      }
    );

    if (!res.ok) {
      throw new Error('Failed to search products');
    }

    return await res.json();
  } catch (error) {
    console.error('search error:', error);
    return null;
  }
}