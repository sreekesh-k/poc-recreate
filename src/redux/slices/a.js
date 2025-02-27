import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  isLoading: true, 
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.isLoading = false;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logoutAction: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.isLoading = false;
      localStorage.removeItem("user");
    },
    loadUserAction: (state) => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        state.isAuthenticated = true;
        state.user = user;
      } else {
        state.isAuthenticated = false;
        state.user = null;
      }
      state.isLoading = false; 
    },
  },
});

export const { loginAction, logoutAction, loadUserAction } = authSlice.actions;
export default authSlice.reducer;
