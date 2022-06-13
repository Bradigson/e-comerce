import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Redux-reducer/Reducer";
export const store = configureStore({
    reducer : {
        counter : counterSlice.reducer
    }
})