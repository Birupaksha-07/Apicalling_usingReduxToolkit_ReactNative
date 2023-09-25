import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("FetchProducts",async()=>{
    const res = await fetch("https://fakestoreapi.com/products");
    const result = await res.json();
    return result;
})

const ProductSlice = createSlice({
    name:'products',
    initialState:{
        data:null,
        isLoader:false,
        isError:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state, action)=>{
            state.isLoader = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action)=>{
            state.isLoader = false;
            state.data = action.payload;
        })
        builder.addCase(fetchProducts.rejected, (state, action)=>{
            state.isLoader = false;
            state.isError = true;
        })
    }
})

export default ProductSlice.reducer;