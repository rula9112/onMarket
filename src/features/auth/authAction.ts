import { createAsyncThunk } from "@reduxjs/toolkit";

import { setAuthToken, setUserProfile } from "./authSlice";

import { AuthResponse, LoginCredentials, RegisterResponse, User } from "@/src/types/Auth";
import { RootState } from "@/src/lib/store/store";


// LOGIN
export const loginUser = createAsyncThunk<
  AuthResponse,
  LoginCredentials,
  { rejectValue: string }
>(
  "auth/loginUser",
  async (credentials, thunkAPI) => {
    try {
      const response = await fetch(
        "https://dummyjson.com/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        return thunkAPI.rejectWithValue(
          data.message || "Login failed"
        );
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error instanceof Error
          ? error.message
          : "Unknown error"
      );
    }
  }
);


// REGISTER
export const registerUser = createAsyncThunk<
  RegisterResponse,
  Partial<User>,
  { rejectValue: string }
>(
  "auth/registerUser",
  async (userData, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://dummyjson.com/users/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(
          data.message || "Registration failed"
        );
      }

      const tempToken = `Bearer_${data.id}_${Date.now()}`;

      dispatch(setAuthToken(tempToken));
      dispatch(setUserProfile(data));

      return {
        ...data,
        token: tempToken,
      };
    } catch (error) {
      return rejectWithValue(
        error instanceof Error
          ? error.message
          : "Unknown error"
      );
    }
  }
);


// LOGOUT
export const logoutUser = createAsyncThunk<
  boolean,
  void,
  { rejectValue: string }
>(
  "auth/logoutUser",
  async (_, thunkAPI) => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("username");

      return true;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error instanceof Error
          ? error.message
          : "Unknown error"
      );
    }
  }
);


// FETCH PROFILE
export const fetchUserProfile = createAsyncThunk<
  User,
  void,
  {
    state: RootState;
    rejectValue: string;
  }
>(
  "auth/fetchUserProfile",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;

    if (!token) {
      return thunkAPI.rejectWithValue("No active session");
    }

    const res = await fetch("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      return thunkAPI.rejectWithValue("Failed to load profile");
    }

    const user: User = await res.json();
    return user;
  }
);