import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


const  initialState = {
    data: [],
    isloading: false,
}

const postApi = 'http://localhost:5000/api/selectContent';

export const fetchPosts  = createAsyncThunk('posts/fetchPosts', async () => {
    try {
        const response = await axios.get(postApi);
        const result = response.data;
        console.log(result);
        return result;
    } catch(err) {
        throw new Error('Failed to get posts')
    }
})

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder 
          .addCase(fetchPosts.pending, (state) =>{
            state.isloading = true;
          })
          .addCase(fetchPosts.fulfilled, (state, action) => {
            state.isloading = false;
            state.data = action.payload.data;
          })
          .addCase(fetchPosts.rejected, (state) => {
            state.isloading = false;
          })
    }
})

export default postSlice.reducer;