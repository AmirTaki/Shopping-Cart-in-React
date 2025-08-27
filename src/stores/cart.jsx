import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items : [],
    statusTab :false,
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
            else {
                state.items.push ({productId, quantity})
            }
        },
        changeQuantity(state, action){
            const {productId, quantity}   = action.payload;
            const indexProductId = (state.items).findIndex(item => item.productId === productId)
            if(quantity > 0){
                state.items[indexProductId].quantity = quantity;   
            }
             else {
                // Remove the item from the array if quantity is 0 or less
                state.items = state.items.filter(item => item.productId !== productId);
            }
        },
        toggleStatusTab(status){
                if(state.statusTab === false){
                    
                }
        }
    }
})

export const {addToCart, changeQuantity} = cartSlice.actions;
export default cartSlice.reducer;

// https://www.youtube.com/watch?v=NJ1inoC1L1k&list=PLe28tn1x4EIYkPFBrutgP-j1Pe8edxLiz
// https://github.com/HoanghoDev/youtube_v2/blob/main/add-to-cart-react/src/products.js


// 25:13