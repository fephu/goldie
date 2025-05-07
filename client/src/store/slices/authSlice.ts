import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/types/auth";

interface AuthState {
  authenticated: boolean;
  user?: User;
  isLoading: boolean;
  error?: string;
}

const INITIAL_STATE: AuthState = {
  authenticated: false,
  user: undefined,
  isLoading: false,
  error: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    loginRequest: (state, action) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.isLoading = false;
      state.authenticated = true;
      state.user = action.payload;
    },
    loginFailure: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.authenticated = false;
      state.error = action.payload;
    },

    registerRequest: (state, action) => {
      state.isLoading = true;
    },
    registerSuccess: (state) => {
      state.isLoading = false;
    },
    registerFailure: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    fetchUserRequest: (state) => {
      state.isLoading = true;
    },
    fetchUserSuccess: (state, action: PayloadAction<User>) => {
      state.isLoading = false;
      state.authenticated = true;
      state.user = action.payload;
    },
    fetchUserFailure: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.authenticated = false;
    },
  },
});

export const {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  loginFailure,
  loginRequest,
  loginSuccess,
  registerRequest,
  registerSuccess,
} = authSlice.actions;
export const authReducer = authSlice.reducer;
