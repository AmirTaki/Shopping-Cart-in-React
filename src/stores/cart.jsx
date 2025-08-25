import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items : []
}

const cartSlice = createSlice({
    name : "cart",
    initialState, 
    reducers: {
        addToCart(state, action){
            const {productId, quantity}   
        }
    }
})

export default cartSlice.reducer;