import { createSlice } from '@reduxjs/toolkit'
import product_item_1 from '../img/foot-product/product-item-1.jpg'
import product_item_2 from '../img/foot-product/product-item-2.jpg'
import product_item_3 from '../img/foot-product/product-item-3.jpg'
import product_item_4 from '../img/foot-product/product-item-4.jpg'
import product_item_5 from '../img/foot-product/product-item-5.jpg'
import product_item_6 from '../img/foot-product/product-item-6.jpg'
import product_item_7 from '../img/foot-product/product-item-7.jpg'
import product_item_8 from '../img/foot-product/product-item-8.jpg'
import product_item_9 from '../img/foot-product/product-item-9.jpg'
import product_item_10 from '../img/foot-product/product-item-10.jpg'


const initialState = [
    {
        id:1,
        name:'U.S Polo Asnn.',
        about:'Lorem ipsum dolor sit amet consectetur...',
        price:250,
        image:product_item_1,
        gender:'women'
    },
    {
        id:2,
        name:'U.S Polo Asnn.',
        about:'Lorem ipsum dolor sit amet consectetur...',
        price:250,
        image:product_item_2,
        gender:'men'
    },
    {
        id:3,
        name:'U.S Polo Asnn.',
        about:'Lorem ipsum dolor sit amet consectetur...',
        price:250,
        image:product_item_3,
        gender:'men'
    },
    {
        id:4,
        name:'U.S Polo Asnn.',
        about:'Lorem ipsum dolor sit amet consectetur...',
        price:250,
        image:product_item_4,
        gender:'men'
    },
    {
        id:5,
        name:'U.S Polo Asnn.',
        about:'Lorem ipsum dolor sit amet consectetur...',
        price:250,
        image:product_item_5,
        gender:'men'
    },
    {
        id:6,
        name:'U.S Polo Asnn.',
        about:'Lorem ipsum dolor sit amet consectetur...',
        price:250,
        image:product_item_6,
        gender:'men'
    },
    {
        id:7,
        name:'U.S Polo Asnn.',
        about:'Lorem ipsum dolor sit amet consectetur...',
        price:250,
        image:product_item_7,
        gender:'women'
    },
    {
        id:8,
        name:'U.S Polo Asnn.',
        about:'Lorem ipsum dolor sit amet consectetur...',
        price:250,
        image:product_item_8,
        gender:'women'
    },
    {
        id:9,
        name:'U.S Polo Asnn.',
        about:'Lorem ipsum dolor sit amet consectetur...',
        price:250,
        image:product_item_9,
        gender:'men'
    },
    {
        id:10,
        name:'U.S Polo Asnn.',
        about:'Lorem ipsum dolor sit amet consectetur...',
        price:250,
        image:product_item_10,
        gender:'women'
    }
]
const ProductSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
        filtergender:(state)=>{
            state=initialState.filter(item=>item.gender==="women")
            console.log(state)
        },
        
        nameChanger:(state,action)=>{
            state=[]
        }
       
    }
})

export default ProductSlice.reducer;
export const {filtergender,nameChanger}= ProductSlice.actions;