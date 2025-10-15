'use client'
import { useDispatch } from "react-redux";
import imgSrc from "./../img/picture.png"
import { addToCart } from "../../redux/cartSlice";
import Link from "next/link";
import { useGetAllProductsQuery } from "../../redux/productAPI";


export default function Products({category}){

 const {data, error, isLoading} = useGetAllProductsQuery(`/category/${category}`);

    const dispatch = useDispatch();

    const hundelAddToCart = (item)=>{
      const quantity = 1;
      dispatch(addToCart({item, quantity}));

     
      }
return(
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ?  (

       
           data.products.map((item, index)=>{
                return(
                    <div>
                       <div   key={index} className="flex justify-between items-center  max-w-sm p-6 bg-[#fffcfa]  shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <img src={{imgSrc}} alt="picture" className="md:mr-3" />
                        <div>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.title}
                        </h5>

                        <p className="font-normal text-gray-700 dark:text-gray-400">{item.rating}
                        </p>
                         $<span>{item.price}</span>
                        <div className="flex justify-between">
                        <Link href={`/product/${item.id}`} class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                          details
                          </Link>
                          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent cursor-pointer" onClick={()=>hundelAddToCart(item)}>
                          Add to Cart
                          </span>
                        </div>
                        </div>
                        </div>
                    </div>
                )
            })
      
      ) : null}
    </div>
)
}