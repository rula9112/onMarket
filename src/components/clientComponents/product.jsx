'use client';

import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartSlice";
import Link from "next/link";

export default function Product({ item, key }) {
  const dispatch = useDispatch();

  const hundelAddToCart = (item) => {
    const quantity = 1;
    dispatch(addToCart({ item, quantity }));
  };

  return (
    <div key={key} className="max-w-sm bg-white mx-auto rounded-xl shadow-lg overflow-hidden hover:shadow-xl">
      <img className="w-full object-cover" src={item.images} alt="Product Image" />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
        <p className="text-gray-600 text-sm mt-2">{item.description}</p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-orange-500">{item.price}</span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <button className="btn-primary-500 btn text-xs font-semibold" onClick={() => hundelAddToCart(item)}>
            Add to Cart
          </button>

          <Link href={`/product/${item.id}`} className="btn btn-primary-outline text-sm font-semibold inline-flex">
            Details
            <svg
              className="rtl:rotate-180 hidden w-3.5 h-3.5 ms-2 md:inline-flex"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
