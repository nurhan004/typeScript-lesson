import { createSlice } from "@reduxjs/toolkit";
import {User} from "./usersType"
import { fetchUsers } from "./usersThunk";

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
           .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
           .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? "Unknown error";
            });
    }
});

export default usersSlice.reducer;