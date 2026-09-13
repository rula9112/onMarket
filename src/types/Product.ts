// نوع الـ product item
export type ProductItem = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
 images?: string[];
  thumbnail: string;
};

// نوع الـ props الخاصة بـ Product
export type ProductProps = {
  item: ProductItem;
  key?: React.Key; // next.js يجعل key اختياري كـ React.Key
};

export interface ProductsSliderProps {
  productsArray?: ProductItem[];
  title: string;
  
}

// ✅ في "@/src/types/Product"
export type ProductsByCategoryProps = {
  params: {
    category: string // ✓ string، ليس string | object
  }
}
export interface ProductsGridSectionProps {
  category: string;
}

export interface ProductIDProps {
  itemID: number;
}

export interface ProductsResponse {
  products: ProductItem[]; // من types/product.ts
  total?: number;
  skip?: number;
  limit?: number;
}

/***********state card */

export type SkeletonProps = {
variant?: 'normal' | 'compact';
className?: string;
};


/*************category */
export interface Category {
  slug: string;
  name: string;
  url: string;
}

