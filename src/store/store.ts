import { configureStore } from "@reduxjs/toolkit";
import  useReducer from "./Users/usersSlice"
import productsReducer from './products/productsSlice';

export const store = configureStore({
    reducer: {
        users: useReducer,
        products: productsReducer,
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;