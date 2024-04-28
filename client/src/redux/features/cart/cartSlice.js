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
                (item) => item._id === action.payload._id && item.color.name === action.payload.color.name
            );
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            const existingProduct = state.items.find(
                (item) => item.id === action.payload.id && item.color.name === action.payload.color.name
            );
            console.log(state.items[0])
            if (existingProduct) {
                if (existingProduct.quantity > 1) {
                    existingProduct.quantity -= 1;
                } else {
                    state.items = state.items.filter(
                        (item) => (item.id !== existingProduct.id || item.color.name !== existingProduct.color.name)
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