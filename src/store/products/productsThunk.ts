import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "./productsType";

const API = "https://api.escuelajs.co/api/v1/products";

export const fetchProducts = createAsyncThunk<Product[], void>(
  "product/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<Product[]>(API);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error");
    }
  }
);
