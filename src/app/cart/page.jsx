import { TBody, Total } from "@/components/clientComponents/CartContent";
import Link from "next/link";

export default function cart (){
           
  
    return(
        <div className="w-full bg-white dark:bg-[#0A2025] py-9 px-8">
        <h1 className="text-center text-[#191919] dark:text-white text-[32px] font-semibold leading-[38px]">
          My Shopping Cart
        </h1>
        <div className="flex flex-col md:flex-row items-start mt-8 gap-6">
          <div className="bg-white p-4 md:w-3/5 rounded-xl">
            <table className="w-full bg-white rounded-xl">
              <thead>
                <tr className="text-center border-b border-gray-400 w-full text-[#7f7f7f] text-sm font-medium uppercase leading-[14px] tracking-wide" >
                  <th className="text-left px-2 py-2">Product</th>
                  <th className="px-2 py-2">price</th>
                  <th className="px-2 py-2">Quantity</th>
                  <th className="px-2 py-2">Subtotal</th>
                  <th className="w-7 px-2 py-2"></th>
                </tr>
              </thead>
             <TBody />
              <tfoot>
                <tr className="border-t border-gray-400">
                  <td className="px-2 py-2" colSpan="3">
                    <Link
                      className="btn bg-[#f2f2f2] rounded-[43px] text-[#4c4c4c] text-sm font-semibold classNameName leading-[16px]"
                    href={"/"}
                    >
                      Return to shop
                    </Link>
                  </td>
                  <td className="px-2 py-2" colSpan="2">

                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        <Total />
        </div>
      </div>     
    )
}