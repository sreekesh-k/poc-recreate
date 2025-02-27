import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logoutAction: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("user");
    },
    loadUserAction: (state) => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        state.isAuthenticated = true;
        state.user = user;
      }
    },
  },
});

export const { loginAction, logoutAction, loadUserFromStorageAction } =
  authSlice.actions;
export default authSlice.reducer;
