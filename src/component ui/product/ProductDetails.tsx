import { ProductIDProps } from "@/src/types/Product";
import ErrorState from "./ErrorState";
import ProductDetailsClient from "./ProductDetailsClient";
import { GetAPIProductByID } from "@/src/lib/api/Products";

export default async function ProductDetails({ itemID }: ProductIDProps){
  const data = await GetAPIProductByID(itemID);
 if (!data) {
   return (
     <div className="bg-white p-6 rounded-3xl shadow">
       <ErrorState message="Error loading data" HelpButton='BackHome' />
     </div>
   );
 }
 return <ProductDetailsClient item={data}/>
   
}