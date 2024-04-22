import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// const api = 'https://tsidnapi.tsidn.org/api/selectContent';

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
   const response = await axios.get(api);
   return response.data;
  } catch(err){
    console.log(err); 
  }
});

const initialState = {
  data: [],
  isLoading: false,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.isLoading = false;
      });
  },
});

export default postSlice.reducer;
