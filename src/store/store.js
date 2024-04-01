import { configureStore } from "@reduxjs/toolkit";
import  productSlice  from "../slice/Product.Slice";
import  categoriesSlice  from "../slice/Categories.Slice";

export const store = configureStore({
    reducer: {
        products: productSlice,
        categories: categoriesSlice,
    },
});
