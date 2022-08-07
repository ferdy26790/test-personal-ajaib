import { configureStore } from "@reduxjs/toolkit";
import listDataReducer from './ListData'

export const store = configureStore({
    reducer: {
        listData: listDataReducer,
    }
})