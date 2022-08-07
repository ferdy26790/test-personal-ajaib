import { createSlice } from '@reduxjs/toolkit';

const listData = createSlice({
    name: 'listData',
    initialState: {
        loading: false,
        data: []
    },
    reducers: {
        fetchLoading: state => {
            state.loading = true
        },
        fetchSuccess: (state, action) => {
            state.loading = false
            state.data = action.payload
        }
    }
})

export const { fetchLoading, fetchSuccess} = listData.actions
export default listData.reducer;