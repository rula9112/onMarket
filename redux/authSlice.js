import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// authActions.js
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, thunkAPI) => {
    const response = await fetch('https://dummyjson.com/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    console.log(data)
    if (response.ok) return data; // data includes token and user info
    else return thunkAPI.rejectWithValue(data);
  }
);

export const fetchUserProfile = createAsyncThunk(
  'auth/fetchUserProfile',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.accessToken;
    const response = await fetch('https://dummyjson.com/user/me', {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    if (response.ok) return data; // user object
    else return thunkAPI.rejectWithValue(data);
  }
);

// authSlice.js
const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, status: 'idle', error: null },
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(loginUser.pending, (state) => {
      state.status = "pending";
    })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.accessToken;
        state.user = action.payload.username;
        state.status = 'succeeded';
        console.log(state.token)
      })
      .addCase(loginUser.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      
  },
});
export default authSlice.reducer

