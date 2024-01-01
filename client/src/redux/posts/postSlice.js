import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const dummyData = [
    { id: 1, title: 'Post 1', content: 'Content for post 1', image: "https://kenyaonlinenews.com/wp-content/uploads/2022/10/Linda-Ndungu-Bolt-Country-ManagerSamuel-Musumba-Safety-Program-Director-NTSA-and-Boda-Boda-Riders-during-the-safety-gears-handlover-ceremenony-.-scaled.jpg" },
    { id: 2, title: 'Post 2', content: 'Content for post 2', image: "https://kenyaonlinenews.com/wp-content/uploads/2022/10/Linda-Ndungu-Bolt-Country-ManagerSamuel-Musumba-Safety-Program-Director-NTSA-and-Boda-Boda-Riders-during-the-safety-gears-handlover-ceremenony-.-scaled.jpg" },
    { id: 3, title: 'Post 3', content: 'Content for post 3', image: "https://kenyaonlinenews.com/wp-content/uploads/2022/10/Linda-Ndungu-Bolt-Country-ManagerSamuel-Musumba-Safety-Program-Director-NTSA-and-Boda-Boda-Riders-during-the-safety-gears-handlover-ceremenony-.-scaled.jpg" },
    { id: 4, title: 'Post 4', content: 'Content for post 4', image: "https://kenyaonlinenews.com/wp-content/uploads/2022/10/Linda-Ndungu-Bolt-Country-ManagerSamuel-Musumba-Safety-Program-Director-NTSA-and-Boda-Boda-Riders-during-the-safety-gears-handlover-ceremenony-.-scaled.jpg" },
  ];

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return dummyData;
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
        state.data = action.payload;
        state.isLoading = false;
      });
  },
});

export default postSlice.reducer;
