import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// const api = 'https://tsidnapi.tsidn.org/api/selectContent';
const api = `${process.env.REACT_APP_DATABASE_API}/api/selectContent`;
const podcastsApi = `${process.env.REACT_APP_DATABASE_API}/api/selectPodCasts`;
const meetingsEventsApi = `${process.env.REACT_APP_DATABASE_API}/api/selectMeeting`;

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
   const response = await axios.get(api);
   return response.data;
  } catch(err){
    console.log(err); 
  }
});

export const fetchPodcasts = createAsyncThunk("posts/fetchPodcasts", async () => {
  try {
    const response = await axios.get(podcastsApi);
    console.log(response);
    return response.data;
  } catch(err){
    console.log(err);
  }
})

export const fetchMeetings = createAsyncThunk("posts/fetchMeetings", async () => {
  try {
    const response = await axios.get(meetingsEventsApi);
    return response.data;
  } catch(err){
    console.log(err);
  }
})


const initialState = {
  data: [],
  podcasts: [],
  meetings: [],
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
    })
    .addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = false;
    })
    .addCase(fetchPodcasts.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchPodcasts.fulfilled, (state, action) => {
      state.podcasts = action.payload.data;
      state.isLoading = false;
    })
    .addCase(fetchPodcasts.rejected, (state, action) => {
      state.isLoading = false;
    })
    .addCase(fetchMeetings.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchMeetings.fulfilled, (state, action) => {
      state.meetings = action.payload.data;
      state.isLoading = false;
    })
    .addCase(fetchMeetings.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
  });

export default postSlice.reducer;
