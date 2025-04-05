import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "./usersType";

const API = "https://api.escuelajs.co/api/v1/users";

export const fetchUsers = createAsyncThunk<User[], void>(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<User[]>(API);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error");
    }
  }
);
