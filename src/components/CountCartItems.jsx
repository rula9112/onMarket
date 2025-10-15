'use client'
import { useSelector } from "react-redux";

export default function CountCartItems (){
         const { totalItems} =  useSelector(state => state.cart);        
    return(
        <span>
            {totalItems}
        </span>
    )
}