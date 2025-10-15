'use client'

import { useDispatch } from "react-redux";
import { changeQuantity, deleteItem } from "../../../redux/cartSlice";

export default function CartItem(props){
  const currentItem = props.currentItem;
  const dispatch = useDispatch();

  const handleChangeQuantity =(newQuantity , id)=>{
    dispatch(changeQuantity({newQuantity , id}))
  }

  const handleDeleteItem = (id)=>{
    dispatch(deleteItem(id));
  }
    return(
        <tr className="text-center">
        <td className="px-2 py-2 text-left align-top">
          <img src="https://iili.io/3FqLBsI.png" alt="test"
            className="w-[100px] mr-2 inline-block h-[100px]"
          /><span>{currentItem.title}</span>
        </td>
        <td className="px-2 py-2">${currentItem.price}</td>
        <td
          className="p-2 mt-9 bg-white rounded-[170px] border border-[#a0a0a0] justify-around items-center flex"
        >
          <svg
            width="14"
            height="15"
            className="cursor-pointer"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg" 
            onClick={()=>{handleChangeQuantity(-1 , currentItem.id)}}
          >
            <path
              d="M2.33398 7.5H11.6673"
              stroke="#666666"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path></svg><span
            className="w-10 text-center text-[#191919] text-base font-normal leading-normal">{currentItem.cartQuantity}</span>
            <svg
            className="cursor-pointer relative"
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg" onClick={()=>{handleChangeQuantity(1 , currentItem.id)}}
          >
            <path
              d="M2.33398 7.49998H11.6673M7.00065 2.83331V12.1666V2.83331Z"
              stroke="#1A1A1A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </td>
        <td className="px-2 py-2">${ Number(currentItem.price * currentItem.cartQuantity).toFixed(2)}</td>
        <td className="px-2 py-2">
          <svg
            width="24"
            className="cursor-pointer"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={()=>{handleDeleteItem(currentItem.id)}}
          >
            <path
              d="M12 23.5C18.0748 23.5 23 18.5748 23 12.5C23 6.42525 18.0748 1.5 12 1.5C5.92525 1.5 1 6.42525 1 12.5C1 18.5748 5.92525 23.5 12 23.5Z"
              stroke="#CCCCCC"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M16 8.5L8 16.5"
              stroke="#666666"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M16 16.5L8 8.5"
              stroke="#666666"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </td>
      </tr>
    )
}