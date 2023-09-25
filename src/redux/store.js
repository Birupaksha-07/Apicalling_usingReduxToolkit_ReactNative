import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from './slice/productSlice'


export const Store = configureStore({
    reducer:{
        product: ProductSlice
    }
});
