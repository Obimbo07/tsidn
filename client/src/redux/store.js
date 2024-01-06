import { configureStore } from '@reduxjs/toolkit';
import postReducer from './Posts/postSlice';

export const store = configureStore({
  reducer: {
    posts: postReducer,
  },
})