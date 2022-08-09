import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productIds: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const id = action.payload;
            state.productIds.push(id);
        },

        removeProduct: (state, action) => {
            const id = action.payload;
            state.productIds = state.productIds.filter(
                (productId) => productId !== id
            );
        }
    },
})

export default cartSlice.reducer
export const { addProduct, removeProduct } = cartSlice.actions