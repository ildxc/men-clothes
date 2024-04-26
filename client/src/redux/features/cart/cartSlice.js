import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.items.find(
                (item) => item._id === action.payload._id
            );
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            const existingProduct = state.items.find(
                (item) => item._id === action.payload._id
            );
            if (existingProduct) {
                if (existingProduct.quantity > 1) {
                    existingProduct.quantity -= 1;
                } else {
                    state.items = state.items.filter(
                        (item) => item._id !== action.payload._id
                    );
                }
            }
        },
        dropItem: (state, action) => {
            state.items = state.items.filter(
                (item) => item._id !== action.payload._id
            );
        },
    },
});

export const { addToCart, removeFromCart, dropItem } = cartSlice.actions;
export const selectCart = (state) => state.cart.items;
export default cartSlice.reducer;