import WishListTable from "@/src/component ui/wishlist/WishListTable";
import { Heart } from "lucide-react";

   export default function WishlistPage() {
     return (
       <div className="min-h-screen bg-olive-50">
         <div className="mx-auto max-w-[90rem] px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12">
           <header className="mb-8 flex items-center justify-between gap-4 rounded-3xl border border-olive-100 bg-white p-5 shadow-sm sm:mb-10 sm:p-7">
             <div className="min-w-0">
               <p className="mb-2 text-xs font-semibold tracking-[0.18em] text-orange-700 sm:text-sm">
                 ONMARKET
               </p>
               <h1 className="text-2xl font-bold tracking-tight text-olive-950 sm:text-3xl md:text-4xl">
                 قائمة المفضلة
               </h1>
               <p className="mt-2 text-sm leading-6 text-olive-600 sm:text-base">
                 المنتجات التي حفظتها للعودة إليها لاحقًا
               </p>
               <div className="mt-4 h-1 w-14 rounded-full bg-orange-500" />
             </div>

             <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-orange-100 bg-orange-50 text-red-500 shadow-sm sm:h-14 sm:w-14">
               <Heart className="h-6 w-6 fill-current sm:h-7 sm:w-7" strokeWidth={1.8} />
             </div>
           </header>

           <WishListTable />
         </div>
       </div>
     )
   }
