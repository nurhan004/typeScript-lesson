import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productsThunk";
import { Product } from "./productsType";

interface ProductState {
    product: Product[];
    loading: boolean;
    error: string | null;
}

const initialState: ProductState = {
    product: [],
    loading: false,
    error: null,
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch products";
            });
    }
});

export default productsSlice.reducer;