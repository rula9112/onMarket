"use client";

import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name:"product",
    initialState:{ 
        products:[
            {
                title:"perfume",
                products:[
                    {
                        productName:"hugo",
                        price:54,
                        description:"lorem is a good and nice one that bla bla bla"
                    },
                    {
                        productName:"romance",
                        price:10,
                        description:"lorem is a good and nice one that bla bla bla"
                    },
                    {
                        productName:"nice",
                        price:25,
                        description:"lorem is a good and nice one that bla bla bla"
                    },
                ],
                valuenn:"nn"
            },

            {
                title:"books",
                products:[
                    {
                        productName:"alice",
                        price:10,
                        description:"lorem is a good and nice one that bla bla bla"
                    },
                    {
                        productName:"notre Dame",
                        price:15,
                        description:"lorem is a good and nice one that bla bla bla"
                    },
                    {
                        productName:"something",
                        price:25,
                        description:"lorem is a good and nice one that bla bla bla"
                    },
                ]
            }
            ]            
            ,
            valuenn:"value"
     },
     reducers:{
      increement:(state)=>{console.log(state.products)},
      decreement:(state)=>{state.value -= 1},
     }
});
export const {increement , decreement} = productSlice.actions;

export default productSlice.reducer

