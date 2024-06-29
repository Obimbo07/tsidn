import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const registerApi = `${process.env.REACT_APP_DATABASE_API}/api/registerUser`;
const loginApi = `${process.env.REACT_APP_DATABASE_API}/api/loginUser`;
const logoutApi = `${process.env.REACT_APP_DATABASE_API}/api/logout`;

export const registerUser = createAsyncThunk('auth/registerUser', async (userData) => {
  try {
    const response = await axios.post(registerApi, userData);
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
});

export const loginUser = createAsyncThunk('auth/loginUser', async (loginData) => {
  try {
    const response = await axios.post(loginApi, loginData);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
});


export const logoutUser = createAsyncThunk('auth/logoutUser', async (logoutData) => {
  try {
    const response = await axios.post(logoutApi, logoutData);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
});

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  registerSuccess: false,
  loginSuccess: false,
  logoutSuccess: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.success) {
          state.registerSuccess = true;
        } else {
          state.error = action.payload.message;
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.success) {
          state.user = action.payload.user;
          state.loginSuccess = true;
        } else {
          state.error = action.payload.message;
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.success) {
          state.user = action.payload.user;
          state.logoutSuccess = true;
        } else {
          state.error = action.payload.message;
        }
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
