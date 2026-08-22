import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

import {
  loginUser,
  logoutUser,
  registerUser,
  fetchUserProfile,
} from "./authAction";
import { AuthState, User } from "@/src/types/Auth";

const initialState: AuthState = {
  user: null,
  token: null,
  status: "idle",
  error: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setAuthToken: (
      state,
      action: PayloadAction<string>
    ) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },

    setUserProfile: (
      state,
      action: PayloadAction<User>
    ) => {
      state.user = action.payload;
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.status = "idle";
    },
  },

  extraReducers: (builder) => {
    builder

      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload.accessToken;
        state.isAuthenticated = true;
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.status = "rejected";
        state.error =
          action.payload ?? "Login failed";
      })

      // REGISTER
      .addCase(registerUser.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })

      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.user = action.payload;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })

      .addCase(registerUser.rejected, (state, action) => {
        state.status = "rejected";
        state.error =
          action.payload ?? "Registration failed";
      })

      // PROFILE
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
      })

      // LOGOUT
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.status = "idle";
      });
  },
});

export const {
  setAuthToken,
  setUserProfile,
  logout,
} = authSlice.actions;

export default authSlice.reducer;