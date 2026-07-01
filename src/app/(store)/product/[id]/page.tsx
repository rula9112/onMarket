import CustomerReviews from "@/src/component ui/product/CustomerReviews"
import ProductDetails from "@/src/component ui/product/ProductDetails";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }){
      const { id } = await params;
    return(
        <div className="w-full h-screen bg-olive-50">           
             <div className="h-full w-4/5 mx-auto py-6 ">
             <ProductDetails itemID={Number(id)} />
             <CustomerReviews itemID={Number(id)} />  
             </div>
        </div>  
    )
}