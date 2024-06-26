import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoading: true, products: [], basket: [], save: [], isLike:[], totalPrice: 0, selectProducts: [], selectCategories: []};
export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        isLoadingProduct(state) {
            state.isLoading = true;
        },
        setProducts(state, action) {
            state.products = action.payload;
            state.isLoading = false;
        },

        setBasket(state, action) {
            if(!state.basket.find((element) => +element.id === +action.payload.id)){
                state.basket =[...state.basket, action.payload];
            }
        },
        removeBasket(state, action){
            state.basket = action.payload
        },
        setSave(state, action) {
            if (state.save.some((element) => +element.id === +action.payload.id)) {
                state.save = state.save.filter(element => +element.id !== +action.payload.id)
            }else{
                state.save = [...state.save, action.payload]
            }
        },
        setLike(state, action){
            state.isLike = action.payload
        
        },
        setTotal(state, action){
            state.totalPrice = action.payload
        },
        incrementQuantity(state, action) {
            state.basket = state.basket.map(item =>
                item.id === action.payload ? { ...item, quantyti: item.quantyti + 1 } : item
            );
            const data = state.basket.find(element => +element.id === +action.payload)
            state.totalPrice += data.price
        },
        decrementQuantity(state, action) {
            state.basket = state.basket.map(item =>
                item.id === action.payload ? { ...item, quantyti: Math.max(1, item.quantyti - 1) } : item
            );
            const data = state.basket.find(element => +element.id === +action.payload)
            if(state.totalPrice===0){
                return;
            }else{
                state.totalPrice -= data.price
            }
        },
        setSelectProducts(state, action){
            state.selectProducts = action.payload
        },
        setSelectCategories(state, action){
            state.selectCategories = action.payload
        }
    },
});

export const { setProducts, isLoadingProduct, setSave, setBasket, setLike, incrementQuantity, decrementQuantity, removeBasket, setTotal, setSelectProducts, setSelectCategories} = productSlice.actions;

export default productSlice.reducer;
