'use client';

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useGetAllProductsQuery } from "../../../redux/productAPI";
import { addToCart } from "../../../redux/cartSlice";
import { CardLoading } from "../LaodingComponents/Loading";
import ErrorComponent from "../LaodingComponents/ErrorComponent";

export default function ProductDetails({ id }) {
  const { data, error, isLoading } = useGetAllProductsQuery(`/${id}`);

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handelChangeQuantity = (newQuantity) => {
    newQuantity < 1
      ? quantity > 1
        ? setQuantity(quantity + newQuantity)
        : setQuantity(quantity)
      : setQuantity(quantity + newQuantity);
  };

  const handleAddToCart = (item) => {
    console.log(item, quantity);
    dispatch(addToCart({ item, quantity }));
  };

  if (isLoading)
    return (
      <div className="flex max-w-[1300px] w-full p-10 bg-white border-gray-400 rounded-xl border-2">
        <div className="flex flex-col md:flex-row">
          <CardLoading />
        </div>
      </div>
    );

  if (error) return <ErrorComponent />;

  return (
    <div className="flex max-w-[1300px] mx-7 p-10 bg-white border-gray-400 rounded-xl border-2">
      <div className="flex flex-col md:flex-row">
        <img className="w-[556px] ml-3 mr-6" src={data.images} alt="" />
        <div>
          <div className="flex gap-2 items-center">
            <h1 className="text-[36px] leading-[44px] font-semibold text-black">
              {data.title}
            </h1>
            <span className="text-sm text-white px-2 py-1 bg-orange-500 bg-opacity-20">
              In Stock
            </span>
          </div>
          <div className="flex items-center mt-3 text-sm leading-[1.5]">
            <span className="flex gap-1">
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.31008 11.9111L11.8566 14.1577C12.31 14.4446 12.8725 14.0177 12.7381 13.4884L11.7138 9.45805C11.6848 9.34579 11.6882 9.22764 11.7234 9.11718C11.7586 9.00673 11.8243 8.90846 11.9129 8.83368L15.0933 6.18711C15.5106 5.83949 15.2958 5.14593 14.7586 5.11105L10.6056 4.84105C10.4938 4.83312 10.3866 4.79359 10.2964 4.72707C10.2061 4.66055 10.1367 4.56977 10.096 4.4653L8.5469 0.564927C8.50471 0.454081 8.42984 0.358673 8.33219 0.291355C8.23455 0.224037 8.11875 0.187988 8.00015 0.187988C7.88155 0.187988 7.76574 0.224037 7.6681 0.291355C7.57046 0.358673 7.49558 0.454081 7.4534 0.564927L5.90427 4.4653C5.86372 4.56988 5.79429 4.66077 5.70406 4.7274C5.61383 4.79402 5.50652 4.83364 5.39465 4.84161L1.24171 5.11161C0.705084 5.14593 0.489084 5.83949 0.907022 6.18711L4.0874 8.83424C4.17588 8.90898 4.2415 9.00715 4.27673 9.11749C4.31195 9.22783 4.31534 9.34587 4.28652 9.45805L3.33702 13.1959C3.17558 13.8309 3.85115 14.3434 4.39452 13.9986L7.69077 11.9111C7.78342 11.8522 7.89093 11.8209 8.00071 11.8209C8.11049 11.8209 8.218 11.8522 8.31065 11.9111H8.31008Z"
                  fill="#FF8A00"
                ></path>
              </svg>

              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.31008 11.9111L11.8566 14.1577C12.31 14.4446 12.8725 14.0177 12.7381 13.4884L11.7138 9.45805C11.6848 9.34579 11.6882 9.22764 11.7234 9.11718C11.7586 9.00673 11.8243 8.90846 11.9129 8.83368L15.0933 6.18711C15.5106 5.83949 15.2958 5.14593 14.7586 5.11105L10.6056 4.84105C10.4938 4.83312 10.3866 4.79359 10.2964 4.72707C10.2061 4.66055 10.1367 4.56977 10.096 4.4653L8.5469 0.564927C8.50471 0.454081 8.42984 0.358673 8.33219 0.291355C8.23455 0.224037 8.11875 0.187988 8.00015 0.187988C7.88155 0.187988 7.76574 0.224037 7.6681 0.291355C7.57046 0.358673 7.49558 0.454081 7.4534 0.564927L5.90427 4.4653C5.86372 4.56988 5.79429 4.66077 5.70406 4.7274C5.61383 4.79402 5.50652 4.83364 5.39465 4.84161L1.24171 5.11161C0.705084 5.14593 0.489084 5.83949 0.907022 6.18711L4.0874 8.83424C4.17588 8.90898 4.2415 9.00715 4.27673 9.11749C4.31195 9.22783 4.31534 9.34587 4.28652 9.45805L3.33702 13.1959C3.17558 13.8309 3.85115 14.3434 4.39452 13.9986L7.69077 11.9111C7.78342 11.8522 7.89093 11.8209 8.00071 11.8209C8.11049 11.8209 8.218 11.8522 8.31065 11.9111H8.31008Z"
                  fill="#FF8A00"
                ></path>
              </svg>

              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.31008 11.9111L11.8566 14.1577C12.31 14.4446 12.8725 14.0177 12.7381 13.4884L11.7138 9.45805C11.6848 9.34579 11.6882 9.22764 11.7234 9.11718C11.7586 9.00673 11.8243 8.90846 11.9129 8.83368L15.0933 6.18711C15.5106 5.83949 15.2958 5.14593 14.7586 5.11105L10.6056 4.84105C10.4938 4.83312 10.3866 4.79359 10.2964 4.72707C10.2061 4.66055 10.1367 4.56977 10.096 4.4653L8.5469 0.564927C8.50471 0.454081 8.42984 0.358673 8.33219 0.291355C8.23455 0.224037 8.11875 0.187988 8.00015 0.187988C7.88155 0.187988 7.76574 0.224037 7.6681 0.291355C7.57046 0.358673 7.49558 0.454081 7.4534 0.564927L5.90427 4.4653C5.86372 4.56988 5.79429 4.66077 5.70406 4.7274C5.61383 4.79402 5.50652 4.83364 5.39465 4.84161L1.24171 5.11161C0.705084 5.14593 0.489084 5.83949 0.907022 6.18711L4.0874 8.83424C4.17588 8.90898 4.2415 9.00715 4.27673 9.11749C4.31195 9.22783 4.31534 9.34587 4.28652 9.45805L3.33702 13.1959C3.17558 13.8309 3.85115 14.3434 4.39452 13.9986L7.69077 11.9111C7.78342 11.8522 7.89093 11.8209 8.00071 11.8209C8.11049 11.8209 8.218 11.8522 8.31065 11.9111H8.31008Z"
                  fill="#FF8A00"
                ></path>
              </svg>

              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.31008 11.9111L11.8566 14.1577C12.31 14.4446 12.8725 14.0177 12.7381 13.4884L11.7138 9.45805C11.6848 9.34579 11.6882 9.22764 11.7234 9.11718C11.7586 9.00673 11.8243 8.90846 11.9129 8.83368L15.0933 6.18711C15.5106 5.83949 15.2958 5.14593 14.7586 5.11105L10.6056 4.84105C10.4938 4.83312 10.3866 4.79359 10.2964 4.72707C10.2061 4.66055 10.1367 4.56977 10.096 4.4653L8.5469 0.564927C8.50471 0.454081 8.42984 0.358673 8.33219 0.291355C8.23455 0.224037 8.11875 0.187988 8.00015 0.187988C7.88155 0.187988 7.76574 0.224037 7.6681 0.291355C7.57046 0.358673 7.49558 0.454081 7.4534 0.564927L5.90427 4.4653C5.86372 4.56988 5.79429 4.66077 5.70406 4.7274C5.61383 4.79402 5.50652 4.83364 5.39465 4.84161L1.24171 5.11161C0.705084 5.14593 0.489084 5.83949 0.907022 6.18711L4.0874 8.83424C4.17588 8.90898 4.2415 9.00715 4.27673 9.11749C4.31195 9.22783 4.31534 9.34587 4.28652 9.45805L3.33702 13.1959C3.17558 13.8309 3.85115 14.3434 4.39452 13.9986L7.69077 11.9111C7.78342 11.8522 7.89093 11.8209 8.00071 11.8209C8.11049 11.8209 8.218 11.8522 8.31065 11.9111H8.31008Z"
                  fill="#FF8A00"
                ></path>
              </svg>

              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.31008 11.9111L11.8566 14.1577C12.31 14.4446 12.8725 14.0177 12.7381 13.4884L11.7138 9.45805C11.6848 9.34579 11.6882 9.22764 11.7234 9.11718C11.7586 9.00673 11.8243 8.90846 11.9129 8.83368L15.0933 6.18711C15.5106 5.83949 15.2958 5.14593 14.7586 5.11105L10.6056 4.84105C10.4938 4.83312 10.3866 4.79359 10.2964 4.72707C10.2061 4.66055 10.1367 4.56977 10.096 4.4653L8.5469 0.564927C8.50471 0.454081 8.42984 0.358673 8.33219 0.291355C8.23455 0.224037 8.11875 0.187988 8.00015 0.187988C7.88155 0.187988 7.76574 0.224037 7.6681 0.291355C7.57046 0.358673 7.49558 0.454081 7.4534 0.564927L5.90427 4.4653C5.86372 4.56988 5.79429 4.66077 5.70406 4.7274C5.61383 4.79402 5.50652 4.83364 5.39465 4.84161L1.24171 5.11161C0.705084 5.14593 0.489084 5.83949 0.907022 6.18711L4.0874 8.83424C4.17588 8.90898 4.2415 9.00715 4.27673 9.11749C4.31195 9.22783 4.31534 9.34587 4.28652 9.45805L3.33702 13.1959C3.17558 13.8309 3.85115 14.3434 4.39452 13.9986L7.69077 11.9111C7.78342 11.8522 7.89093 11.8209 8.00071 11.8209C8.11049 11.8209 8.218 11.8522 8.31065 11.9111H8.31008Z"
                  fill="#FF8A00"
                ></path>
              </svg>
            </span>
          </div>

          <div className="h-9 mt-5 justify-start items-center gap-3 inline-flex">
            <div className="justify-start items-center gap-1 flex">
              <div className="text-[#b3b3b3] text-xl font-normal line-through leading-[30px]">
                ${data.price}
              </div>
              <div className="text-orange-600 text-2xl font-medium leading-9">
                ${data.price + data.price / 3}
              </div>
            </div>
            <div className="px-2.5 py-[3px] bg-[#e94b48]/10 rounded-[30px] text-orange-700 text-sm font-medium leading-[21px]">
              64% Off
            </div>
          </div>

          <div className="h-14 flex w-full justify-between items-center">
            <div className="justify-start items-center gap-2 flex">
              <span className="text-[#191919] text-sm font-normal leading-[21px]">
                Brand:
              </span>
              <div className="w-14 h-14 flex flex-col justify-center">
                {data.category}
              </div>
            </div>
          </div>

          <p className="text-justify text-[#7f7f7f] text-sm font-normal mt-4 leading-[21px]">
            {data.description}
          </p>

          <div className="h-[88px] mt-6 py-[18px] bg-white shadow-[0px_1px_0px_0px_rgba(229,229,229,1.00)] shadow-[0px_-1px_0px_0px_rgba(229,229,229,1.00)] border border-white justify-center items-center gap-3 flex">
            <div className="p-2 bg-white rounded-[170px] border border-neutral-200 justify-center items-center flex">
              <button
                className="w-[34px] h-[34px]"
                onClick={() => {
                  handelChangeQuantity(-1);
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.33398 7H11.6673"
                    stroke="#666666"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <input
                placeholder="5"
                className="w-10 text-center text-[#191919] text-base font-normal leading-normal"
                value={quantity}
                readOnly
              />
              <button
                className="flex items-center justify-end w-[34px] h-[34px]"
                onClick={() => {
                  handelChangeQuantity(1);
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.33398 6.99998H11.6673M7.00065 2.33331V11.6666V2.33331Z"
                    stroke="#1A1A1A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>

            <button className="h-[51px] px-20 btn-primary-500 btn justify-center items-center gap-4 flex">
              <span
                className="text-white text-base font-semibold leading-tight"
                onClick={() => {
                  handleAddToCart(data);
                }}
              >
                Add to Cart
              </span>
              <div>
                <svg
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.16667 7.33333H2.66667L1 16.5H16L14.3333 7.33333H11.8333M5.16667 7.33333V4.83333C5.16667 2.99239 6.65905 1.5 8.5 1.5V1.5C10.3409 1.5 11.8333 2.99238 11.8333 4.83333V7.33333M5.16667 7.33333H11.8333M5.16667 7.33333V9.83333M11.8333 7.33333V9.83333"
                    stroke="white"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </button>

            <div>
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="52"
                  height="52"
                  rx="26"
                  fill="#20B526"
                  fillOpacity="0.1"
                ></rect>
                <path
                  d="M25.9996 33.5451C9.33328 24.3334 20.9999 14.3334 25.9996 20.6567C30.9999 14.3334 42.6666 24.3334 25.9996 33.5451Z"
                  stroke="#2C742F"
                  strokeWidth="1.5"
                ></path>
              </svg>
            </div>
          </div>

          <div className="h-[54px] mt-6 flex-col justify-start items-start gap-3 inline-flex">
            <div className="justify-start items-start gap-1.5 inline-flex">
              <span className="text-[#191919] text-sm font-medium leading-[21px]">
                Category:
              </span>
              <span className="text-[#7f7f7f] text-sm font-normal leading-[21px]">
                {data.category}
              </span>
            </div>
            <div className="justify-start items-start gap-1.5 inline-flex">
              <span className="text-[#191919] text-sm font-medium leading-[21px]">
                Tag:
              </span>
              <span className="text-[#7f7f7f] text-sm font-normal leading-[21px]">
                Vegetables
              </span>
              <span className="text-[#7f7f7f] text-sm font-normal leading-[21px]">
                Healthy
              </span>
              <span className="text-[#191919] text-sm font-normal underline leading-[21px]">
                Chinese
              </span>
              <span className="text-[#7f7f7f] text-sm font-normal leading-[21px]">
                Cabbage
              </span>
              <span className="text-[#7f7f7f] text-sm font-normal leading-[21px]">
                Green Cabbage
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
