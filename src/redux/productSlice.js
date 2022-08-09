import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: [],
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.list = action.payload;
        }
    },
})

export default productSlice.reducer
export const { setProducts } = productSlice.actions