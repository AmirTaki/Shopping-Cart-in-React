import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items : []
}

const cartSlice = createSlice({
    name : "cart",
    initialState, 
    reducers: {
        addToCart(state, action){
            const {productId, quantity}   = action.payload;
            const indexProductId = (state.items).findIndex(item => item.productId === productId)
            if(indexProductId >= 0 )[
                state.items[indexProductId].quantity += quantity
            ]
            state.items.push ({productId, quantity})
        }
    }
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;

// https://www.youtube.com/watch?v=NJ1inoC1L1k&list=PLe28tn1x4EIYkPFBrutgP-j1Pe8edxLiz
// https://github.com/HoanghoDev/youtube_v2/blob/main/add-to-cart-react/src/products.js