import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../redux/ProductSlice";


export default configureStore({
    reducer:{
        products: ProductSlice
    }
})