import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: 'Mary'
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setName: (state, action) => {
            console.log('action', action);
            state.name = action.payload;
        }
    },
})

export default userSlice.reducer
export const { setName } = userSlice.actions