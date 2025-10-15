'use client'

import { useSelector } from "react-redux";

export default function CountCart(){
     const {totalItems} =  useSelector(state => state.cart);
    
return(
    <span className={totalItems?"rounded-full px-1 text-xs bg-orange-500 text-white z-40 translate-x-5 -translate-y-3 absolute":"hidden"}>
        {totalItems}
    </span>
)
}