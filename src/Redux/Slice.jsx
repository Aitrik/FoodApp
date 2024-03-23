import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from './Helper'

const initialState = {
    catego: [],
    status: "idle",
    item:[],
    searchResult:[],
    cartData1:JSON.parse(localStorage.getItem("cartData"))||[]
};

export const fetchCategories = createAsyncThunk(
    "food/fetchCategories", // Use a descriptive name for the async thunk
    async () => {
        try {
            const response = await axiosInstance.get(`/categories.php`);
            return response.data;
        } catch (error) {
            // Handle errors if needed
            throw Error("Failed to fetch categories");
        }
    }
);

export const items = createAsyncThunk(
    "food/items", // Use a descriptive name for the async thunk
    async (id) => {
        try {
            const response = await axiosInstance.get(`/filter.php?c=${id}`);
            return response.data;
        } catch (error) {
            
            throw Error("Failed to fetch categories");
        }
    }
);
export const search = createAsyncThunk(
    "search", 
    async (id) => {
        try {
            const response = await axiosInstance.get(`/search.php?s=${id}`);
            return response.data;
        } catch (error) {
           
            throw Error("Failed to fetch categories");
        }
    }
);

export const Slice = createSlice({
    name: "food",
    initialState,
    reducers: {
        cartData:(state,{payload})=>{
            const{product,quantity}=payload
            state.cartData1.push({product,quantity})
            localStorage.setItem("cartData",JSON.stringify(state.cartData1))
        },
        removeData:(state,{payload})=>{
            const Index=payload
            state.cartData1.splice(Index,1)
            localStorage.setItem("cartData",JSON.stringify(state.cartData1))
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCategories.fulfilled, (state, { payload }) => {
                state.status = "idle";
                state.catego = payload.categories;
            })
            .addCase(fetchCategories.rejected, (state) => {
                state.status = "idle";
                // Handle the rejection if needed
            })
            .addCase(items.pending, (state) => {
                state.status = "loading";
            })
            .addCase(items.fulfilled, (state, { payload }) => {
                state.status = "idle";
                state.item = payload.meals;
            })
            .addCase(items.rejected, (state) => {
                state.status = "idle";
               
            })
            .addCase(search.pending, (state) => {
                state.status = "loading";
            })
            .addCase(search.fulfilled, (state, { payload }) => {
                state.status = "idle";
                state.searchResult = payload.meals;
            })
            .addCase(search.rejected, (state) => {
                state.status = "idle";
               
            })
    },
});

export const { cartData,removeData } = Slice.actions
