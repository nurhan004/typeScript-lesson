import { createSlice } from "@reduxjs/toolkit";
import {User} from "./usersType"

interface UserState {
    list: User[];
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    list: [],
    loading: false,
    error: null,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
           .addCase("users/fetchUsers/pending", (state) => {
                state.loading = true;
                state.error = null;
            })
           .addCase("users/fetchUsers/fulfilled", (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
           .addCase("users/fetchUsers/rejected", (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});
