import { ProductIDProps } from "@/src/types/Product";
import ErrorState from "./ErrorState";
import ProductDetailsClient from "./ProductDetailsClient";
import { GetAPIProductByID } from "@/src/lib/api/Products";

export default async function ProductDetails({ itemID }: ProductIDProps){
  const data = await GetAPIProductByID(itemID);
 if (!data) {
   return (
     <div className="rounded-3xl border border-olive-100 bg-white p-4 shadow-sm sm:p-6">
       <ErrorState message="Error loading data" HelpButton='BackHome' />
     </div>
   );
 }
 return <ProductDetailsClient item={data}/>
   
}