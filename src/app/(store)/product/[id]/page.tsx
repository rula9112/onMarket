import CustomerReviews from "@/src/component ui/product/CustomerReviews"
import ProductDetails from "@/src/component ui/product/ProductDetails";
import { ShoppingBag } from "lucide-react";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }){
      const { id } = await params;
    return(
        <div className="min-h-screen w-full bg-olive-50 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
             <div className="mx-auto flex w-full max-w-[90rem] flex-col gap-6 sm:gap-8">
             <header className="flex items-center justify-between gap-4 rounded-3xl border border-olive-100 bg-white p-5 shadow-sm sm:p-7">
               <div className="min-w-0">
                 <p className="mb-2 text-xs font-semibold tracking-[0.18em] text-orange-700 sm:text-sm">
                   ONMARKET
                 </p>
                 <h2 className="text-2xl font-bold tracking-tight text-olive-950 sm:text-3xl md:text-4xl">
                   تفاصيل المنتج
                 </h2>
                 <p className="mt-2 text-sm leading-6 text-olive-600 sm:text-base">
                   اكتشف تفاصيل المنتج ومعلوماته
                 </p>
                 <div className="mt-4 h-1 w-14 rounded-full bg-orange-500" />
               </div>
               <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-orange-100 bg-orange-50 text-olive-700 shadow-sm sm:h-14 sm:w-14">
                 <ShoppingBag className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.8} />
               </div>
             </header>
             <ProductDetails itemID={Number(id)} />
             <CustomerReviews itemID={Number(id)} />  
             </div>
        </div>  
    )
}           