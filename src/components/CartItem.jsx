'use client'

import { useDispatch } from "react-redux";
import { changeQuantity, deleteItem } from "../../redux/cartSlice";

export default function CartItem( props){

      const currentItem = props.currentItem;
      const dispatch = useDispatch();

      const handleChangeQuantity =(newQuantity , id)=>{
        dispatch(changeQuantity({newQuantity , id}))
      }

      const handleDeleteItem = (id)=>{
        dispatch(deleteItem(id));
       
      }
    return(
        <div className="grid grid-flow-col  gap-4">
                <div className="col-span-2">
                    <span className=" font-semibold">{currentItem.title} from {currentItem.category} </span>
                </div>
                <div className="col-span-2">
                  <span className="cursor-pointer" onClick={()=>{handleChangeQuantity(-1 , currentItem.id)}}> - </span>
                    <span className=" font-semibold">{currentItem.cartQuantity} </span>
                  <span className="cursor-pointer" onClick={()=>{handleChangeQuantity(1, currentItem.id)}}> + </span>
                </div>
                <div className="col-span-2">
                    <span className=" font-semibold"> </span>
                </div>
                <div className="col-span-2">
                    <span className=" font-semibold" > {currentItem.price}</span>
                </div>
                <div className="col-span-2">
                    <span className=" font-semibold cursor-pointer" onClick={()=>{handleDeleteItem(currentItem.id)}} > Delete </span>
                </div>
            </div>
    )
} 