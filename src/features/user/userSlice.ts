import { createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "@/src/lib/store/store"; 
import type { User } from "@/src/types/Auth";

export const fetchUserProfile = createAsyncThunk<
  User,
  void,
  {
    state: RootState;
    rejectValue: string;
  }
>("auth/fetchUserProfile", async (_, { getState, rejectWithValue }) => {
  const token = getState().auth.token;

  if (!token) {
    return rejectWithValue("لا يوجد token");
  }

  try {
    const response = await fetch("https://dummyjson.com/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      return rejectWithValue("فشل جلب معلومات المستخدم");
    }

    return await response.json();
  } catch {
    return rejectWithValue("حدث خطأ في الاتصال");
  }
});